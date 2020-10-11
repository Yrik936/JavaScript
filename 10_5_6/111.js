let arr = [10, 10, 10];
for (i = 0; i <= arr.length; i++){
	if (arr[0] === arr[i+1]){
		console.log('Все элементы массива одинаковы');
	} else {
		console.log('Все элементы массива разные');
		}
}
