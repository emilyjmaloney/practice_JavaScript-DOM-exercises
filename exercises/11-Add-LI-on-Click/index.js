let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here

	var li = document.createElement("LI");
	document.querySelector("#myList").appendChild(li);
	// document.getElementById("myList").appendChild(li);
	li.innerHTML = "Fourth element";
});
