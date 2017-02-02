'use strict'
class Article {

  constructor(json){
    this.title = json.title;
    this.external_link = json.external_link;
    this.desc = json.desc;
	
	
    this.title = json.title;
    this.date = json.date;
    this.external_link = json.external_link;
    this.img = 'imgs/'+json.img;
    this.description = json.desc;
    this.contenu = json.contenu;
    this.author = json.author;
    this.tags = json.tags;
    this.id = json.id;
  }

  imageLink () {
    return '<img src="this.img" class="img-responsive" />';
  }


  // String.prototype.capitalizeFirstLetter = function() {
  //     return this.charAt(0).toUpperCase() + this.slice(1);
  // }

}
