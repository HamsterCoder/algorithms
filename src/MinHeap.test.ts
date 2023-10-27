import { MinHeap } from "./MinHeap";

describe('MinHeap', () => {
    let heap: MinHeap<number>;

    beforeEach(() => {
        heap = new MinHeap((a, b) => a > b, [1, 2, 3, 4, 5]);

        console.log(heap.items);
    });

    test('Correctly counts items', () => {
        expect(heap.size).toEqual(5);
    });

    test('Correctly removes root', () => {
        expect(heap.removeMin()).toEqual(1);
        expect(heap.size).toEqual(4);
    });

    test('Correctly removes two roots', () => {
        expect(heap.removeMin()).toEqual(1);
        expect(heap.removeMin()).toEqual(2);
        expect(heap.size).toEqual(3);
    });

    test('Correctly adds a min', () => {
        expect(heap.add(0));
        expect(heap.removeMin()).toEqual(0);
    });

    test('Correctly adds some value', () => {
        expect(heap.add(3));
        expect(heap.removeMin()).toEqual(1);
    });
});