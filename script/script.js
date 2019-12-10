/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*console.log ('test'); // testen of die het doet*/

var filter = document.querySelector('h2');
var filterOpties = document.querySelector('section'); 

function show () {
	filterOpties.classList.toggle('filters');
	
}

filter.addEventListener('click', filter); 
