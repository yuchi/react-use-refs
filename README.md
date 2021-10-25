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

## Credits

- Thanks to [@drcmda](https://github.com/drcmda) for stating his need for such an API.
- Thanks to [@Andarist](https://github.com/Andarist) for the initial TypeScript types definition.

## License

MIT
