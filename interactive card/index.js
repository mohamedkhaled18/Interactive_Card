

document.forms[0].onkeyup= (ev) => {
	// Cardholder Name
	let nameInput = document.getElementById("nameInput");
	let nameResult = document.getElementById("nameResult");
	nameInput.onkeyup = () => {
		var errorName = document.getElementById("errorName");
		nameResult.value = nameInput.value;
		if (nameInput.value == "") {
			ev.preventDefault();
			errorName.style.display = "block";
		}else {
			errorName.style.display = "none";
		}
	}

	// Card Numbers
	let numsInput = document.getElementById("numsInput");
	let numsResult = document.getElementById("cardNums");
	let numsResult2 = document.getElementById("cardNums2");
	let numsResult3 = document.getElementById("cardNums3");
	let numsResult4 = document.getElementById("cardNums4");
	numsInput.onkeyup = () => {
		numsResult.value = numsInput.value.slice(0, 5);
		numsResult2.value = numsInput.value.slice(5, 10);
		numsResult3.value = numsInput.value.slice(10, 15);
		numsResult4.value = numsInput.value.slice(15, 19);
			if (numsInput.value.length === 4 || numsInput.value.length === 9 || numsInput.value.length === 14) {
				numsInput.value += " ";
			}
			let errorNums = document.getElementById("errorNums");
			if (numsInput.value === "") {
				errorNums.style.display = "block";
				state = false;
			}else {
				state = true;
				errorNums.style.display = "none";
			}

		let errorRepeat = document.getElementById("errorRepeat");
		if (numsInput.value.length > 19) {
			errorRepeat.style.display = "block";
			state = false;
		}else {
			state = true;
			errorRepeat.style.display = "none";
		}
	}

	// Date
	let monthResult = document.getElementById("monthResult");
	let monthInput = document.getElementById("monthInput");
	let yearResult = document.getElementById("yearResult");
	let yearInput = document.getElementById("yearInput");
	let lastYear = new Date().getFullYear(); // 2023
	monthInput.onkeyup = () => {
		let errorMonth = document.getElementById("errorMonth");
		monthResult.value = monthInput.value;
		if (monthInput.value === "" || monthInput.value.length >= 3 || monthInput.value > 12) {
			ev.preventDefault();
			errorMonth.style.display = "inline";
		}else {
			errorMonth.style.display = "none";
		}
	}
	yearInput.onkeyup = () => {
		let errorYear = document.getElementById("errorYear");
		yearResult.value = yearInput.value;
		if (yearInput.value < lastYear || yearInput.value.length > 4 || yearInput.value > lastYear + 12) {
			errorYear.style.cssText =  "display: inline-block; margin-right: 10px; color: tomato";
			yearInput.style.cssText = "border: 1px solid tomato; box-shadow: 0px 0px 8px 3px tomato ";
		}else {
			yearInput.style.cssText = "border: 1px solid rgb(0 0 0 / 0.2); box-shadow: 0";
			errorYear.style.display = "none";
		}
	}

	// CVC
	let cvcInput = document.getElementById("cvcInput");
	let cvcResult = document.getElementById("cvc");
	let errorcvc = document.getElementById("errorcvc");
	cvcInput.onkeyup = () => {
		cvcResult.value = cvcInput.value;
		if (cvcInput.value === "" || cvcInput.value.length > 3) {
			cvcInput.style.cssText = "border: 1px solid tomato; box-shadow: 0px 0px 5px 3px tomato";
			errorcvc.style.display = "inline";
		} else {
			errorcvc.style.display = "none";
			cvcInput.style.cssText = "border: 1px solid rgb(0 0 0 / 0.2);box-shadow: 0;";
		}
	}
	
}

document.forms[0].onsubmit = (e) => {
	e.preventDefault();
}