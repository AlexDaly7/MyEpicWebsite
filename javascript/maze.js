// Variables at start to work for any occasion.

var url = window.location.pathname;
var index = url.lastIndexOf("/") + 1;
var name = url.substr(index);
pageLocation = url.substr(0, index) + pageStored;

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
		alert(pageLocation);
		location.replace(pageLocation);
	}
}

function goToMaze(setPage) {
	localStorage.setItem("page", setPage);
	location.replace(pageLocation + setPage);
	alert("page changed);
}