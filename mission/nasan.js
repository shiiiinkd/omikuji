// NASA APIキー
const apiKey = 'NVOA9zAWKfnXcJqEgkCkBjoUfeDXcmaMzJrmZEoZ';  // 取得したAPIキーをここに入力
const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

// DOMの要素を取得
const titleElement = document.getElementById('title');
const imageElement = document.getElementById('image');
const descriptionElement = document.getElementById('description');

// APIリクエストを送信
fetch(url)
    .then(response => response.json())
    .then(data => {
        // 取得したデータをHTMLに反映
        titleElement.textContent = data.title;
        imageElement.src = data.url;
        descriptionElement.textContent = data.explanation;
    })
    .catch(error => {
        console.error('エラー:', error);
    });
