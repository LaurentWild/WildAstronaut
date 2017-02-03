'use strict'
class Article {

	constructor(json){
		
		this.title = json.title;
		this.date = json.date;
		this.external_link = json.external_link;
		this.linkCap = this.linkName(json.external_link)
		this.img = json.img;
		/* this.desc = this.shortDescription(json.contenu); */
		this.desc = json.desc;
		this.contenu = json.contenu;
		this.author = json.author;
		this.tags = json.tags;
		this.id = json.id;

	}

	imageLink () {
		return '<img src="this.img" class="img-responsive" />';
	}
	
	//Simplify the site address
	linkName(link){
		let linkSplit = link.split("/");
		return linkSplit[2];
	}
	
	//Get the first 251 letters of article for description
	shortDescription(contenu){
		let desc = contenu.slice(0, 250);
		return desc + " ...";
	}
}
