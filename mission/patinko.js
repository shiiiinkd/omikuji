function omikuji() {
    let randomNumber = Math.random();
    let randomNumber9 = Math.floor(randomNumber * 9) + 1;

    let patinkoNumber;
    switch (randomNumber9) {
        case 1:
            patinkoNumber = "大吉です";
            break;
        case 2:
            patinkoNumber = "中吉です";
            break;
        case 3:
            patinkoNumber = "小吉です";
            break;
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
    }

    alert(patinkoNumber);
    let object = document.getElementById("patinko");
    object.innerText = patinkoNumber;

}
