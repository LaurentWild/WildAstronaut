'use strict'
//set current location page
let currentPage = location.pathname.split("/");

//function to load search after charging header elements
function loadSearch(){
	//set var for the input text and button
	let filter = document.querySelector("#searchArticle");
	let bGO = document.querySelector("#bSearch");
	//button call function to filter
	bGO.addEventListener("click", filterGo, false);
	//imput text call function to filter with ENTER[13]
	$("#searchArticle").keyup(function(event) {
			if ((event.keyCode == 13) && ($("#searchArticle").val().trim() !== "")) {
				//console.log($("#searchArticle").val())//Check value of input text
				filterGo(event);
				event.preventDefault();
				return false;
			}
	});
}

//set function to call fillter
function filterGo(e){
	
	//get parameter value of url
	let url = window.location.href;
	let queryString = url.split("?")[1];
	
	//if search field is empty and there is a search -> refresh page with all articles
	if ($("#searchArticle").val() === ""  &&  queryString !== undefined ){
		window.location = "articles.html"
	//or if there is a word for search -> set parameters to url and go to articles.html
	}else if($("#searchArticle").val() !== ""){
		let linkSearch = "articles.html?search=" + $("#searchArticle").val();
		window.location = linkSearch;
	}
}

//Charge Header and footer
$(document).ready(function() {
	
	$("footer").load('../views/template_view.html #footerView');
	$("header").load('../views/template_view.html #headerView', loadSearch);

});