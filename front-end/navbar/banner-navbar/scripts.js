function openNav(){
	var x = document.getElementById('nav-menu');
	if(x.className === 'nav-links'){
		x.className += ' open';
	}
	else{
		x.className = 'nav-links';
	}
}