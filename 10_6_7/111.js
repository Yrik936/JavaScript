let arr = [1, 23, 33, 45, 0, null, 'ку-ку', 5, null, 6, 0, 0];
let cnt = 0;
let cnk = 0;
let cnO = 0;
arr.forEach(function(item, index) {
  if (item % 2 == 0 && item !==0 && item !== null) cnk++;{
	
  }if (item % 2 !==0 || item = 'string') cnt++;{
	
  }if (item == 0) cnO++;{
    
  }
 });
console.log("Количество нечётных элементов в массиве = "+cnt);
console.log("Количество чётных элементов в массиве = "+cnk);
console.log("Количество 0 в массиве = "+cnO);