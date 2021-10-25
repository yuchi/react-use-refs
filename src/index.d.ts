import * as React from "react";

type Tuple<T = any> = [T] | T[];
type IsTuple<T> = T extends any[] ? (any[] extends T ? never : T) : never;
type RefObjectOf<T> = null extends T
  ? React.RefObject<T>
  : React.MutableRefObject<T>;

export default function useRefs<T extends Tuple>(
  initialValue: T extends IsTuple<T> ? null : never
): T extends IsTuple<T> ? { [I in keyof T]: RefObjectOf<T[I]> } : never;

// function useRef<T>(initialValue: T): MutableRefObject<T>;

export default function useRefs<T>(
  initialValue: T
): React.MutableRefObject<T>[];

// function useRef<T>(initialValue: T|null): RefObject<T>;

export default function useRefs<T>(
  initialValue: T | null
): React.RefObject<T>[];

// function useRef<T = undefined>(): MutableRefObject<T | undefined>;

export default function useRefs<T = undefined>(): React.MutableRefObject<
  T | undefined
>[];
