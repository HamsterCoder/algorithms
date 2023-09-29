import { quickSort, partition } from "./quickSort";
import { shuffle } from "./shuffle";

function lessThan(a: number, b: number): boolean {
    return a < b;
}

function debugSort(array: number[]) {
    let result = quickSort(array, lessThan);

    // console.log(array, result);

    return result;
}

const TEST_ARRAY = [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5];

function isPartitioned<T>(array: T[], lessThan: (a: T, b: T) => boolean, lt: number, gt: number): boolean {
    for (let i = 0; i < array.length; i += 1) {

        if (i < lt) {
            if (!lessThan(array[i], array[lt])) {
                return false;
            }
        } else if (i > gt) {
            if (!lessThan(array[gt], array[i])) {
                return false;
            }
        } else {
            if (
                lessThan(array[i], array[lt]) ||
                lessThan(array[lt], array[i]) ||
                lessThan(array[i], array[gt]) ||
                lessThan(array[gt], array[i])
            ) {
                return false;
            }
        }
    }

    return true;
}

describe('quickSort', () => {
    describe('partition', () => {
        test('Correct boundaries, correctly partitioned 1', () => {
            let TEST_PARTITION = [4, 3, 1, 5, 4, 7, 6, 4, 2];
            let res = partition(TEST_PARTITION, lessThan, 0, TEST_PARTITION.length - 1);
            expect(res).toEqual([3, 5]);
            expect(isPartitioned(TEST_PARTITION, lessThan, ...res)).toEqual(true);
        });

        test('Correct boundaries, correctly partitioned 2', () => {
            let TEST_PARTITION = [2, 3, 1, 5, 4, 7, 6, 4, 2, 2];
            let res = partition(TEST_PARTITION, lessThan, 0, TEST_PARTITION.length - 1);
            expect(res).toEqual([1, 3]);
            expect(isPartitioned(TEST_PARTITION, lessThan, ...res)).toEqual(true);
        });
    });

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

