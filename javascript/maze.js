// Variables at start to work for any occasion.

var url = window.location.pathname;
var index = url.lastIndexOf("/") + 1;
var name = url.substr(index);
pageStored = localStorage.getItem("page");
pageUrl = url.substr(0, index);

// Change stored to current page
function loadNew() {
	localStorage.setItem("page", name);
}

// Check current page against stored
function checkMaze() {
	if (pageStored != name) {
		location.replace(pageUrl + pageStored);
	}
}

// Changes page to the next page and changes to that page
function goToMaze(setPage) {
	pageToGo = pageUrl + setPage;
	localStorage.setItem("page", setPage);
	location.replace(pageToGo);
}