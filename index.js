import "./style.css";

const input = document.getElementById("input");
const totalElement = document.getElementById("total");
const toast = document.getElementsByClassName("toast")[0];
const selected = document.getElementById("selected");

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

const fontChoices = [...document.getElementsByClassName("font-choice")] 
fontChoices.forEach(element => {
	element.addEventListener("click", (e) => {
		let fonts = [...fontChoices]
		fonts.splice(fontChoices.indexOf(e.target), 1);

		if(e.target.style.outline == "rgb(84, 187, 55) solid 5px") {
			return e.target.style.outline = "4px solid transparent";
		}

		fonts.forEach(font => {
			font.style.outline = "4px solid transparent";
		});

		e.target.style.outline = "5px solid #54bb37"
				
		selected.innerText = e.target.getAttribute("font")
	});
	element.addEventListener("mouseover", (e) => {
		if(e.target.style.outline !== "rgb(84, 187, 55) solid 5px") {
			e.target.style.outline = "4px solid white"
		}
	});
	element.addEventListener("mouseout", (e) => {
		if(e.target.style.outline == "white solid 4px" && e.target.style.outline !== "rgb(84, 187, 55) solid 5px") {
			e.target.style.outline = "4px solid transparent"
		}
	});
})