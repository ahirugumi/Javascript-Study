//Array.concatに対する動的にオブジェクトのメソッドを上書きする（モンキーパッチ）
var my_array=Array.prototype.concat;
Array.prototype.concat=function (arg) {
    var result = arg[0];
    for (var i = 1; i < arg.length; i++) {
        result += "-" + arg[i];
    }
    console.log(result);
}

//実行
# -> 10-20-30-40-50
var piyo=new Array(100,200,300);
piyo.concat(new Array(10,20,30,40,50));
# -> foo-baz-bar
var piyo=new Array(100,200,300);
piyo.concat(new Array("foo","baz","bar"));