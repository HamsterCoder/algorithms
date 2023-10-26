import { MaxHeap } from "./MaxHeap";

describe('MaxHeap', () => {
    let heap: MaxHeap<number>;

    beforeEach(() => {
        heap = new MaxHeap((a, b) => a < b, [1, 2, 3, 4, 5]);
    });

    test('Correctly counts items', () => {
        expect(heap.size).toEqual(5);
    });

    test('Correctly removes root', () => {
        expect(heap.removeMax()).toEqual(5);
        expect(heap.size).toEqual(4);
    });

    test('Correctly removes two roots', () => {
        expect(heap.removeMax()).toEqual(5);
        expect(heap.removeMax()).toEqual(4);
        expect(heap.size).toEqual(3);
    });

    test('Correctly adds a max', () => {
        expect(heap.add(6));
        expect(heap.removeMax()).toEqual(6);
    });

    test('Correctly adds some value', () => {
        expect(heap.add(3));
        expect(heap.removeMax()).toEqual(5);
    });
});