'use strict'
class Article {

  constructor(json){
     this.title = json.title;
     this.date = json.date;
     this.external_link = json.external_link;
     this.img = json.img;
     this.author = json.author;
     this.tags = json.tags;
  }

  imageLink () {
    return '<img src="this.img" class="img-responsive" />';
  }


  // String.prototype.capitalizeFirstLetter = function() {
  //     return this.charAt(0).toUpperCase() + this.slice(1);
  // }

}
