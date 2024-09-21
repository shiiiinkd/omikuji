let randomNumber = Math.random();
console.log(randomNumber);
let floor1 = Math.floor(2.6987);
let floor2 = Math.floor(3.2398);

console.log(floor1);
console.log(floor2);


//0-4randomnumber
let randomNumber4 = Math.floor(Math.random() * 4) + 1;
console.log(randomNumber4);

//それでは、以上を踏まえ、「0 ~ 4 の間の整数である乱数」を発生させてみましょう
//上のやり方だと0が乱数として現れないから下の書き方を採用
var number1 = Math.random();
var number2 = number1 * 5;
var number = Math.floor(number2);
console.log(number);






//基本的な整数の乱数取得
/*0 ~ 9 の間の整数である乱数を発生させる
Math.random()では、0から0.99999999…の数値が発生しています。
これを0 ~ 9の間の整数にするためには、これを「10倍して、小数点以下を切り捨てる」ことで実現します。
0 ~ 99 の間の整数なら「100倍して、小数点以下を切り捨てる」、
1 ~ 6 の間の整数なら「6倍して、小数点以下を切り捨て、1を足す」、とすれば可能です。/*

