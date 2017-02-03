'use strict'
class Articles {

  constructor(articlesJSON) {
    this.data = [];
	
    articlesJSON.forEach((aJSON) => {
      let article = new Article(aJSON);
      this.data.push(article);
    })
		
    this.unfilteredData = this.data;
		
  }
	
	//Filter for search
	filterArticles(filterV){
		//if no texts
		if (filterV== "" || filterV === undefined){
			//console.log("nooop");//Check if don't get text
			//table restart
			this.data = this.unfilteredData;
		}else{
			//console.log("oiii");//Check if get is text
			this.data = this.unfilteredData.filter(function(el){
			//table restart with filter
				return el.doesArticleContains(filterV);
			});
		}
	}
	
}
