'use strict'
class Article {
	constructor(json){
		this.title = json.title;
		this.date = json.date;
		this.dateFormated = new Date (this.dateRebuild(json.date)); // date formated for ordering and sort
		this.external_link = json.external_link;
		this.linkCap = this.linkName(json.external_link)
		this.img = json.img;
		//this.desc = this.shortDescription(json.contenu); // description that gets first 250 characters of contenu
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

	//check properties for search
	doesArticleContains(string, fields){
		 return this.contenu.toLowerCase().includes(string.toLowerCase()) +
				this.title.toLowerCase().includes(string.toLowerCase()) +
				this.desc.toLowerCase().includes(string.toLowerCase()) +
				this.contenu.toLowerCase().includes(string.toLowerCase()) +
				this.tags.toLowerCase().includes(string.toLowerCase()) +
				this.author.toLowerCase().includes(string.toLowerCase());
  	}

	//date reformated
	dateRebuild(date){
		let divide = date.replace(/-/gi, '- ').split('-');
		return divide;
	}
}
