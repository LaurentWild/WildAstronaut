
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
	
	addArticlesRow();
});
