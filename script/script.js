/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*console.log ('test'); // testen of die het doet*/

/*var filter = document.querySelector('.filterButton');
var filterOpties = document.querySelector('.alleFilters');

function show() {
	filterOpties.classList.toggle('toonFilterMenu');
}

filter.addEventListener('click', show);*/

var filterForm = document.querySelector('legend:first-of-type');
var filterOpties = document.querySelector('.filters');


function show() {
	filterOpties.classList.toggle('toonFilterOpties');
}

filterForm.addEventListener('click', show);


