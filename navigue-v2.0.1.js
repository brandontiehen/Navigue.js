/**
	* "Navigue" - Version 2.0
	* Developed/Revamped by Brandon Tiehen
	* Copyright 2024 (c) All Rights Reserved.
	* https://brandontiehen.github.io
	* Insert: <body onLoad="landingPage()">
	* Default Classes/IDs: #navigation, a.nav-a, (edit as necessary)
	* Default sections: #landing #about, #portfolio, #contact, (edit as necessary)
	* HTML & CSS Template (Useful, but optional) at bottom of this file. Not included in minified file.
*/
const sections = ['#landing','#about','#portfolio','#contact']; //Edit your sections here
const landingPage = () => {
	const nav = $("#navigation");//Find Nav
	nav.slideUp(0);//AutoHide Nav
	navDown = () => nav.css('max-height', '100vh').slideDown(1000);//Show Nav Function
	navUp = () => nav.slideUp(700);//Hide nav function
	for (let i = 0; i < sections.length; i++){
		$(sections[i]).slideUp(0);//Loop function to hide all sections
	}
	$('#landing').slideDown(700);//Show landing page by default
};
function navigue(target){
	$.navGo = function(target){
		console.log(`${target} (target) successfull acquired.`);
		const hidePages = () => {
			for (let i = 0; i < sections.length; i++){
				$(sections[i]).slideUp(300);
			};
		};
		hidePages();
		console.log('Loop to hide things has executed');
		$('#navigation').slideUp(500);
		$(target).delay(300).slideDown(700);
		console.log('Successful! Operation navigue(target) complete.');
	};
	$.navGo(target);
}

/* HTML and CSS TEMPLATE:

<nav><!--Create a button to close your nav with a navDown() function to OPEN the nav and a navUp() declaration to close the nav.-->
	<a href="javascript:void(0);" onclick="navDown()" class="nav-btn">MENU</a><!--OPEN NAV-->
	<div class="nav-container" id="navigation">
		<button id="nav-close" onClick="navUp()">X</button><!--CLOSE NAV-->
		<ul class="nav-ul">
			<li class="nav-li"><a class="nav-a" href="javascript:void(0);" onClick="navigue('#about')">about</a></li><!--SYNTAX: href should be a javascript void, then onclick should call navigue() with the parameter set in '' to be the target section. See JS file for editing that.-->
			<li class="nav-li"><a class="nav-a" data-link="#portfolio" href="javascript:void(0);" onClick="navigue('#portfolio')">porfolio</a></li>
			<li class="nav-li"><a class="nav-a" href="javascript:void(0);" onClick="navigue('#contact')">contact</a></li>
		</ul>
	</div>
</nav>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script src="navigue-v2.min.js"></script>
<style>.nav-container{background:rgba(0, 0, 0, 0.85);padding:1%;width:98%;max-width:98vw;font-size:1.7rem;text-align:right;position:fixed;height:100vh;top:0;}
.hideNav{top:-120vh;transition: 0.2s ease-in-out;-moz-transition: 0.2s ease-in-out;-ms-transition: 0.2s ease-in-out;-o-transition: 0.2s ease-in-out;-webkit-transition: 0.2s ease-in-out;}.nav-ul{list-style-type:none;max-width:60%;padding:20% 0%;height:100vw;max-height:100%;margin:10% auto;}.nav-li{padding:5% 0%;max-width:90%;}.nav-a{text-decoration:none;color:#DDDDDD;scale:1;-webkit-scale:1;-o-scale:1;-moz-scale:1;-ms-scale:1;transition:0.2s ease-in-out;-ms-transition:0.2s ease-in-out;-moz-transition:0.2s ease-in-out;-webkit-transition:0.2s ease-in-out;-o-transition:0.2s ease-in-out;}.nav-container:hover.nav-a{color:#BBBBBB;}.nav-a:hover{color:#FFFFFF !important;scale:1.03;-webkit-scale:1.03;-o-scale:1.03;-moz-scale:1.03;-ms-scale:1.03;transition:0.2s ease-in-out;-ms-transition:0.2s ease-in-out;-moz-transition:0.2s ease-in-out;-webkit-transition:0.2s ease-in-out;-o-transition:0.2s ease-in-out;}#nav-close{background:rgba(180, 0, 0, 0.85);height:50px;width:50px;	border:1px solid red;}#nav-close:hover{cursor:pointer;background:rgba(244, 0, 0, 0.85);}</style>

*/