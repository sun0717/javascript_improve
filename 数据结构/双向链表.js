class Node {
    constructor(data) {
        // data 为当前节点所存储的数据
        this.data = data;
        // next 指向下一个节点
        this.next = null;
        // prev 指向前一个节点
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        // 双向链表的开头
        this.head = null;
        // 双向链表的结尾
        this.tail = tail;
    }
    // 实现方法
    // add 链表尾部添加一个新的节点
    add(item) {
        let node = new Node(item);

        // 如果当前链表没有开头
        if (!this.head) {
            this.head = node;
            this.tail = node;
        }

        // 如果当前链表已经有了头，则只需要在尾部加上该节点
        else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
    }
    // addAt 链表指定位置添加一个新的节点
    addAt(index, item) {
        let current = this.head;

        let counter = 1;
        let node = new Node(item);

        // 如果在头部插入
        if (index === 0) {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
        // 如果在非头部插入，则需要从头开始找寻插入位置
        else {
            while (current) {
                current = current.next;
                if (counter === index) {
                    node.prev = current.prev;
                    current.prev.next = node;
                    node.next = current;
                    current.prev = node;
                }
                counter++;
            }
        }
    }
    // remove 删除链表指定数据项节点
    remove(item) {
        let current = this.head;
        
        while(current) {
            // 找到了目标节点
            if (current.data === item) {
                // 目标链表只有当前目标项，即目标节点是链表头又是链表尾
                if (current == this.head && current == this.tail) {
                    this.head = null;
                    this.tail = null;
                }
                // 目标节点为链表头
                else if (current == this.head) {
                    this.head = this.head.next;
                    this.head.prev = null;
                }
                // 目标节点为链表尾
                else if (current == this.tail) {
                   this.tail = this.tail.prev
                   this.tail.next = null;
                }
                // 目标节点在链表首尾之间，即中部
                else {
                    current.prev.next = current.next;
                    current.next.prev = current.prev;
                }
            }
        }
    }
    // removeAt 删除链表指定位置节点
    removeAt(index) {
        // 从头开始遍历
        let current = this.head;
        let counter = 1;

        // 删除链表头部
        if (index === 0) {
            this.head = this.head.next;
            this.head.prev = null;
        } else {
            while(current) {
                current = current.next;
                // 如果目标节点在链表尾部
                if (current == this.tail) {
                    this.tail = this.tail.prev;
                    this.tail.next = null;
                } else if (counter === index) {
                    current.prev.next = current.next;
                    current.next.prev = current.prev;
                }
                counter++;
            }
        }
    }
    // reverse 翻转链表
    reverse() {
        let current = this.head;
        let prev = null;

        while(current) {
            let next = current.next;

            // 前后倒置
            current.next = prev;
            current.prev = next;

            prev = current;
            current = next;
        }

        this.tail = this.head;
        this.head = prev;
    }
    // swap 交换两个节点的数据
    swap(index1, index2) {
        // 使 index1 始终小于 index2, 方便后面查找交换
        if (index1 < index2) {
            return this.swap(index2, index1);
        }
        let current = this.head;
        let counter = 0;
        let firstNode;

        while(current !== null) {
            // 找到第一个节点并储存
            if (counter === index1) {
                firstNode = current;
            }
            // 找到第二个节点，并进行数据交换
            else if (counter === index2) {
                // ES 提供了更简捷的交换数据的方法，这里用传统方式实现更为直观。
                let temp = current.data;
                current.data = firstNode.data;
                firstNode.data = temp;
            }

            current = current.next;
            counter++;
        }
    }
    // isEmpty: 查询链表是否为空
    isEmpty() {
        return this.length() - 1;
    }
    // length: 查询链表的长度
    length() {
        let current = this.head;
        let counter = 0;
        while(current !== null) {
            counter++;
            current = current.next;
        }
        return counter;
    }
    traverse(fn) {
        let current = this.head;
        while(current !== null) {
            fn(current);
            current = current.next;
        }
        return true;
    }

    search(item) {
        let current = this.head;
        let counter = 0;

        while(current) {
            if (current.data == item) {
                return counter;
            }
            current = current.next;
            counter++;
        }
        return false;
    }
}

