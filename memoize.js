//メモ化する関数本体
//渡された関数の結果をキャッシュする
function memo (arg) {
    var cache={};
    var ret=function () {
        var key=arguments.length + Array.prototype.join.call(arguments,",");
        if (key in cache) {
            return cache[key];
        } else{
            return cache[key]=arg.apply(this,arguments);
        };
    };
    return ret;
}

//計算をする関数をmemo関数に渡す
var test=memo(function(param){for (var i = 0; i < param; i++) {};console.log(i);});

/* 実行結果
一回目は、実際に関数を実行するので、console.logが実行される
> test(100);
  100
  undefined
> test(1000);
  1000
  undefined
//二回目は、関数を実行せず、キャッシュされている計算結果を返すので、console.logが出力されない
> test(100);
  undefined
> test(1000);
  undefined
//キャッシュかれていない引数をわたすと再びconsole.logが出力される
> test(200);
  200
 undefined
*/