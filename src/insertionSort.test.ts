import { runGenericTests } from "./genericSortTests";
import { insertionSort } from "./insertionSort";

const testArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function lessThan(a: number, b: number): boolean {
    return a < b;
}

runGenericTests<number>('insertionSort', insertionSort, testArray, lessThan);