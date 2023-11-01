import { Heap } from "./Heap";

export class MaxHeap<T> extends Heap<T>{
    constructor(lessThan: (a: T, b: T) => boolean, items?: T[]) {
        super(lessThan, items);
    }

    removeMax(): T {
        return this.removeRoot();
    }
}
