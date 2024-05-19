// ********* NAV BAR SCRIPT **********
function expand_nav_contents() {
    var topnav = document.getElementById("topnav");
    if (topnav.className === "topnav") {
        topnav.className += " responsive";
    } else {
        topnav.className = "topnav";
    }
}

// ******** IMAGE CAROUSEL **********
function nextImage() {
    images = document.querySelectorAll('.carousel img');
    images.forEach((img, i) => {
        imgclass = (img.classList)[0];
        img.classList.remove(imgclass);
        newimgclass = imgclass.slice(0, -1) + ((parseInt(imgclass.slice(-1)) + 1) % 6);
        img.classList.add(newimgclass)
    })
}

// ******** EXPAND DETAILS ***********
function revealDetails(button) {
    details = button.nextElementSibling;
    arrow = button.querySelector("span");
    if (details.classList.contains('hidden')) {
        details.classList.remove('hidden');
        arrow.innerHTML = '&uarr;';
    } else {
        details.classList.add('hidden');
        arrow.innerHTML = '&darr;';
    }
}

document.querySelector(".carousel button").addEventListener('click', e => {
    nextImage();
})

function showCarDetails(name, year, transmission, doors, odometer, price) {
    document.getElementById('carName').innerText = name;
    document.getElementById('carDetails').innerHTML = `
        <li>Year: ${year}</li>
        <li>Transmission: ${transmission}</li>
        <li>Doors: ${doors}</li>
        <li>Odometer: ${odometer}</li>
    `;
    document.getElementById('carPrice').innerText = price;
    document.getElementById('carModal').style.display = 'block';
}

function showPartDetails(name, price, description) {
    document.getElementById('partName').innerText = name;
    document.getElementById('partPrice').innerText = price;
    document.getElementById('partDescription').innerText = description;
    document.getElementById('partModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('carModal').style.display = 'none';
    document.getElementById('partModal').style.display = 'none';
}

document.querySelectorAll('.close').forEach(button => {
    button.onclick = closeModal;
});