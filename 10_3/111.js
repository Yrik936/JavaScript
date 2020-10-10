let value = prompt("Введите число");
value1 = +value;
if (typeof value1 === 'NaN' && value1 !== 'number') {
	alert("Упс, кажется, вы ошиблись")
} if (value1 % 2 == 0 && value1 !== 0) {
	alert(`число ${value1} четное`)
	} else {
	alert(`число ${value1} нечетное`)
	}