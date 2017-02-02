
function addArticlesRow() {
     $('.articles').load('../views/articles_row.html', function(responseTxt, statusTxt, xhr){
          if(statusTxt == "success") {
               $('.articles_row').load('../views/left_article_row.html', function(responseTxt, statusTxt, xhr){
                    if(statusTxt == "success") {
                         $('.bigDiv').load('../views/big_article_view.html', function(responseTxt, statusTxt, xhr){
                              if(statusTxt == "success") {

                              }
                              if(statusTxt == "error") {
                                  alert("Error: " + xhr.status + ": " + xhr.statusText);
                              }
                         });
                         $('.largeDiv').load('../views/large_article_view.html', function(responseTxt, statusTxt, xhr){
                              if(statusTxt == "success") {

                              }
                              if(statusTxt == "error") {
                                  alert("Error: " + xhr.status + ": " + xhr.statusText);
                              }
                         });
                    }
                    if(statusTxt == "error") {
                        alert("Error: " + xhr.status + ": " + xhr.statusText);
                    }
               });
          }
          if(statusTxt == "error") {
              alert("Error: " + xhr.status + ": " + xhr.statusText);
          }
     });
}





(function() {
    $.ajax({
        url: '../json/articles.json',
        dataType: 'json',
        success: function( data ) {
            for(item of data) {
                let article = new Article(item);
            }
        },
        error: function( data ) {
            alert( "ERROR:  " + data );
        }
    });
	
	/* function articleDetail(id){
	 
		console.log();
		let detailFill = `
						<div class="img_detail">
						  <img class="img-responsivel" src="$(article.img)">
						</div>
						<div class="text_detail">
						  <h1 class="articleTitle">${article.title}</h1>
						  <small>Par ${article.author}  -  Publié le ${article.date}</small><br>
						  <p>${article.contenu}</p>
						   <small>Lien: <a target="_blank" href="${article.external_link}">${article.linkCap}</a></small>
						  <br>
						</div>
	  `;
		   
		 return $('#articleContent').html("blabla");
	}
	
	articleDetail(); */
	
	$('#articleContent').html("blablaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
	
	addArticlesRow();
});
