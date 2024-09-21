//おみくじの確率を定義する関数
function getOmikuji() {
    let currentTime = new Date();
    let currentHour = currentTime.getHours();

    //通常時の確率
    let omikujiResults = [
        { name: "大吉", probability: 5 },
        { name: "中吉", probability: 15 },
        { name: "吉", probability: 20 },
        { name: "小吉", probability: 25 },
        { name: "末吉", probability: 30 },
        { name: "凶", probability: 4 },
        { name: "大凶", probability: 1 },
    ];

    //運気上昇中の確率
    if (currentHour >= 16 && currentHour < 18) {
        omikujiResults = [
            { name: "大吉", probability: 50 },
            { name: "中吉", probability: 30 },
            { name: "吉", probility: 10 },
            { name: "小吉", probability: 10 },
            { name: "末吉", probability: 0 },
            { name: "凶", probability: 0 },
            { name: "大凶", probability: 0 },
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
            return result.name;
        }
    }

}

//おみくじの結果を表示する関数
function shownResult() {
    const result = getOmikuji();
    alert("おみくじの結果は" + result + "です！");
    let object = document.getElementById("omikuji");
    object.innerText = `おみくじの結果は${result}です！`;
}






function updateBackgroundBasedOnTime() {
    let currentTime = new Date();
    let currentHour = currentTime.getHours();//時間を取得,getHours()は0から23までの数値を返す
    // ここで画像を再取得して更新する処理
    let imageSrc = "";

    if (currentHour >= 6 && currentHour < 16) {
        imageSrc = "background-afternoon.jpg";  // 朝の画像
    } else if (currentHour >= 16 && currentHour < 18) {
        imageSrc = "background-evening.jpg";  // 昼の画像
    } else {
        imageSrc = "background-night.jpg";  // 夜の画像
    }
    //背景画像をCSSとして適用
    document.getElementById("backgroundDiv").style.backgroundImage = `url(${imageSrc})`;
}

//ページの読み込み時に初めて実行
updateBackgroundBasedOnTime();

//1時間ごとに画像を更新する
setInterval(updateBackgroundBasedOnTime, 3600000); //1時間(3600000ミリ秒)ごとに実行








