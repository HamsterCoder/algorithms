export class MaxHeap<T> {
    items: T[] = [];
    size: number = 0;
    lessThan: (a: T, b: T) => boolean;

    constructor(lessThan: (a: T, b: T) => boolean) {
        this.lessThan = lessThan;
    }

    balanceUp(i: number): void {
        let item = this.items[i];
        let parentIndex = Math.floor(i / 2);

        while (this.lessThan(this.items[parentIndex], item) && i > 1) {
            this.items[i] = this.items[parentIndex];
            this.items[parentIndex] = item;
            i = parentIndex;
            parentIndex = Math.floor(i / 2);
        }
    }

    add(item: T): void {
        // Insert in the last place
        this.items[this.size + 1] = item;
        
        // Balance Up
        this.balanceUp(this.size + 1);

        // Update size
        this.size += 1;
    }

    balanceDown(i: number): void {
        let item = this.items[i];
        let leftChildIndex = 2 * i;
        let rightChildIndex = 2 * i + 1;

        while (this.lessThan(item, this.items[leftChildIndex]) || this.lessThan(item, this.items[rightChildIndex])) {
            if (this.lessThan(this.items[leftChildIndex], this.items[rightChildIndex])) {
                this.items[i] = this.items[rightChildIndex];
                this.items[rightChildIndex] = item;
                i = rightChildIndex;
            } else {
                this.items[i] = this.items[leftChildIndex];
                this.items[leftChildIndex] = item;
                i = leftChildIndex;
            }

            leftChildIndex = 2 * i;
            rightChildIndex = 2 * i + 1;
        }
    }

    removeMax(): T {
        if (this.size === 0) {
            throw new Error('MaxHeap: cannot remove max, heap is empty.');
        }

        const root = this.items[1];

        // Promote new root
        this.items[1] = this.items[this.size];

        // Remove last element
        delete this.items[this.size];
        this.size -= 1;

        // Balance new root
        this.balanceDown(1);

        return root;
    }
}