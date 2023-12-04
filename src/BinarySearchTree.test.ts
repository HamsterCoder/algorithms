import { BinarySearchTree } from "./BinarySearchTree";

describe('BinarySearchTree', () => {
    let bst: BinarySearchTree<string, number>;

    beforeEach(() => {
        bst = new BinarySearchTree((a, b) => a > b ? 1 : (a === b ? 0 : -1));
    });

    test('Sets and gets one key-value', () => {
        bst.set('a', 0);
        expect(bst.get('a')).toEqual(0);
        expect(bst.root?.count).toEqual(1);
    });

    test('Sets and gets a pair of key-values', () => {
        bst.set('a', 0);
        bst.set('b', 1);

        for (let node of bst) {
            console.log(node?.key, node?.value);
        }

        expect(bst.get('a')).toEqual(0);
        expect(bst.get('b')).toEqual(1);
        expect(bst.root?.count).toEqual(2);
    });

    test('Provides in order iteration', () => {
        bst.set('a', 0);
        bst.set('b', 1);
        bst.set('c', 2);
        bst.set('d', 3);
        bst.set('e', 4);
        bst.set('f', 5);

        expect(bst.root?.count).toEqual(6);

        let prev;

        for (let node of bst) {
            if (!prev) {
                prev = node;
            } else {
                expect(bst.compare(node?.key, prev?.key) === 1).toBeTruthy();
            }
        }
    });

    test('Returns min and max', () => {
        bst.set('a', 0);
        bst.set('b', 1);
        bst.set('c', 2);
        bst.set('d', 3);
        bst.set('e', 4);
        bst.set('f', 5);

        expect(bst.min()?.key).toEqual('a');
        expect(bst.max()?.key).toEqual('f');
    });
});