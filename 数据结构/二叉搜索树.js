class Node {
    constructor(data) {
        this.left = null;
        this.right = null;
        this.value = data;
    }
    // insertNode: 根据一个父节点插入一个子节点
    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            (!root.left) ? root.left = newNode : this.insertNode(root.left, newNode);
        } else {
            (!root.right) ? root.right = newNode : this.insertNode(root.right, newNode);
        }
    }
    // insert: 插入一个新节点
    insert(value) {
        let newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }
    // removeNode: 根据一个父节点移除一个子节点
    removeNode(root, value) {
        if (!root) {
            return null;
        }
        if (value < root.value) {
            root.left = this.removeNode(root.left, value);
            return root;
        } else if (value > root.value) {
            root.right = this.removeNode(root.right, value);
            return root;
        } else {
            // 找到需要删除的节点
            // 如果当前 root 节点无左右子节点
            if (!root.left && !root.right) {
                root = null;
                return root;
            }

            // 只有左节点
            if (root.left && !root.right) {
                root = root.left;
                return root;
            } else if (root.right) {
                root = root.right;
                return root;
            }

            // 有左右两个节点
            let minRight = this.findMinNode(root.right);
            root.value = minRight.value;
            root.right = this.removeNode(root.right, minRight.value);
            return root;
        }
    }
    // remove: 移除一个节点
    remove(value) {
        if (this.root) {
            this.removeNode(this.root, value);
        }
    }
    // findMinNode: 获取
    findMinNode(root) {
        if (!root.left) {
            return root;
        } else {
            return this.findMinNode(root.left);
        }
    }
    // 查找结点的方法
    searchNode(root, value) {
        if (!root) {
            return null;
        }

        if (value < root.value) {
            return this.searchNode(root.left, value);
        } else if (value > root.value) {
            return this.searchNode(root.right, value);
        }

        return root;
    }

    search(value) {
        if (!this.root) {
            return false;
        }
        return Boolean(this.searchNode(this.root, value));
    }

    // 先序遍历
    preOrder(root) {
        if (root) {
            console.log(root.value);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }

    // 中序遍历
    inOrder(root) {
        if (root) {
            this.inOrder(root.left);
            console.log(root.value);
            this.inOrder(root.right);
        }
    }

    // 后序遍历
    postOrder(root) {
        if (root) {
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.value);
        }
    }
}

