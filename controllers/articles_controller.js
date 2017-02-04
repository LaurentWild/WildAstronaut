function loadArticleView(article, divId, file, descStyle) {
     $(divId).load(file, function(responseTxt, statusTxt, xhr){
          if(statusTxt == "success") {
               // FIRST DIV
               let firstDiv = $(this).context.children[0];
               // DISPLAY ARTICLE
               displayArticle(firstDiv, article, descStyle);
          }
          if(statusTxt == "error") {
              alert("Error: " + xhr.status + ": " + xhr.statusText);
          }
     });
}

function displayArticle(firstDiv, article, descStyle) {
     // FIRST DIV
     firstDiv.setAttribute("id", "divArticle" + article.id);
     firstDiv.className += " " + descStyle;
     // IMAGE
     let img = firstDiv.querySelector("img");
     let image = article.img;
     if(descStyle === "v2") {
          let imgTab = article.img.split("_");
          image = imgTab[0] + "_r.jpeg";
     }
     img.setAttribute("id", "img" + article.id);
     img.setAttribute("src", "../imgs/" + image);
     img.setAttribute("id", "img" + article.id);
     // TITLE
     let title = firstDiv.querySelector("h3");
     title.setAttribute("id", "title" + article.id);
     title.innerHTML = article.title;
     // DESC
     let desc = firstDiv.querySelector("p");
     desc.setAttribute("id", "desc" + article.id);
     desc.innerHTML = article.desc;
}

function loadLeftArticleRow(articles) {
     $('#articlesRow').load('../views/left_article_row.html', function(responseTxt, statusTxt, xhr){
          if(statusTxt === "success") {
               let file = '../views/article_view.html';
               let divIds = ["#firstArticle", "#secondArticle", "#thirdArticle", "#fourthArticle"];
               let descStyles = ["v1", "v2","v4", "v4"];
               for(let i in divIds) {
                    loadArticleView(articles[i], divIds[i], file, descStyles[i]);
               }
          }
          if(statusTxt === "error") {
              alert("Error: " + xhr.status + ": " + xhr.statusText);
          }
     });
}

function addArticlesRow(articles) {
     $('#articles').load('../views/articles_row.html', function(responseTxt, statusTxt, xhr){
          if(statusTxt == "success") {
               // console.log("102");
               loadLeftArticleRow(articles);
          }
          if(statusTxt == "error") {
              alert("Error: " + xhr.status + ": " + xhr.statusText);
          }
     });
}

function addArticlesBlock(articles) {
     // NOMBRE ARTICLES
     let nbreArticles = articles.length;
     //NBRE DE ROWS
     let rows = Math.ceil(articles.length / 4);
     // POUR CHAQUE ROWS
     for (let i = 0; i < rows; i++) {
          // console.log("118");
          addArticlesRow(articles);
     }
}

$(document).ready(function() {
     let articles = [];
     // CHECK ARTICLES DIV
     let divArticles = document.querySelector("#articles");
     // console.log(divArticles.className);
     $.ajax({
          url: '../json/articles.json',
          dataType: 'json',
          success: function( data ) {
               let i = 0;
               // console.log(data);
               for(item of data) {
                    i++;
                    let article = new Article(item);
                    articles.push(article);
                    // if(divArticles.className === "a4") {
                         if(i === 4) break;
                    // }
               }
               // console.log("ART =>" + articles);
               addArticlesBlock(articles);
          },
          error: function( data ) {
               alert( "ERROR:  " + data );
          }
     });
});
