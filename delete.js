/* 
    var y = 43;
    delete y;
    console.log(y); // false, cannot delete if declared with var.
    delete Math.PI; // false, cannot delete predefined properties.
 */
/* 
    var trees = new Array('redwood', 'bay', 'cedar', 'oak', 'maple');
    delete trees[3];
    if (3 in trees) {
        // 不会被执行
    }
    console.log(trees); 
*/