import "./style.css";

const input = document.getElementById("input");
const totalElement = document.getElementById("total");
const toast = document.getElementsByClassName("toast")[0];

const widths = await (await fetch(window.location.origin + "/widths.json")).json();
console.log(widths)

input.addEventListener("input", (e) => {
	input.value = input.value.replace(/[^a-z]+/g, "");

	let total = 0;
	let spaces = 0;

	input.value.split("").forEach(letter => {
		total += widths["minecraftTen"][letter.toLowerCase()];
	});

	[1, 0].includes(input.value.length) ? null : spaces += (input.value.length - 1);

	totalElement.innerText = (total == 0 && spaces == 0) ? "0" : (total + spaces - 1).toString();
});