// Variables at start to work for any occasion.

var url = window.location.pathname;
var index = url.lastIndexOf("/") + 1;
var name = url.substr(index);

function loadNew() {
	
	localStorage.setItem("page", name);
	alert("set new page " + name);
	alert(localStorage.getItem("page"));
	
}

function checkMaze() {
	pageStored = localStorage.getItem("page");
	alert(pageStored + " | " + name);
	
	if (pageStored != name) {
		alert(pageStored + " this means it is not the same");	
		pageLocation = url.substr(0, index) + pageStored;
		alert(pageLocation);
		location.replace(pageLocation);
	}
}