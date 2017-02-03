
function loadFirstArticleView(article) {
     //console.log(article);
     $('.firstArticle').load('../views/big_article_view.html', function(responseTxt, statusTxt, xhr){
          if(statusTxt == "success") {

               // var html = $.parseHTML(responseTxt);
               // $.each( html, function( i, el ) {
               // //   console.log(el.nodeName);
               //
               //
               // });
               // console.log(html);
               // let html = $.parseHTML(responseTxt);
               // $.each( html, function( i, el ) {
               //   console.log(el.nodeName[0]);
               // });
               //html.querySelector('#title').innerHTML = "zerrreezeedgdfhdfgfhfhfghfghfghfg";
               //$('#title').id = 'title' + article.id;
               // console.log("trtr" + html);

               $('#title').text(article.title);
               $('#desc').text(article.desc);
               $('#articleImg').attr("src", '../imgs/' + article.img);// + article.img
               // $('.view-first > img').attr("src", "../imgs/");
               // console.log($('.view-first > img'));

          }
          if(statusTxt == "error") {
              alert("Error: " + xhr.status + ": " + xhr.statusText);
          }
     });
}

function loadSecondArticleView(article) {
     $('.secondArticle').load('../views/large_article_view.html', function(responseTxt, statusTxt, xhr){
          if(statusTxt == "success") {
               $('#titleZ').text(article.title);
               $('#desc').text(article.desc);
               $('#articleImg2').attr("src", '../imgs/' + article.img);// + article.img
          }
          if(statusTxt == "error") {
              alert("Error: " + xhr.status + ": " + xhr.statusText);
          }
     });
}

function loadThirdArticleView(article) {
     $('.thirdArticle').load('../views/big_article_view.html', function(responseTxt, statusTxt, xhr){
          if(statusTxt == "success") {
               $('#title').text(article.title);
               $('#desc').text(article.desc);
               $('.articleImgZ').attr("src", '../imgs/' + article.img);// + article.img
          }
          if(statusTxt == "error") {
              alert("Error: " + xhr.status + ": " + xhr.statusText);
          }
     });
}

function loadFourthArticleView(article) {
     $('.fourthArticle').load('../views/big_article_view.html', function(responseTxt, statusTxt, xhr){
          if(statusTxt == "success") {

               $('#title').text(article.title);
               $('#desc').text(article.desc);
               $('#articleImg').attr("src", '../imgs/' + article.img);// + article.img
          }
          if(statusTxt == "error") {
              alert("Error: " + xhr.status + ": " + xhr.statusText);
          }
     });
}

function loadLeftArticleRow(articles) {

     // console.log(articles[0].title)
     $('.articles_row').load('../views/left_article_row.html', function(responseTxt, statusTxt, xhr){
          if(statusTxt === "success") {
               loadFirstArticleView(articles[0]);
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
          // console.log(rows);

     // POUR CHAQUE ROWS
     for (let i = 0; i < rows; i++) {
          // console.log(articles);
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
               console.log(data);
               for(item of data) {
                    i++;
                    let article = new Article(item);

                    articles.push(article);
                    if(i === 4) break;
               }
               console.log("ART =>" + articles);
               addArticlesBlock(articles);
          },
          error: function( data ) {
               alert( "ERROR:  " + data );
          }
     });


});
