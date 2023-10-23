export const insertionSort = function<T>(array: T[], lessThan: (a: T, b: T) => boolean): T[] {
    let sortedArray = array.slice();

    for (let i = 1; i < sortedArray.length; i += 1) {
        let curr = sortedArray[i];
        let j = i - 1;

        while (lessThan(curr, sortedArray[j])) {
            sortedArray[j + 1] = sortedArray[j];
            sortedArray[j] = curr;
            j -= 1;
        }
    }

    return sortedArray;
};