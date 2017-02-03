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
					//Set var for data access
					let that = articles.data[id];
					
					//Set the template with data attributes
					let detailFill =   `<div class="img_detail">
											  <img class="img-responsivel" src="../imgs/${that.img}">
											</div>
											<div class="text_detail">
											  <h1 class="articleTitle">${that.title}</h1>
											  <small>Par ${that.author}  -  Publié le ${that.date}</small><br>
											  <p>${that.contenu}</p>
											   <small>Lien: <a target="_blank" href="${that.external_link}">${that.linkCap}</a></small>
											  <br>
											</div>`;
					
					//Function to search article
					articles.data.forEach(() => {
						//console.log(that.id);
						
						//Search by ID and insert template
						if(that.id === id){
							return $('#articleContent').html(detailFill);
						}
					})
				}
				
				//Call the function with argument of ID
				articleDetail(9);
			
			} else {
				alert(`Status: ${req.status} - Could not load this article`);
			}
		} else {
		  console.log("Loading");
		}
	}

  req.send();
})();