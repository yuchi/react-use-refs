# useRefs ♻️

> React hook to create multiple refs in a single call.

## Usage

Instead of calling `useRef` many times, you just call `useRefs` and destructure **as many refs as you want!**

```js
import useRefs from "react-use-refs";

const [someRef, anotherRef] = useRefs();
```

The first and only argument is the `initialValue` of the refs. There’s no way to specify a different value for each ref. Use a list of `React.useRef`s for that!

## TypeScript support

This library supports TypeScript and should work exactly as `React.useRef` does.

```tsx
const [cardRef, cardBodyRef] = useRefs<HTMLDivElement>();

return <div ref={cardRef}> ... </div>;
```

If you want to have multiple ref types, then you can pass a tuple and have it spread onto the created refs:

```tsx
const [cardRef, inputRef] = useRefs<[HTMLDivElement, HTMLInputElement]>(null);
```

> ⚠️ Passing `null` as the `initialValue` is required for tuples!

## Frequently Asked Questions

#### 🧙‍♀️ Is this black magic?

No. Keep reading.

#### 🤔 So how does this work?!

This hook returns an iterable object, something you can use in a `for (of)` statement, with `Array.from()` or (and this is the neat part) with the Array Destructuring syntax (the one you use for `state`/`setState` pairs for example.)

Also, if you have a look at the code the returned value from the iterator has always the `done` flag set to `false`. This is an infinite loop disguised as an iterator! But since calling next during array destructuring happens a finite number of times, hence we do not hit typical infinte loop behaviour (aka frozen page).

#### 📜 Does this break the Rules of Hooks?

**Short answer: no.** Real answer: it’s up to you. Actual real answer follows.

The [_Rules of Hooks_ section of React’s official documentation cite](https://reactjs.org/docs/hooks-rules.html): <q>Don’t call Hooks inside loops, conditions, or nested functions.</q>

As you can see in the source code we are definitely breaking this rule by calling `useRef` inside the `next()` method of the Iterable.

But we need to understand the the Rules of Hooks exist for a reason, and that is to have statically stable invocation of primitive hooks between re-renders.

Since we explicitly encourage the use of Array Destructuring, the dynamic part is made “static” by hard-coding it in your own source code. We therefore **do not** break the rules of hooks.

#### 😈 But wait I can manually call `.next()` conditionally!

Yeah, you can do some bad stuff with the returned iterator, but it’s not that different from having, for example, the following code:

```js
const iSwearIAmNotUseRef = React.useRef();
```

The only issue is that using the returned iterator doesn’t throw a ESLint warning at you as the above code would.

#### 😕 Ok, but why did you do it?

Because I could. And because [@drcmda](https://github.com/drcmda) said he would use it and would love it. ❤️ Spread love and not some silly questions about what people do in their free time.

## Credits

- Thanks to [@drcmda](https://github.com/drcmda) for stating his need for such an API.
- Thanks to [@Andarist](https://github.com/Andarist) for the initial TypeScript types definition.

## License

MIT
