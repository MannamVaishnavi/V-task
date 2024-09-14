let current = 1;
let total_images = 10;
let image = document.getElementById('display');

function go_left() {
    if (current > 1) {
        current--;
    } else {
        current = total_images;
    }
    image.src = `images/image${current}.jpg`; 
}

function go_right() {
    if (current < total_images) {
        current++;
    } else {
        current = 1;
    }
    image.src = `images/image${current}.jpg`;
}
