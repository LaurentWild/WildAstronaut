'use strict'
class DivArticle {

	constructor(firstDiv, article, descStyle){

		this.div.setAttribute("id", "divArticle" + article.id);
		this.div.className += " " + descStyle;


               // FIRST DIV
               // firstDiv.setAttribute("id", "divArticle" + article.id);
               // firstDiv.className += " " + descStyle;
               // // IMAGE
               // let img = firstDiv.querySelector("#articleImg" + article.id);
               // let image = article.img;
               // if(descStyle === "v2") {
               //      let imgTab = article.img.split("_");
               //      image = imgTab[0] + "_r.jpeg";
               // }
               // img.setAttribute("id", "img" + article.id);
               // img.setAttribute("src", "../imgs/" + image);
               // img.setAttribute("id", "img" + article.id);
               // // TITLE
               // let title = firstDiv.querySelector("h3");
               // title.setAttribute("id", "title" + article.id);
               // title.innerHTML = article.title;
               // // DESC
               // let desc = firstDiv.querySelector("p");
               // desc.setAttribute("id", "desc" + article.id);
               // desc.innerHTML = article.desc;
	}

	// imageLink () {
	// 	return '<img src="this.img" class="img-responsive" />';
	// }
     //
	// //Simplify the site address
	// linkName(link){
	// 	let linkSplit = link.split("/");
	// 	return linkSplit[2];
	// }
     //
	// //Get the first 251 letters of article for description
	// shortDescription(contenu){
	// 	let desc = contenu.slice(0, 250);
	// 	return desc + " ...";
	// }
}
