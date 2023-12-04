export interface TreeNode<K, V> {
  key: K;
  value: V;
  count: number;
  left: TreeNode<K, V> | null;
  right: TreeNode<K, V> | null;
}

// TODO
// Add this method description to docs
// Rank: how many keys are smaller than k, bigger than k

export class BinarySearchTree<K, V> {
  root: TreeNode<K, V> | null = null;
  compare: (a: K, b: K) => number;

  constructor(compare: (a: K, b: K) => number) {
    this.compare = compare;
  }

  [Symbol.iterator](this: BinarySearchTree<K, V>): Iterator<TreeNode<K, V>> {
    const items = this.getSortedNodes(this.root);
    let i = 0;
    return {
        next() {
            if (i === items.length) {
                return { done: true, value: undefined };
            }

            return { value: items[i++]};
        }
    };
  }

  private getSortedNodes(node: TreeNode<K, V> | null): TreeNode<K, V>[] {
    if (node === null) {
        return [];
    }

    return [
        ...this.getSortedNodes(node.left),
        node,
        ...this.getSortedNodes(node.right)
    ];
  }

  get(key: K): V | null {
    let root = this.root;

    while (root !== null) {
      let cmp = this.compare(key, root.key);

      if (cmp < 0) {
        root = root.left;
      } else if (cmp > 0) {
        root = root.right;
      } else {
        return root.value;
      }
    }

    return null;
  }

  size(node: TreeNode<K, V> | null): number {
    if (node === null) {
      return 0;
    }

    return node.count;
  }

  private _set(node: TreeNode<K, V> | null, key: K, value: V): TreeNode<K, V> {
    if (node === null) {
      return {
        key,
        value,
        count: 1,
        left: null,
        right: null,
      };
    }

    let cmp = this.compare(key, node.key);

    if (cmp < 0) {
      node.left = this._set(node.left, key, value);
    } else if (cmp > 0) {
      node.right = this._set(node.right, key, value);
    } else {
      node.value = value;
    }

    node.count = 1 + this.size(node.left) + this.size(node.right);

    return node;
  }

  set(key: K, value: V): void {
    this.root = this._set(this.root, key, value);
  }

  min(): TreeNode<K, V> | null {
    let node = this.root;

    while (node?.left) {
        node = node.left;
    }

    return node;
  }

  max(): TreeNode<K, V> | null {
    let node = this.root;

    while (node?.right) {
        node = node.right;
    }

    return node;
  }
}
