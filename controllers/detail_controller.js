//'use strict'
(function() {
// Create HttpRequest
let req = new XMLHttpRequest();
let url = "/json/articles.json";
req.open('GET', url, true);
req.onreadystatechange = function(event) {
     if (req.readyState === 4){
          if (req.status === 200){
               // PARSE JSON
               let articlesJSON = JSON.parse(req.responseText);
               let articles = new Articles(articlesJSON);
               // ARTICLE DETAILS
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
                         //Search by ID and insert template
                         if(that.id === id){
                              return $('#articleContent').html(detailFill);
                         }
                    })
               }
               // CHECK ARTICLE ID
               let url = window.location.href;
               let queryString = url.split("?")[1];
               let articleId = queryString.split("=")[1];
               //Call the function with argument of ID
               articleDetail(parseInt(articleId));

          } else {
               alert(`Status: ${req.status} - Could not load this article`);
          }
     } else {
          console.log("Loading");
     }
}
req.send();
})();
