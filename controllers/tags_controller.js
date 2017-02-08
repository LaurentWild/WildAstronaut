
// $(document).ready(function() {
//      let articles = [];
//      // CHECK ARTICLES DIV
//      let divArticles = document.querySelector("#articles");
//      $.ajax({
//           url: '../json/articles.json',
//           dataType: 'json',
//           success: function( data ) {
//                let i = 0;
//                for(item of data) {
//                     i++;
//                     let article = new Article(item);
//                     articles.push(article);
//                     if(divArticles.className.split(" ")[0] === "a4") {
//                          if(i === 4) break;
//                     }
//                }
//                addArticlesBlock(articles);
//           },
//           error: function( data ) {
//                alert( "ERROR:  " + data );
//           }
//      });
// });
