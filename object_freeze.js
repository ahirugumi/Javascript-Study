//オブジェクトを凍結し、呼び出し専用、再定義できないようにする
var bar={
    val: "test",
    getValString: function () {
        console.log(this.val);
    }
}
Object.freeze(bar);

//valを上書きする
bar.val="hoge";
//hogeではなく、testが出力される
console.log(bar.val);