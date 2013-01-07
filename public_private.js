/*
thisによって参照される関数のコンテキストは、その関数がどのように宣言されたかではなく、どのように呼び出されたかによって決まる
同じ関数でも、どのように呼び出されたかによって、別の関数のコンテキストを持つ事がある
*/
//グローバル
var test="foo";
function private_scope () {
    //ローカル
    var test="baz";
    function local_function () {
        return test;
    }
    //ローカル関数を実行してローカル変数を返す
    return local_function();
}
function public_scope () {
    //ローカル
    var test="baz";
    function local_function () {
        return test;
    }
    //ローカル関数を実行せず、ローカル関数自体を返す
    return local_function;
}
private_scope();    //# -> bazが返る
public_scope()();   //戻ってきた関数を実行# -> bazが返る（クロージャ）
