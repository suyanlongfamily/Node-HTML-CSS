// 选择排序
var arry = [5, 4, 432, 412, 3, 234, 234, 643, 567, 82, 32, 55, 2, 1];
console.log(arry);
function selctSort(param) {
    for (var i = 0; i < param.length; ++i) {
        // console.log("-i-", i);
        for (var indexj = i + 1; indexj < param.length; ++indexj) {
            // console.log("---", indexj);
            if (param[i] > param[indexj]) {
                // console.log("-indexj--", indexj);
                // console.log("-param[i]--", param[i]);
                // console.log("-param[indexj]--", param[indexj]);                
                var element = param[i];
                param[i] = param[indexj];
                param[indexj] = element;
            }
        }
        //console.log("------------------");
    }
}
selctSort(arry);
console.log(arry);



