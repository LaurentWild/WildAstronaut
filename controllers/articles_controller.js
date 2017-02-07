//'use strict'
function loadArticleView(article, divId, file, descStyle) {
     if(article !== undefined) {
          $(divId).load(file, function(responseTxt, statusTxt, xhr){
               if(statusTxt == "success") {
                    // UPDATE ID LINK
                    let link = $(this).context.querySelector("a");
                    link.setAttribute("id", "link" + article.id);
                    // UPDATE ID IMG
                    let articleImg = $(this).context.querySelector("#articleImg");
                    articleImg.setAttribute("id", "articleImg" + article.id);
                    // UPDATE ID IMG
                    let desc = $(this).context.querySelector("#desc");
                    desc.setAttribute("id", "desc" + article.id);
                    // UPDATE ID IMG
                    let info = $(this).context.querySelector("#info");
                    info.setAttribute("id", "info" + article.id);
                    // UPDATE ID IMG
                    let title = $(this).context.querySelector("#title");
                    title.setAttribute("id", "title" + article.id);
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
}

function displayArticle(firstDiv, article, descStyle) {
     // FIRST DIV
     firstDiv.setAttribute("id", "divArticle" + article.id);
     firstDiv.className += " " + descStyle;
     // LINK
     let link = firstDiv.querySelector("#link" + article.id);
     link.setAttribute("href", "article_details.html?id=" + article.id);
     // IMAGE
     let img = firstDiv.querySelector("#articleImg" + article.id);
     let image = article.img;
     if(descStyle === "v2") {
          let imgTab = article.img.split("_");
          image = imgTab[0] + "_r.jpeg";
     }
     img.setAttribute("src", "../imgs/" + image);
     // TITLE
     let title = firstDiv.querySelector("h3");
     title.setAttribute("id", "title" + article.id);
     title.innerHTML = article.title;
     // DESC
     let desc = firstDiv.querySelector("p");
     desc.setAttribute("id", "desc" + article.id);
     desc.innerHTML = article.desc;
}

function loadArticleRow(articles, file, row) {
     $('#articlesRow' + row).load(file, function(responseTxt, statusTxt, xhr){
          if(statusTxt === "success") {
               // UPDATE ID FIRST ARTICLE
               let firstArticle = $(this).context.querySelector("#firstArticle");
               firstArticle.setAttribute("id", "firstArticle" + row);
               // UPDATE ID SECOND ARTICLE
               let secondArticle = $(this).context.querySelector("#secondArticle");
               secondArticle.setAttribute("id", "secondArticle" + row);
               // UPDATE ID THIRD ARTICLE
               let thirdArticle = $(this).context.querySelector("#thirdArticle");
               thirdArticle.setAttribute("id", "thirdArticle" + row);
               // UPDATE ID FOURTH ARTICLE
               let fourthArticle = $(this).context.querySelector("#fourthArticle");
               fourthArticle.setAttribute("id", "fourthArticle" + row);
               // ADD
               let file = '../views/article_view.html';
               let divIds = ["#firstArticle", "#secondArticle", "#thirdArticle", "#fourthArticle"];
               let descStyles = ["v1", "v2","v4", "v4"];
               for(let i in divIds) {
                    // NUM ARTICLE
                    let numArticle = 4 * row + parseInt(i);
                    let article = articles[numArticle];
                    if(articles[numArticle] === undefined) aricle = null;
                    loadArticleView(article, divIds[i] + row, file, descStyles[i]);
               }
          }
          if(statusTxt === "error") {
              alert("Error: " + xhr.status + ": " + xhr.statusText);
          }
     });
}

function addArticlesRow(articles, row) {
     // AJOUTE UN NOUVEAU DIV BLOCK
     let newRow = $('#articles').append("<div></div>");
     // LUI DONNE UN ID EN FONCTION DU ROW
     let firstDiv = newRow[0].querySelector("div:last-child").setAttribute("id", "articlesBlock" + row);
     let articleRow = document.querySelector("#articlesBlock" + row);
     // CHARGE HTML DU ROW DANS CE NEW DIV
     $('#articlesBlock' + row).load('../views/articles_row.html', function(responseTxt, statusTxt, xhr){
          if(statusTxt == "success") {
               // MIS A JOUR ID
               let articlesRow = $(this).context.querySelector("#articlesRow");
               articlesRow.setAttribute("id", "articlesRow" + row);
               let file = '../views/left_article_row.html';
               if(parseInt(row) % 2 !== 0) {
                    file = '../views/right_article_row.html';
               }
               loadArticleRow(articles, file, row);
          }
          if(statusTxt == "error") {
              alert("Error: " + xhr.status + ": " + xhr.statusText);
          }
     });
}

function addArticlesBlock(articles) {
     $("#articles").html(" ");
     // NOMBRE ARTICLES
     let nbreArticles = articles.length;
     //NBRE DE ROWS
     let rows = Math.ceil(articles.length / 4);
     // POUR CHAQUE ROWS
     for (let row = 0; row < rows; row++) {
          addArticlesRow(articles, row);
     }
}

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
                    //START FILTER FEATURE
                    let that = articles.data;
                    articlesData = [];
                    // CHECK ARTICLES DIV
                    let divArticles = document.querySelector("#articles");
                    let i = 0;
                    for(item of that) {
                         i++;
                         let article = new Article(item);
                         articlesData.push(article);
                         if(divArticles.className.split(" ")[0] === "a4") {
                              if(i === 4) break;
                         }
                    }
                    addArticlesBlock(articlesData);
                    /* //Build table initial
                    makeTable(articles); */
                    //set initial order of Table
                    let statusTable= 0;
                    //set function to call fillter of search and rebuild table
                    let filterOn = function(e){
                         e.preventDefault();
                         articles.filterArticles(filter.value);
                         console.log(articles);
                         addArticlesBlock(articles.data);
                    }
                    // set var for the input
                    let filter = document.querySelector("#searchArticle");
                    let bGO = document.querySelector("#bSearch");
                    bGO.addEventListener("click", filterOn, false);
                    $("#searchArticle").keyup(function(e) {
                         if (e.which == 13) {
                              console.log("oii")
                              filterOn(e);
                              e.preventDefault();
                         }
                    });

let tt = ["soleil", "lune", "soleil", "lune", "soleil", "lune", "terre", "mars"];

                    function uniq(a) {
                        return a.sort().filter(function(item, pos, ary) {
                            return !pos || item != ary[pos - 1];
                        })
                    }

     console.log(uniq(tt));

                         $('.tag').on('click', function() {
                              console.log("errrr");
articles.filterArticles($(this).text());
addArticlesBlock(articles.data);

                         });





                    // add event listener for order of buttons
                    let orderB = document.querySelector("#id");
                    orderB.addEventListener("click", sort, false);
                    let orderD = document.querySelector("#dateFormated");
                    orderD.addEventListener("click", sort, false);
                    //function to sort by ID and Date as item is clicked
                    function sort(e){
                         let clickedItem = this.id;
                         e.preventDefault();
                         //check status of the table to define direction
                         if (statusTable === 0 || statusTable === 1){
                              //reorder the table
                              articles.data.sort(function (a, b){
                                   //change status of the table if ID
                                   if (clickedItem === "id"){
                                        return a[clickedItem] - b[clickedItem];
                                        //If DATE
                                   } else{
                                        a = a[clickedItem];
                                        b = b[clickedItem];
                                        return a - b;
                                   }
                              });
                              // change status of table
                              statusTable = 2;
                              //Sort reverse
                         } else{
                              articles.data.sort(function (a, b){
                                   if (clickedItem === "id"){
                                        //console.log("ID works")// Check if click ID works
                                        return b[clickedItem] - a[clickedItem];
                                        //Reverse DATE
                                   } else{
                                        a = a[clickedItem];
                                        b = b[clickedItem];
                                        return b - a;
                                   }
                              });
                              // change status of table
                              statusTable = 1;
                         }
                         //console.log("Status of table is: " + statusTable);//Check status of table after click
                         //rebuild
                         addArticlesBlock(articles.data);
                         e.stopPropagation();
                         e.preventDefault();
                    }
               } else {
                    alert(`Status: ${req.status} - Could not load this article`);
               }
          } else {
               console.log("Loading");
          }
     }
req.send();
})();
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
