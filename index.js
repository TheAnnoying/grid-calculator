import "./style.css";
const widths = {
	"minecraftTen": {
		a: 7,
		b: 7,
		c: 6,
		d: 7,
		e: 7,
		f: 7,
		g: 7,
		h: 7,
		i: 3,
		j: 7,
		k: 7,
		l: 6,
		m: 10,
		n: 8,
		o: 7,
		p: 7,
		q: 8,
		r: 7,
		s: 7,
		t: 7,
		u: 7,
		v: 7,
		w: 10,
		x: 7,
		y: 7,
		z: 7
	}
}

const input = document.getElementById("input");
const totalElement = document.getElementById("total");

input.addEventListener("input", (e) => {
	input.value = input.value.replace(/[^a-z]+/g, "");
	input.value.length > 15
		? document.getElementsByClassName("toast")[0].classList.remove("hidden")
		: document.getElementsByClassName("toast")[0].classList.add("hidden");

	let total = 0;
	let spaces = 0;

	input.value.split("").forEach(letter => {
		total += widths["minecraftTen"][letter.toLowerCase()];
	});

	[1, 0].includes(input.value.length) ? null : spaces += (input.value.length - 1);

	totalElement.innerText = (total == 0 && spaces == 0) ? "0" : (total + spaces - 1).toString();
});