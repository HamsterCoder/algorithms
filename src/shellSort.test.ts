import { runGenericTests } from "./genericSortTests";
import { shellSort } from "./shellSort";

const testArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function lessThan(a: number, b: number): boolean {
    return a < b;
}

runGenericTests<number>('shellSort', shellSort, testArray, lessThan);