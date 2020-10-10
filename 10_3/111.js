let value = prompt("Введите число");
value1 = +value;
if (typeof value !== 'number' || value1 === 'NaN') {
	alert("Упс, кажется, вы ошиблись")
};
if (value1 % 2 == 0) {
alert(`число ${value1} четное`);
}else {
alert(`число ${value1} нечетное`);
}