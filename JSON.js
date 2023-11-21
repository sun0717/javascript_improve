// 1. 序列化
let obj = {
    name: 'sun',
    age: '25',
    gender: 'male',
    hobbies: [
        {
            id: 1,
            name: 'swim'
        },
        {
            id: 2,
            name: 'sing'
        },
        {
            id: 3,
            name: 'walk'
        }
    ]
}
// 2. 深拷贝
let ingredients_list = ["noodles", { list: ["eggs", "flour", "water"] }];
let ingredients_list_deepcopy = JSON.parse(JSON.stringify(ingredients_list));
ingredients_list_deepcopy[1].list[1] = 'beef'
console.log(ingredients_list);
console.log(ingredients_list_deepcopy);
