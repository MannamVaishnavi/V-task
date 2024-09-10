const totalImages = 500;
const imageContainer = document.getElementById('imageContainer');

function create(imageSrc) {
    const row = document.createElement('div');
    row.classList.add('image-row');
    const img = document.createElement('img');
    img.src = imageSrc;
    row.appendChild(img);
    return row;
    }
for (let i = 1; i <= totalImages; i++) {
    const imageSrc = `images/image${i}.jpg`;
    const imageRow = create(imageSrc);
    imageContainer.appendChild(imageRow);
}