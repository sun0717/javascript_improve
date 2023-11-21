/* var Animal = {
    type: "Invertebrates", 
    displayType: function () {
        console.log(this.type);
    },
};

// 创建一种新的动物
var animal1 = Object.create(Animal);
animal1.displayType(); // Output: Invertebrates

// 创建一种新的动物-Fishes
var fish = Object.create(Animal);
fish.type = "Fishes";
fish.displayType(); // Output: Fishes */
var o = {
    a: 7,
    get b() {
        return this.a + 1;
    },
    set c(x) {
        this.a = x / 2;
    },
};

console.log(o.a);
console.log(o.b);
o.c = 50;
console.log(o.a);