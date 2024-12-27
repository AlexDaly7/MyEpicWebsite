// Variables at start to work for any occasion.

var url = window.location.pathname;
var index = url.lastIndexOf("/") + 1;
var name = url.substr(index);
pageStored = localStorage.getItem("page");
pageUrl = url.substr(0, index);


function loadNew() {
	
	localStorage.setItem("page", name);
	alert("set new page " + name);
	alert(localStorage.getItem("page"));
	
}

function checkMaze() {
	
	alert(pageStored + " | " + name);
	
	if (pageStored != name) {
		alert(pageStored + " this means it is not the same");	
		alert(pageUrl);
		location.replace(pageUrl + pageStored);
	}
}

function goToMaze(setPage) {
	pageToGo = pageUrl + setPage;
	alert("hi");
	localStorage.setItem("page", setPage);
	location.replace(pageToGo);
	alert("page changed");
}