'use strict'
class Articles {

  constructor(articlesJSON) {
    this.data = [];
	
    articlesJSON.forEach((aJSON) => {
      let article = new Article(aJSON);
      this.data.push(article);
    })
	
  }
}
