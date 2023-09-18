import { shellSort } from "./shellSort";
import { shuffle } from "./shuffle";

const TEST_ARRAY = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function lessThan(a: number, b: number) {
    return a < b;
}

function debugSort(array: number[]) {
    let result = shellSort(array, lessThan);

    // console.log(array, result);

    return result;
}

describe('shellSort', () => {
    test('Returns a copy', () => {
        expect(debugSort(TEST_ARRAY)).not.toBe(TEST_ARRAY);
    });

    test('Sorts a sorted array', () => {
        expect(debugSort(TEST_ARRAY)).toEqual(TEST_ARRAY);
    });
    
    test('Sorts a reversed array', () => {
        expect(debugSort(TEST_ARRAY.slice().reverse())).toEqual(TEST_ARRAY);
    });
    
    test('Sorts a shuffled array: attempt 1', () => {
        expect(debugSort(shuffle(TEST_ARRAY))).toEqual(TEST_ARRAY);
    });

    test('Sorts a shuffled array: attempt 2', () => {
        expect(debugSort(shuffle(TEST_ARRAY))).toEqual(TEST_ARRAY);
    });

    test('Sorts a shuffled array: attempt 3', () => {
        expect(debugSort(shuffle(TEST_ARRAY))).toEqual(TEST_ARRAY);
    });
});

