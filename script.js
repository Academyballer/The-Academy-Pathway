function showMenu() {
    document.querySelector(".hero").style.display = "none";
    document.getElementById("menu").classList.remove("hidden");
}

function showPage(page) {

    document.getElementById("menu").classList.add("hidden");

    document.querySelectorAll(".page").forEach(function(section) {
        section.classList.add("hidden");
    });

    document.getElementById(page).classList.remove("hidden");
}

function back() {

    document.querySelectorAll(".page").forEach(function(section) {
        section.classList.add("hidden");
    });

    document.getElementById("menu").classList.remove("hidden");
}