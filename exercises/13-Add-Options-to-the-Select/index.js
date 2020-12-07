window.onload = function() {
	console.log("The website was loaded...");
	let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

	// your code here

	var x = document.querySelector("#mySelect");
	for (let country of countries) {
		var option = document.createElement("option");
		option.value = country;
		option.innerHTML = country;
		document.querySelector("#mySelect").appendChild(option);
	}
	x.addEventListener("change", () => alert(x.value));
};
