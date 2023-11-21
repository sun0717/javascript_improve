// 如果所判别的对象确实是所指定的类型，则返回 true。
// objectName instanceof objectType.
var theDay = new Date(1995, 12, 17);
if (theDay instanceof Date) {
    console.log('instanceof Date');
}