import { Heap } from "./Heap";

export class MinHeap<T> extends Heap<T>{
    constructor(greaterThan: (a: T, b: T) => boolean, items?: T[]) {
        super(greaterThan, items);
    }

    removeMin(): T {
        return this.removeRoot();
    }
}