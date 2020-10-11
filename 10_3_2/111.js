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
	default:
		alert("Тип Х не определён");
        break;
}
