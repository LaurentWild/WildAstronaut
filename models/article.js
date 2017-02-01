'use strict'
class Article {

  constructor(json){
    this.title = json.title;
      this.external_link = json.external_link;
       this.desc = json.desc;
  }

  imageLink () {
    return '<img src="this.img" class="img-responsive" />';
  }


  // String.prototype.capitalizeFirstLetter = function() {
  //     return this.charAt(0).toUpperCase() + this.slice(1);
  // }

}
