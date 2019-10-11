
var menu = document.getElementById('menu');
var sidebar = document.getElementById('sidebar');
function showMenu (){
	sidebar.style.cssText = "margin-left:0px; transition: 0.5s all"
};
menu.onclick = showMenu;

var hide = document.getElementById('hidemenu');
function hideMenu (){
	sidebar.style.cssText = "margin-left:-300px; transition: 0.5s all"
};
hide.onclick = hideMenu;