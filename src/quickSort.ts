import { shuffleInplace } from "./shuffle";

// 3-way partition implementation
export function partition<T>(array: T[], lessThan: (a: T, b: T) => boolean, i: number, j: number): [number, number] {
    let value = array[i];
    let lt = i;
    let gt = j;
    let index = i + 1;

    while (index <= gt) {
        if (lessThan(array[index], value)) {
            let temp = array[lt];
            array[lt] = array[index];
            array[index] = temp;
            index += 1;
            lt += 1;
        } else if (lessThan(value, array[index])) {
            let temp = array[gt];
            array[gt] = array[index];
            array[index] = temp;
            gt -= 1;
        } else {
            index += 1;
        }
    }

    return [lt, gt];
}

function sort<T>(array: T[], lessThan: (a: T, b: T) => boolean, i: number, j: number): T[] {
    if (i >= j) {
        return array;
    }

    // 1. Shuffle
    array = shuffleInplace(array, i, j);

    // 2. Partition
    let [lt, gt] = partition(array,lessThan, i, j);

    // 3. Sort recursively
    array = sort(array, lessThan, i, lt - 1);
    array = sort(array, lessThan, gt + 1, j);

    return array;
}

export const quickSort = function<T> (array: T[], lessThan: (a: T, b: T) => boolean): T[] {
    let sortedArray = array.slice();

    return sort(sortedArray, lessThan, 0, sortedArray.length - 1);
};