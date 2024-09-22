document.getElementById("lnk").addEventListener('click', function () {
    document.getElementsByClassName('modal-box')[0].style.display = "block";
})

document.getElementById("agree").addEventListener('click', function () {
    document.getElementsByClassName('modal-box')[0].style.display = "none";
    document.getElementById('submit').disabled = false;
})

document.getElementById('submit').addEventListener('click', function () {
    let name = document.getElementById('name-box').value;
    let selected = document.getElementById("options").value;
    let location = document.getElementById("location-box").value;
    let exp = document.getElementById("exp").value;
    if (name === "" || selected === "" || location === "" || exp === "") {
        alert('Please fill all the details.');
    }
})