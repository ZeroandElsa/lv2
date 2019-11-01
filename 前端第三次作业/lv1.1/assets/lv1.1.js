var str = "hello  world";

function change(str){
    var arr = str.split(" ");

    for (var i = 0; i < arr.length; i++){
            var char = arr[i].charAt(0);
            arr[i] = arr[i].replace(char,function replace(char){
                return char.toUpperCase();
            });
    }
    return arr.join(" ");
}
console.log(change(str))