let arr = [2, 23, 33, 45, 0, null, 'ку-ку', 5, null, 6, 0, 0];
let cnt = 0;
let cnk = 0;
let cnNull = 0;
arr.forEach(function(item, index) {
	if (typeof item == 'number'){
	if (item % 2 == 0 && item !==0 && item !== 'null') cnk++;}
	{if (item % 2 !==0 || item == 'string') cnt++;}
		{if (item === 0) cnNull++;}
	});
console.log("Количество нечётных элементов в массиве = "+cnt);
console.log("Количество чётных элементов в массиве = "+cnk);
console.log(`Количество 0 в массиве = ${cnNull}`)