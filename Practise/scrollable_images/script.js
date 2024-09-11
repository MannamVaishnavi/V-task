const totalImages = 500;
const imageContainer = document.getElementById('imageContainer');
let count = 0;

function create(imageSrc) {
    const row = document.createElement('div');
    row.classList.add('image-row');
    const img = document.createElement('img');
    img.src = imageSrc;
    row.appendChild(img);
    return row;
}

function call() {
    for (let i = 0; i < 4; i++) {
        if (count >= totalImages) return;
        count += 1;
        const imageSrc = `images/image${count}.jpg`;
        const imageRow = create(imageSrc);
        imageContainer.appendChild(imageRow);
    }
}

window.onscroll = function() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        call(); 
    }
};
call();
