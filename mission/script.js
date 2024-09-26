function updateBackgroundBasedOnTime() {
    let currentTime = new Date();
    let currentHour = currentTime.getHours(); // 時間を取得
    let imageSrc = "";

    if (currentHour >= 6 && currentHour < 16) {
        imageSrc = "background-afternoon.jpg";  // 午後の画像
    } else if (currentHour >= 16 && currentHour < 18) {
        imageSrc = "background-evening.jpg";  // 夕方の画像
    } else {
        imageSrc = "background-night.jpg";  // 夜の画像
    }

    // 背景画像をCSSとして適用
    document.getElementById("backgroundDiv").style.backgroundImage = `url(${imageSrc})`;
}

// ページの読み込み時に初めて実行
updateBackgroundBasedOnTime();

// 1時間ごとに画像を更新する
setInterval(updateBackgroundBasedOnTime, 3600000); // 1時間(3600000ミリ秒)ごとに実行

// ダミーのおみくじ関数
function omikuji() {
    alert("おみくじを引きました！");
}
