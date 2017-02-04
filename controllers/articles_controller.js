
function loadFirstArticleView(article) {
     $('#firstArticle').load('../views/big_article_view.html', function(responseTxt, statusTxt, xhr){
          if(statusTxt == "success") {
               // FIRST DIV
               let firstDiv = $(this).context.children[0];
               firstDiv.setAttribute("id", "divArticle" + article.id);
               firstDiv.className += " v1";
               // IMAGE
               let img = firstDiv.querySelector("img");
               img.setAttribute("id", "img" + article.id);
               img.setAttribute("src", "../imgs/" + article.img);
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
           if(statusTxt == "error") {
               alert("Error: " + xhr.status + ": " + xhr.statusText);
           }
     });
}

function loadSecondArticleView(article) {
     $('#secondArticle').load('../views/large_article_view.html', function(responseTxt, statusTxt, xhr){
          if(statusTxt == "success") {
               // FIRST DIV
               let firstDiv = $(this).context.children[0];
               firstDiv.setAttribute("id", "divArticle" + article.id);
               firstDiv.className += " v1";
               // IMAGE
               let img = firstDiv.querySelector("img");
               img.setAttribute("id", "img" + article.id);
               img.setAttribute("src", "../imgs/" + article.img);
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
          if(statusTxt == "error") {
              alert("Error: " + xhr.status + ": " + xhr.statusText);
          }
     });
}

function loadThirdArticleView(article) {
     $('#thirdArticle').load('../views/big_article_view.html', function(responseTxt, statusTxt, xhr){
          if(statusTxt == "success") {
               // FIRST DIV
               let firstDiv = $(this).context.children[0];
               firstDiv.setAttribute("id", "divArticle" + article.id);
               firstDiv.className += " v1";
               // IMAGE
               let img = firstDiv.querySelector("img");
               img.setAttribute("id", "img" + article.id);
               img.setAttribute("src", "../imgs/" + article.img);
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
          if(statusTxt == "error") {
              alert("Error: " + xhr.status + ": " + xhr.statusText);
          }
     });
}

function loadFourthArticleView(article) {
     $('#fourthArticle').load('../views/big_article_view.html', function(responseTxt, statusTxt, xhr){
          if(statusTxt == "success") {
               // FIRST DIV
               let firstDiv = $(this).context.children[0];
               firstDiv.setAttribute("id", "divArticle" + article.id);
               firstDiv.className += " v1";
               // IMAGE
               let img = firstDiv.querySelector("img");
               img.setAttribute("id", "img" + article.id);
               img.setAttribute("src", "../imgs/" + article.img);
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
          if(statusTxt == "error") {
              alert("Error: " + xhr.status + ": " + xhr.statusText);
          }
     });
}

function loadLeftArticleRow(articles) {

     // console.log(articles[0].title);
     $('#articlesRow').load('../views/left_article_row.html', function(responseTxt, statusTxt, xhr){
          if(statusTxt === "success") {
               loadFirstArticleView(articles[0]);
                    // console.log("gfghfhfghfghfghe");
               loadSecondArticleView(articles[1]);
               loadThirdArticleView(articles[2]);
               loadFourthArticleView(articles[3]);
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
