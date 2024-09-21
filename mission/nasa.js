const apiKey = 'NVOA9zAWKfnXcJqEgkCkBjoUfeDXcmaMzJrmZEoZ';
const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${apiKey}`;

const titleElement = document.getElementById('title');  // これをカメラ名に使う
const imageElement = document.getElementById('image');  // 画像URLを設定するため
const descriptionElement = document.getElementById('description');  // ローバー情報や地球日を表示

fetch(url)
    .then(response => response.json())
    .then(data => {
        // APIからのデータには 'photos' 配列が含まれています
        const photos = data.photos;

        if (photos.length > 0) {
            const firstPhoto = photos[0];  // 最初の写真データを取得

            // 画像データと説明をHTMLに反映
            titleElement.textContent = firstPhoto.camera.full_name;  // カメラの名前を表示
            imageElement.src = firstPhoto.img_src;  // 火星の写真を表示
            descriptionElement.textContent = `ローバー名: ${firstPhoto.rover.name}, 地球日: ${firstPhoto.earth_date}`;
        } else {
            // 写真がない場合
            titleElement.textContent = '写真が見つかりませんでした。';
            imageElement.src = '';
            descriptionElement.textContent = '';
        }
    })
    .catch(error => {
        console.error('エラー:', error);
    });
