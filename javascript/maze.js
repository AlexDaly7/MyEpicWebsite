// Variables at start to work for any occasion.

var url = window.location.pathname;
var index = url.lastIndexOf("/") + 1;
var name = url.substr(index);
pageStored = localStorage.getItem("page");
pageUrl = url.substr(0, index);


function loadNew() {
	localStorage.setItem("page", name);
}

function checkMaze() {
	if (pageStored != name) {
		location.replace(pageUrl + pageStored);
	}
}

function goToMaze(setPage) {
	pageToGo = pageUrl + setPage;
	localStorage.setItem("page", setPage);
	location.replace(pageToGo);
}