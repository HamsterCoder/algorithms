export const shellSort = function<T> (array: T[], lessThan: (a: T, b: T) => boolean): T[] {
    let sortedArray = array.slice();

    let n = sortedArray.length;
    let h = 1;

    while (h < n / 3) {
        h = 3 * h + 1;
    }

    while (h >= 1) {
        console.log(`h: ${h}`);
        
        for (let i = 0; i < n - h; i += 1) {
            for (let j = i; j < n; j += h) {
                let k = j;

                while (k >= 0) {
                    if (lessThan(sortedArray[k], sortedArray[k - h])) {
                        let temp = sortedArray[k];
                        sortedArray[k] = sortedArray[k - h];
                        sortedArray[k - h] = temp;
                    }

                    k -= h;
                }
            }
        }

        h = (h - 1) / 3;
    }

    return sortedArray;
};