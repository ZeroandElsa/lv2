var num=+prompt("请输入您要排序的个数");
var arr=new Array(num);


    for(var n=0;n <num;n++)
    {
        arr[n]=+prompt("请输入第"+(n+1)+"个数字");

    }
    function arrSort(arr) {
        for(var i = 0; i < arr.length - 1; i++) {
          var isComplete = true;
            for(var j = 0; j < arr.length - 1-i; j++) {
                var a = arr[j];
                var b = arr[j + 1];
                if(a > b) {
                    arr[j] = b;
                    arr[j + 1] = a;
                    isComplete = false;
                    console.log(isComplete,1)
                }
            }
            if(isComplete){
                break;
            }
        }
        return arr;
    }
    console.log(arrSort(arr))