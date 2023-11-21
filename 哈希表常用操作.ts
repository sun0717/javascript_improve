// 初始化哈希表
const map = new Map<number, string>();
// 添加操作
// 在哈希表中添加键值对 (key, value)
map.set(1, 'a');
map.set(2, 'b');
map.set(3, 'c');
map.set(4, 'd');
map.set(5, 'e');

let t_name = map.get(3);

map.delete(4);

// 三种遍历方法
for (const [k, v] of map.entries()) {
    console.info(k + '->' + v);
}

for (const k of map.keys()) {
    console.info(k);
}

for (const v of map.values()) {
    console.info(v);
}

