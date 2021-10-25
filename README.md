# useRefs ♻️

> React hook to create multiple refs in a single call.

## Usage

Instead of calling `useRef` many times, you just call `useRefs` and destructure **as many refs as you want!**

```js
import useRefs from "react-use-refs";

const [someRef, anotherRef] = useRefs();
```

## TypeScript support

This library supports TypeScript and should work exactly as `React.useRef` does.

```tsx
const [cardRef, cardBodyRef] = useRefs<HTMLDivElement>();

return <div ref={cardRef}> ... </div>;
```

If you want to have multiple ref types, then you can pass a tuple and have it spread onto the created refs:

```tsx
const [cardRef, inputRef] = useRefs<[HTMLDivElement, HTMLInputElement]>();
```

## License

MIT
