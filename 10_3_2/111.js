let value = true;
let valueType = typeof value
//alert(valueType)
switch (valueType){
	case 'number': 
        alert("Х - число");
        break;
    case 'string': 
        alert("Х - строка");
        break;
    case 'boolean': //true и false
        alert("Х - логическое значение");
        break;
	default:
		alert("Тип Х не определён");
        break;
}

// Есть пару недочетов:
// 1. Переменная value не определена в коде
// 2. После case 'boolean' отсутствует директива break