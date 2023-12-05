class ForwardListNode {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
    }
}

class Hashtable {
    constructor(bucketSize = 97) {
        this._bucketSize = bucketSize;
        this._size = 0;
        this._buckets = new Array(this._bucketSize);
    }

    hash(key) {
        let h = 0;
        for (let n = key.length, i = 0; i != n; i++) {
            h = (h << 5 | h >> 27)
            h += key[i].charCodeAt();
        }
        return (h >>> 0) % this._bucketSize;
    }
    // Modifiers
    put(key, value) {
        let index = this.index(key);
        let node = new ForwardListNode(key, value);

        if (!this._buckets[index]) {
            // 如果桶是空的，则直接把新节点放入桶中
            this._buckets[index] = node;
        } else {
            // 如果桶不为空，则在链表表头插入新节点
            node.next = this._buckets[index];
            this._buckets[index] = node;
        }
        this._size++;
        return index;
    }
    delete(key) {
        let index = this.hash(key);
        if (!this._buckets[index]) {
            return false;
        }

        // 添加一个虚拟头节点，以便后面进行虚拟操作
        let dummy = new ForwardListNode(null, null);
        dummy.next = this._buckets[index];
        let cur = dummy.next, pre = dummy;
        while (cur) {
            if (cur.key === key) {
                // 从链表中删除该节点
                pre.next = cur.next;
                cur = pre.next;
                this._size--;
            } else {
                pre = cur;
                cur = cur.next;
            }
        }
        this._buckets[index] = dummy.next;
        return true;
    }

    // Lookup
    find(key) {
        let index = this.hash(key);
        // 如果对应的桶为空，则说明不存在 key 
        if (!this._buckets[index]) {
            return null;
        }

        // 遍历对应桶的链表
        let p = this._buckets[index];
        while (p) {
            // 找到 key 
            if (p.key === key) {
                return p.value;
            }
            p = p.next;
        }
        return null;
    }

    // Capacity
    size() {
        return this._size;
    }

    isEmpty() {
        return this._size == 0;
    }
}