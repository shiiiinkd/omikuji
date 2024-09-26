//おみくじの確率を定義する関数
function getOmikuji() {
    let currentTime = new Date();
    let currentHour = currentTime.getHours();

    //通常時の確率
    let omikujiResults = [
        { name: "大吉", probability: 5, img: 'images/大吉.jpg', alt: 'daikiti' },
        { name: "中吉", probability: 15, img: 'images/中吉.jpg', alt: 'tyuukiti' },
        { name: "吉", probability: 20, img: 'images/吉.jpg', alt: 'kiti' },
        { name: "小吉", probability: 25, img: 'images/小吉.jpg', alt: 'shokiti' },
        { name: "末吉", probability: 30, img: 'images/末吉.jpg', alt: 'suekiti' },
        { name: "凶", probability: 4, img: 'images/凶.jpg', alt: 'kyo' },
        { name: "大凶", probability: 1, img: 'images/大凶.jpg', alt: 'daikyo' },
    ];

    //運気上昇中の確率
    if (currentHour >= 16 && currentHour < 18) {
        omikujiResults = [
            { name: "大吉", probability: 50, img: 'images/大吉.jpg', alt: 'daikiti' },
            { name: "中吉", probability: 30, img: 'images/中吉.jpg', alt: 'tyuukiti' },
            { name: "吉", probability: 10, img: 'images/吉.jpg', alt: 'kiti' },
            { name: "小吉", probability: 10, img: 'images/小吉.jpg', alt: 'shokiti' },
            { name: "末吉", probability: 0, img: 'images/末吉.jpg', alt: 'suekiti' },
            { name: "凶", probability: 0, img: 'images/凶.jpg', alt: 'kyo' },
            { name: "大凶", probability: 0, img: 'images/大凶.jpg', alt: 'daikyo' },
        ];
    }
    //確率に応じたランダム数を決定する
    const totalProbability = omikujiResults.reduce((sum, result) => sum + result.probability, 0);
    const randomNumber = Math.floor(Math.random() * totalProbability);

    //おみくじの結果を決定する
    let cumulativeProbability = 0;//累積確立を保持する関数
    for (const result of omikujiResults) {
        cumulativeProbability += result.probability;
        if (randomNumber < cumulativeProbability) {
            return result;//複数の値を返すときはオブジェクト（result)形式で返したほうが良い

        }
    }

}

//おみくじの結果を表示する関数
function shownResult() {
    const result = getOmikuji();
    alert("おみくじの結果は" + result.name + "です！"); //returnでresultとして返しているためプロパティまで含める必要がある

    //結果を表示するテキスト
    let object = document.getElementById("omikuji");
    object.innerText = `おみくじの結果は${result.name}です！`;

    //結果画像を表示するためのdivを取得する
    const resultDiv = document.getElementById("resultDiv");
    resultDiv.innerHTML = "";//以前の内容をクリアする

    //画像を実際に表示する
    let resultImage = document.createElement("img");
    resultImage.src = result.img;
    resultImage.alt = result.alt;
    resultImage.style = "block";
    resultImage.style.marginTop = "10px";


    //画像を結果のdivに追加する
    resultDiv.appendChild(resultImage);

    //結果画像の背景を表示する
    resultDiv.style.backgroundImage = "url('images/resultbackground.png')";
    resultDiv.style.backgroundSize = "cover";
    resultDiv.style.backgroundRepeat = "no-repeat";
}

function updateBackgroundBasedOnTime() {
    let currentTime = new Date();
    let currentHour = currentTime.getHours();//時間を取得,getHours()は0から23までの数値を返す
    // ここで画像を再取得して更新する処理
    let imageSrc = "";

    if (currentHour >= 6 && currentHour < 16) {
        imageSrc = "images/background-afternoon.jpg";  // 朝の画像
    } else if (currentHour >= 16 && currentHour < 18) {
        imageSrc = "images/background-evening.jpg";  // 昼の画像
    } else {
        imageSrc = "images/background-night.jpg";  // 夜の画像
    }
    //背景画像をCSSとして適用
    document.getElementById("backgroundDiv").style.backgroundImage = `url(${imageSrc})`;
}

//ページの読み込み時に初めて実行
updateBackgroundBasedOnTime();

//1時間ごとに画像を更新する
setInterval(updateBackgroundBasedOnTime, 3600000); //1時間(3600000ミリ秒)ごとに実行