//参照 https://www.youtube.com/watch?v=zMoLfMldnz8

const saveBtn = document.querySelector("#saveBtn");
const backBtn = document.querySelector("#backBtn");
const cookieResult = document.querySelector("#cookieResult");

//クッキーを保存する関数
saveBtn.addEventListener("click", () => {
    document.cookie = "id=0001";//改行してもしなくても、セミコロンで区切られる
    document.cookie = "device=pc";
    //document.cookie = "name=田中"; //日本語の直接書きは不適。
    document.cookie = `name = ${encodeURIComponent("田中")}`;//バッククォーテーションで囲む

    console.log(document.cookie);
});
backBtn.addEventListener("click", () => {
    const result = converter(document.cookie);
    console.log(result);//

});

function converter(cookie) {
    cookie = cookie.split(";");//splitメソッド…指定した文字で区切って配列にまとめてくれる関数
    const obj = {};
    //console.log(cookie);

    cookie.map((item) => {
        const elem = item.split("=");
        const key = elem[0];
        const val = decodeURIComponent(elem[1]);//文字列表記を日本語に直す。保存した後に復元すると直って返ってくる

        obj[key] = val;
    });
    return obj;
};

//日本語はエンコードとデコードする必要がある
//キーとバリューの対にして管理する
//設定できるのは基本的に文字列。配列や画像は入れ込めない

//localStorageと違ってcookieはサーバーサイドと共有できる。
//localStorageはクライアントサイド用
//参照　https://www.youtube.com/watch?v=Fupq6L4Vy2k

//アプリケーションならcookieを使うことが多い    