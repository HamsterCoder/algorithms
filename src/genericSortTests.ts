import { shuffle } from "./shuffle";
import { SortMethod } from "./types";

export function runGenericTests<T>(sortMethodName: string, sortMethod: SortMethod<T>, testArray: T[], lessThan: (a: T, b: T) => boolean) {
    function debugSort(array: T[]) {
        let result = sortMethod(array, lessThan);

        // console.log(array, result);

        return result;
    }

    describe(sortMethodName, () => {
        test('Returns a copy', () => {
            expect(debugSort(testArray)).not.toBe(testArray);
        });
    
        test('Sorts a sorted array', () => {
            expect(debugSort(testArray)).toEqual(testArray);
        });
        
        test('Sorts a reversed array', () => {
            expect(debugSort(testArray.slice().reverse())).toEqual(testArray);
        });
        
        test('Sorts a shuffled array: attempt 1', () => {
            expect(debugSort(shuffle(testArray))).toEqual(testArray);
        });
    
        test('Sorts a shuffled array: attempt 2', () => {
            expect(debugSort(shuffle(testArray))).toEqual(testArray);
        });
    
        test('Sorts a shuffled array: attempt 3', () => {
            expect(debugSort(shuffle(testArray))).toEqual(testArray);
        });
    });
}

