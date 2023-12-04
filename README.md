## About

This repository contains implementations of some data structures and algorithms. It serves the purpose of reference. Not for production use.

### What do you have?

#### Sorts and shuffles

* Knuth Shuffle - returns a shuffled copy of the array
* Shell Sort - returns a sorted copy of the array
* Quick Sort - returns a sorted copy of the array
* Insertion Sort - returns a sorted copy of the array

#### Data structures
* MaxHeap - allows for `add` and `removeMax` operations (with heapify)
* MinHeap - allows for `add` and `removeMin` operations (with heapify)
* Heap - allows for `add` and `removeRoot` operations (with heapify)
* BinarySearchTree - allows for `set`, `get`, `min`, `max`, iteration (no deletion)

## Development

Testcases are created with `jest`. Run testcases:

```
npm run test
```