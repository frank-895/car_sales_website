// ********* NAV BAR SCRIPT **********
function expand_nav_contents() {
    var topnav = document.getElementById("topnav");
    if (topnav.className === "topnav") {
        topnav.className += " responsive";
    } else {
        topnav.className = "topnav";
    }
}

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