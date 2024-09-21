
function omikuji() {
    let randomNumber = Math.random();
    let randomNumber5 = Math.floor(randomNumber * 5) + 1;

    let omikujiNumber;
    switch (randomNumber5) {
        case 1:
            omikujiNumber = "大吉です";
            break;
        case 2:
            omikujiNumber = "中吉です";
            break;
        case 3:
            omikujiNumber = "小吉です";
            break;
        case 4:
            omikujiNumber = "吉です";
            break;
        case 5:
            omikujiNumber = "凶です";
            break;
    }
    alert(omikujiNumber);
    let object = document.getElementById("omikuji");
    object.innerText = omikujiNumber;

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



