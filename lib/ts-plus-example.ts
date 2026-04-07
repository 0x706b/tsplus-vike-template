/**
 * @tsplus type Type
 */
export interface Type {
  a: number;
}

/**
 * @tsplus pipeable Type add
 */
export function add(n: number) {
  return (self: Type): Type => ({ a: self.a + n });
}
