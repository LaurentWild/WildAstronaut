$(document).ready(function() {
	$("header").append(
		$("<div/>", {
			id: 'logo'
		})
		.append(
			$("<h1/>").text("Wild Astronaut"),
			$("<img/>").attr("src", "../imgs/bg-logo.png").attr("class", "img-responsive")
		),
		$("<div/>", {
			id: 'banner'
		})
		.append(
			$("<ul/>").attr("id", "nav")
			.append(
				$("<li/>")
				.append(
					$("<a/>").text("Accueil").attr("href", "index.html").attr("target", "_self")
				),
				$("<li/>")
				.append(
					$("<a/>").text("Articles").attr("href", "articles.html").attr("target", "_self")
				)
			)
		)
	);
});

/*

        <div  id="logo">
          <h1>Wild Astronaut</h1>
          <img src="../imgs/bg-logo.png" class="img-responsive" />
        </div>
        <div id="banner">
          <ul id="nav">
            <li><a href="index.html" target="_self">Accueil</a></li>
            <li><a href="articles.html" target="_self">Articles</a></li>
          </ul>
        </div>
        */