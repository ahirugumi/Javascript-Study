var foo={
    baz:function  () {
        var self=this;
        console.log(this);  //bazオブジェクトが出力される
        test();

        function test () {
            console.log(this);  //グローバル（Window）
            console.log(self);  //bazオブジェクトが出力される
        }
    }
}

//実行
foo.baz();