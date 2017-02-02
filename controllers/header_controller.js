//Charge Header and footer
$(document).ready(function() {
	$("header").html(
	
        `<div  id="logo">
          <h1>Wild Astronaut</h1>
          <img src="../imgs/bg-logo.png" class="img-responsive" />
        </div>
        <div id="banner">
          <ul id="nav">
            <li><a href="index.html" target="_self">Accueil</a></li>
            <li><a href="articles.html" target="_self">Articles</a></li>
          </ul>
        </div>`
        
	);
	$("footer").html(
	
        `<div class="row rowAdjust">
                <div class="row rowAdjust yellowBar">
                    <div class="col-xs-6 yellowDark"></div>
                    <div class="col-xs-6 yellowClaire"></div>
                </div>
                <div class="row rowAdjust rowFooter">
                    <div class="col-xs-12 col-sm-6 blueDark">
                        <div class="row">
                            <div class="col-xs-4">
                                <a href="index.html">
                                    <img src="../imgs/logo-footer.jpg" class="img-responsive imgfooter">
                                </a>
                            </div>
                            <div id="adresse" class="col-xs-8">
                                <div class="row">
                                    <div class="col-xs-12">contact@wildastronaut.fr</div>
                                    <div class="col-xs-12">15 place Canteloup</div>
                                    <div class="col-xs-12">33800 Bordeaux (France)</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 blueClaire">
                        <div class="row rowFooter text-center">
                            <div class="social">
                                <a target="_blank" href="http://www.facebook.com">
                                    <img src="../imgs/facebook-logo-button.svg" class="ibuttonsocial">
                                </a>
                            </div>
                            <div class="social">
                                <a target="_blank" href="http://www.instagram.com">
                                    <img src="../imgs/instagram-logo.svg" class="buttonsocial">
                                </a>
                            </div>
                            <div class="social">
                                <a target="_blank" href="https://www.google.fr/maps/place/LES+BROCANTEURS+du+Passage+Saint+Michel+Bordeaux/@44.8335702,-0.5672659,17z/data=!3m1!4b1!4m8!1m2!2m1!1sgoogle+map!3m4!1s0xd5527cb0a3b861d:0xd4c43485494e0600!8m2!3d44.8335702!4d-0.5657145">
                                    <img src="../imgs/map-pin-marked.svg" class="buttonsocial">
                                </a>
                            </div>
                            <div class="social">
                                <a target="_blank" href="http://www.twitter.com">
                                    <img src="../imgs/twitter-logo-button.svg" class="buttonsocial">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
        
	);
});