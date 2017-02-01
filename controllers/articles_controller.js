
function articleRow() {


    $(function() {
        $('.lastArticles').load('../views/left_article_row.html').addClass('rowNum1');
    });
}



function articleBigThumbnail(article) {


    $(function() {
        $('.lastArticles').load('../views/left_article_row.html').addClass('rowNum1');
    });








    // $(function() {
    //     $('.az').load('../views/article_view.html');
    // });



    // $(".az").html("");
    // $(".az")
    // .append(
    //     $("<div/>").attr("class", "col-xs-12 col-sm-6 img-padding imageDiv")
    //     .append(
    //         $("<div/>").attr("class", "view view-first")
    //         .append(
    //             $("<a/>").attr("href", article.external_link)
    //             .append(
    //                 $("<img/>").attr("class", "img-responsive").attr("src", "../imgs/art1.jpeg"),
    //                 $("<div/>").attr("class", "mask")
    //                 .append(
    //                     $("<p/>").text(article.desc),
    //                     $("<span/>").attr("class", "info").text("En savoir plus")
    //                 ),
    //                 $("<h3/>").attr("class", "title").text(article.title)
    //
    //             )
    //         )
    //     )
    // );
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
                articleBigThumbnail(article);
            }
        },
        error: function( data ) {
            alert( "ERROR:  " + data );
        }
    });
});
