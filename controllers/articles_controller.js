
function addArticleRow() {
     $('.az').load('../views/articles_row.html', function(responseTxt, statusTxt, xhr){
          if(statusTxt == "success") {
               var html = $.parseHTML(responseTxt);
               $.each( html, function( i, el ) {
               // console.log(i,el);
               });

               let articlesRow = html[2].querySelector(".aaa");
               console.log(articlesRow);

               $('.aaa').load('../views/left_article_row.html', function(responseTxt, statusTxt, xhr){
                    if(statusTxt == "success") {

                         let leftArticleRow = html[2].querySelector(".imageDiv");

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


     // $('.lastArticles')
     // .append(
     //     $("<div/>").attr("class", "col-xs-12 col-sm-6 img-padding imageDiv")
     //     .append(
     //         $("<div/>").attr("class", "view view-first")
     //         .append(
     //             $("<a/>").attr("href", "article.external_link")
     //             .append(
     //                 $("<img/>").attr("class", "img-responsive").attr("src", "../imgs/art1.jpeg"),
     //                 $("<div/>").attr("class", "mask")
     //                 .append(
     //                     $("<p/>").text("article.desc"),
     //                     $("<span/>").attr("class", "info").text("En savoir plus")
     //                 ),
     //                 $("<h3/>").attr("class", "title").text("article.title")
     //
     //             )
     //         )
     //     )
     // );





    // <!-- <div class="row articlesPlacer rowAdjust">
    //     <div class="col-xs-1"></div>
    //     <div class="col-xs-10">
    //         <div class="row az">
    //         </div>
    //     </div>
    //     <div class="col-xs-1"></div>
    // </div> -->


//     $(function() {
//         $('.lastArticles').load('../views/left_article_row.html').attr("id", "rowNum1");
//     });
//     let rowbigDiv = document.querySelector("#rowNum1 .bigDiv");
// //
// console.log(rowbigDiv);
//     rowbigDiv.append(
//         $("<img/>").attr("class", "img-responsive").attr("src", "../imgs/art1.jpeg")
//     );

}



function articleBigThumbnail(article) {

    // $(function() {
    //     $('.az').load('../views/article_view.html');
    // });



    $(".az").html("");
    $(".az")
    .append(
        $("<div/>").attr("class", "col-xs-12 col-sm-6 img-padding imageDiv")
        .append(
            $("<div/>").attr("class", "view view-first")
            .append(
                $("<a/>").attr("href", article.external_link)
                .append(
                    $("<img/>").attr("class", "img-responsive").attr("src", "../imgs/art1.jpeg"),
                    $("<div/>").attr("class", "mask")
                    .append(
                        $("<p/>").text(article.desc),
                        $("<span/>").attr("class", "info").text("En savoir plus")
                    ),
                    $("<h3/>").attr("class", "title").text(article.title)

                )
            )
        )
    );
}
function articleLargegThumbnail(article) {
    $(".az").html("");
    let thumbnail = "trtr";
    $(".az")
    .append(
        $("<div/>").attr("class", "col-xs-12 col-sm-6 img-padding imageDiv")
        .append(
            $("<div/>").attr("class", "view view-first")
            .append(
                $("<a/>").attr("href", article.external_link)
                .append(
                    $("<img/>").attr("class", "img-responsive").attr("src", "../imgs/art1.jpeg"),
                    $("<div/>").attr("class", "mask")
                    .append(
                        $("<p/>").text(article.desc),
                        $("<span/>").attr("class", "info").text("En savoir plus")
                    ),
                    $("<h3/>").attr("class", "title").text(article.title)

                )
            )
        )
    );
}

$(document).ready(function() {
    // OK ############################################
    // $.getJSON('../json/articles.json', function (data) {
    //     for(item of data) {
    //      //    console.log(item);
    //         let article = new Article(item);
    //         articleBigThumbnail(article);
    //     }
    // });

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

   addArticleRow();
});
