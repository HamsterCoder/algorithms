import { MaxHeap } from "./MaxHeap";

describe('MaxHeap', () => {
    let heap: MaxHeap<number>;

    beforeEach(() => {
        heap = new MaxHeap((a, b) => a < b);

        heap.add(1);
        heap.add(2);
        heap.add(3);
        heap.add(4);
        heap.add(5);
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
});