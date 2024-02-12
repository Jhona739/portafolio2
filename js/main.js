const barras = document.getElementsByClassName('skill-bar__skill-per');

elementosSubir = [];
for (let i = 1; i <= 5; i++) {
	elementosSubir.push(document.getElementById('subir' + i));
}
const cargarImagen = (entradas, observador) => {
	entradas.forEach((entrada) => {
		if(entrada.isIntersecting){
			entrada.target.classList.add('visible');
		} else {
			entrada.target.classList.remove('visible');
		}
	});
}
const observador = new IntersectionObserver(cargarImagen, {
	root: null,
	threshold: 0.5,
});
elementosSubir.forEach((elemento) => {
	observador.observe(elemento);
});


const tabs = document.querySelectorAll(".all__tab-btn");
const content = document.querySelectorAll(".tab");


tabs.forEach((tab, index) =>{
	tab.addEventListener("click", ()=>{
		tabs.forEach(tab=>{tab.classList.remove("active")});
        tab.classList.add("active");   	
        
		content.forEach(content=>{content.classList.remove("active")})
	    content[index].classList.add("active");
	})
})

const button = document.getElementById("button-menu");
const nav = document.querySelector("nav");

button.addEventListener("click", function(){
	nav.classList.toggle("active");
});

const alertopacity = document.querySelector(".container-content-alert");
const contentalert = document.querySelector(".content-alert");
const buttonalert = document.getElementById("alert1");
const alerthide = document.getElementById("hide");

buttonalert.addEventListener("click", function(){
      contentalert.classList.add("show");
      alertopacity.classList.add("opacity");
	  if(alerthide.addEventListener("click", function(){
		contentalert.classList.remove("show");
		alertopacity.classList.remove("opacity");
	  }));
});