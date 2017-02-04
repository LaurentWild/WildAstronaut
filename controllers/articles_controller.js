
function loadFirstArticleView(article, divId, file, descStyle, imageSize) {
     $(divId).load(file, function(responseTxt, statusTxt, xhr){
          if(statusTxt == "success") {
               // FIRST DIV
               let firstDiv = $(this).context.children[0];
               // DISPLAY ARTICLE
               displayArticle(firstDiv, article, descStyle, imageSize);
           }
           if(statusTxt == "error") {
               alert("Error: " + xhr.status + ": " + xhr.statusText);
           }
     });
}

function loadSecondArticleView(article, divId, file, descStyle, imageSize) {
     $(divId).load(file, function(responseTxt, statusTxt, xhr){
          if(statusTxt == "success") {
               // FIRST DIV
               let firstDiv = $(this).context.children[0];
               // DISPLAY ARTICLE
               displayArticle(firstDiv, article, descStyle, imageSize);
          }
          if(statusTxt == "error") {
              alert("Error: " + xhr.status + ": " + xhr.statusText);
          }
     });
}

function loadThirdArticleView(article, divId, file, descStyle, imageSize) {
     $(divId).load(file, function(responseTxt, statusTxt, xhr){
          if(statusTxt == "success") {
               // FIRST DIV
               let firstDiv = $(this).context.children[0];
               // DISPLAY ARTICLE
               displayArticle(firstDiv, article, descStyle, imageSize);
          }
          if(statusTxt == "error") {
              alert("Error: " + xhr.status + ": " + xhr.statusText);
          }
     });
}

function loadFourthArticleView(article, divId, file, descStyle, imageSize) {
     $(divId).load(file, function(responseTxt, statusTxt, xhr){
          if(statusTxt == "success") {
               // FIRST DIV
               let firstDiv = $(this).context.children[0];
               // DISPLAY ARTICLE
               displayArticle(firstDiv, article, descStyle, imageSize);
          }
          if(statusTxt == "error") {
              alert("Error: " + xhr.status + ": " + xhr.statusText);
          }
     });
}
function displayArticle(firstDiv, article, descStyle, imageSize) {
     // FIRST DIV
     firstDiv.setAttribute("id", "divArticle" + article.id);
     firstDiv.className += " " + descStyle;
     // IMAGE
     let img = firstDiv.querySelector("img");
     img.setAttribute("id", "img" + article.id);
     img.setAttribute("src", "../imgs/" + article.img);
     img.setAttribute("id", "img" + article.id);
     if(imageSize === "rectangle") {

     }
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

     // console.log(articles[0].title);
     $('#articlesRow').load('../views/left_article_row.html', function(responseTxt, statusTxt, xhr){
          if(statusTxt === "success") {
               let divId = "#firstArticle";
               let file = '../views/big_article_view.html';
               let descStyle = "v1";
               let imageSize = "square";
               loadFirstArticleView(articles[0], divId, file, descStyle, imageSize);
               divId = "#secondArticle";
               file = '../views/large_article_view.html';
               descStyle = "v2";
               imageSize = "rectangle";
               loadSecondArticleView(articles[1], divId, file, descStyle, imageSize);
               divId = "#thirdArticle";
               file = '../views/big_article_view.html';
               descStyle = "v4";
               imageSize = "square";
               loadThirdArticleView(articles[2], divId, file, descStyle, imageSize);
               divId = "#fourthArticle";
               file = '../views/big_article_view.html';
               descStyle = "v4";
               imageSize = "square";
               loadFourthArticleView(articles[3], divId, file, descStyle, imageSize);
          }
          if(statusTxt === "error") {
              alert("Error: " + xhr.status + ": " + xhr.statusText);
          }
     });
}

function addArticlesRow(articles) {
     $('.articles').load('../views/articles_row.html', function(responseTxt, statusTxt, xhr){
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
                    if(i === 4) break;
               }
               // console.log("ART =>" + articles);
               addArticlesBlock(articles);
          },
          error: function( data ) {
               alert( "ERROR:  " + data );
          }
     });
});
