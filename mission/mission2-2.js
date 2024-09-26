//下の変数の二行が順序逆になってたらうまくいかなかったよー
var object = document.getElementById("greeting");
var text = prompt("表示するメッセージを入力", "ここが初期値になる");
object.innerText = text;
