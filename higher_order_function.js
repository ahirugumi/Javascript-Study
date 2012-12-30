//高階関数
//関数を引数にとったり、関数を戻り値にとったりする関数の事
function process (data,fun) {
    return function () {
        return data + fun();
    }
}

//実行
//# -> test foo bar baz
process("test", function () {
    return " foo bar baz";
})()
