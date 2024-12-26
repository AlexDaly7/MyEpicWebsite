function mazeFunc(state) {
	var url = window.location.pathname;
	var index = url.lastIndexOf("/") + 1;
	var name = url.substr(index);
	alert(name);
	if (state == "loadNew") {
		localStorage.setItem("page", name);
		alert("set new page");
	}
	
	if (state == "check") {
		pageStored = localStorage.getItem("page");
		if (pageStored != name) {
			alert("hi");
		} else {
			
			
		}
	}

}