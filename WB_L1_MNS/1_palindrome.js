function isPalindrome(str) {
	// приводим к строке без пробелов. Сначала преобразовыаем в массив, потом обратно в строку. 
	//Переводим к нижнему регистру для равнего сравнения, если подается строка с разным регистром
	newStr = str.toLowerCase().split(' ').join('');
	
	// Сравниваем эту строку с строкой, которую мы реверсировали (сделали элементы в обратном порядке). 
	//Всё тоже самое, только элементы массива представили в обратном порядке.
	return newStr === newStr.split('').reverse().join('');
}

isPalindrome('аргентина манит негра');