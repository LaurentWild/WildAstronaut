//'use strict'

(function() {
  // Create HttpRequest
  let req = new XMLHttpRequest();

  let url = "/json/articles.json";

  req.open('GET', url, true);

  req.onreadystatechange = function(event) {
    if (req.readyState === 4){
      if (req.status === 200){ 
		
		let articlesJSON = JSON.parse(req.responseText);
        let articles = new Articles(articlesJSON);
 
		function articleDetail(id){
			
			let that = articles.data[id];
			
			let detailFill =`	<div class="img_detail">
									  <img class="img-responsivel" src="../imgs/${that.img}">
									</div>
									<div class="text_detail">
									  <h1 class="articleTitle">${that.title}</h1>
									  <small>Par ${articles.author}  -  Publié le ${that.date}</small><br>
									  <p>${that.contenu}</p>
									   <small>Lien: <a target="_blank" href="${that.external_link}">${that.linkCap}</a></small>
									  <br>
									</div>`;
									
			articles.data.forEach(() => {
				
				//console.log(that.id);
				
				if(articles.data[id].id === id){
					return $('#articleContent').html(detailFill);
				}
			})
		}
		articleDetail(9);
	
	} else {
        alert(`Status: ${req.status} - Could not load ${url}`);
      }
    } else {
      console.log("Loading");
    }
  }

  req.send();
})();