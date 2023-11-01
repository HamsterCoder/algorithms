import { runGenericTests } from "./genericSortTests";
import { insertionSort } from "./insertionSort";

const testArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function lessThan(a: number, b: number): boolean {
  return a < b;
}

runGenericTests<number>(
  "insertionSort.numbers",
  insertionSort,
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  (a: number, b: number): boolean => {
    return a < b;
  }
);

runGenericTests<{key: number}>("insertionSort.generic", insertionSort, [
    {key: 1},
    {key: 2},
    {key: 3},
    {key: 4},
    {key: 5},
], (a: {key: number}, b: {key: number}): boolean => {
    return a.key < b.key;
  });
