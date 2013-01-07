//グローバル変数にevalをセットする
var global_eval=eval;
var foo="foo",baz="baz";
function test1 () {
    var foo="t1";
    //通常のevalを呼び出す
    eval("console.log(foo);");
    return foo;
}
function test2 () {
    var baz="t2";
    //グローバルのevalを呼び出す
    global_eval("console.log(baz);");
    return baz;
}

//呼び出す
test1();
test2();
/* 実行結果
> test1()
  t1
  "t1"
//グローバルスコープで結果が返る
> test2()
  baz
  "t2"
*/
