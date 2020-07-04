/*
Promiseから戻り値を取り出すテスト
*/

//失敗する例
/*
var result = new Promise(function(resolve, reject){
    var a = "aaaaaaa";
    //resolve(a);
    return a;
});

console.log(result);    //Promise {<resolved>: "aaaaaaa"}
*/

//成功する例
///*
var b = async function(){
    var result = await new Promise(function(resolve, reject){
        var a = "aaaaaaa";
        resolve(a);
    });
    
    console.log(result);    //aaaaaaa
};

b();
//*/

//動作イメージ関数
/*
var hoge = function(){
    var a = "aaaaaaa";
    return a;
}
console.log(hoge());
*/