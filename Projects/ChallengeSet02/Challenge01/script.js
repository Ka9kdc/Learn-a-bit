const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const heading = document.querySelector(".heading");

function toggleMenu() {
	if (menu.classList.contains("active")) {
		menu.classList.remove("active");
		heading.classList.remove("active");

		toggle.innerHTML = "<i class='fas fa-bars'></i>";
	} else {
		menu.classList.add("active");
		heading.classList.add("active");
		toggle.innerHTML = "<span>X<i class=’fas fa-times’></i></span>";
	}
}

toggle.addEventListener("click", toggleMenu, false);
