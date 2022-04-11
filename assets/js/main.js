//===== Prealoder

// window.onload = function () {
// 	window.setTimeout(fadeout, 500);
// }

// function fadeout() {
// 	document.querySelector('.preloader').style.opacity = '0';
// 	document.querySelector('.preloader').style.display = 'none';
// }


/*=====================================
Sticky
======================================= */
window.onscroll = function () {
	var header_navbar = document.querySelector(".navbar-area");
	var navbar_dropdown = document.getElementsByClassName("dropdown-menu");
	var sticky = header_navbar.offsetTop;
	var logo = document.querySelector('.navbar-brand img')

	if (window.pageYOffset > sticky) {
		header_navbar.classList.add("sticky");
		navbar_dropdown[0].classList.add("stick");
	} else {
		header_navbar.classList.remove("sticky");
		navbar_dropdown[0].classList.remove("stick");
	}



	// show or hide the back-top-top button
	var backToTo = document.querySelector(".scroll-top");
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		backToTo.style.display = "flex";
	} else {
		backToTo.style.display = "none";
	}
};



//===== close navbar-collapse when a  clicked
let navbarToggler = document.querySelector(".navbar-toggler");
var navbarCollapse = document.querySelector(".navbar-collapse");

document.querySelectorAll(".page-scroll").forEach(e =>
	e.addEventListener("click", () => {
		navbarToggler.classList.remove("active");
		navbarCollapse.classList.remove('show')
	})
);
navbarToggler.addEventListener('click', function () {
	navbarToggler.classList.toggle("active");
});

//====== counter up 
var cu = new counterUp({
	start: 0,
	duration: 2000,
	intvalues: true,
	interval: 100,
	append: 'K'
});
cu.start();

// WOW active
new WOW().init();