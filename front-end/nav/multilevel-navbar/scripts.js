function openNav(){
	var navbarHidden = document.getElementById("navbar-hidden");

	if(window.matchMedia("(max-width: 991.98px)").matches){
		document.getElementById('nav-hidden-right').style.display = 'none';
		document.getElementById('nav-hidden-left').style.display = 'block';
		document.getElementById('nav-hidden-items').style.gridTemplateAreas = '"nav-hidden-left"';
		document.getElementById('backnav').style.display = 'block';
		if(navbarHidden.className === "collapse"){
			navbarHidden.className += " display";
			document.body.style.position = "fixed";
			document.getElementById('open-menu').src = 'img/close-menu-light.png';
		}
		else{
			navbarHidden.className = "collapse";
			document.body.style.position = "static";
			document.getElementById('open-menu').src = 'img/open-menu-light-left.png';
		}

	}
	else{
		document.getElementById('nav-hidden-right').style.display = 'block';
		document.getElementById('nav-hidden-left').style.display = 'block';
		document.getElementById('nav-hidden-items').style.gridTemplateAreas = '"nav-hidden-left nav-hidden-right"';
		document.getElementById('backnav').style.display = 'none';
		if(navbarHidden.className === "collapse"){
			navbarHidden.className += " display";
			document.body.style.position = "fixed";
			document.getElementById('open-menu').src = 'img/close-menu-light.png';
		}
		else{
			navbarHidden.className = "collapse";
			document.body.style.position = "static";
			document.getElementById('open-menu').src = 'img/open-menu-light-left.png';
		}
	}			
}

function openTab(event, topic){
	var i, tablinks, tabcontent;

	tablinks = document.getElementsByClassName("tablinks");
	for(i = 0; i < tablinks.length; i++){
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	tabcontent = document.getElementsByClassName("tabcontent");
	for(i = 0; i < tabcontent.length; i++){
		tabcontent[i].style.display = "none";
	}

	if(window.matchMedia("(max-width: 991.98px)").matches){
		document.getElementById(topic).style.display = "block";
		event.currentTarget.className += " active";	
		document.getElementById('nav-hidden-right').style.display = 'block';
		document.getElementById('nav-hidden-items').style.gridTemplateAreas = '"nav-hidden-right"';
		document.getElementById('nav-hidden-left').style.display = 'none';

	}
	else{
		document.getElementById(topic).style.display = "block";
		event.currentTarget.className += " active";	
		document.getElementById('nav-hidden-right').style.display = 'block';
		document.getElementById('nav-hidden-left').style.display = 'block';
		document.getElementById('nav-hidden-items').style.gridTemplateAreas = '"nav-hidden-left nav-hidden-right"';
	}		
}
document.getElementById('default').click();

function backNav(){
	document.getElementById('nav-hidden-right').style.display = 'none';
	document.getElementById('nav-hidden-left').style.display = 'block';
	document.getElementById('nav-hidden-items').style.gridTemplateAreas = '"nav-hidden-left"';
	document.getElementById('backnav').style.display = 'block';
}