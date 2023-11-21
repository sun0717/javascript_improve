var mySet = new Set();
mySet.add(1);
mySet.add("some text");
mySet.add("foo");

mySet.has(1);
mySet.delete("foo");
mySet.size;

for (let item of mySet) console.log(item);