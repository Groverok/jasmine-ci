function calculate(inputValue) {
  //alert(inputValue);
  // in the start put / and in the end / - this is a rule for JS
  const expression = /\+|\-|\*|\//;
  // split will разбивает объект String на массив строк путём разделения строки указанной подстрокой.
  const numbers = inputValue.split(expression);
  // debugger;
  // const numberA = numbers[0]; - this is for string, but we need to get numbers (int) - we can use parseInt method
  // Метод match() возвращает получившиеся совпадения при сопоставлении строки с регулярным выражением.

  const numberA = parseInt(numbers[0]);
  const numberB = parseInt(numbers[1]);

  const operation = inputValue.match(expression);
  //debugger;

  if(Number.isNaN(numberA) || Number.isNaN(numberB) ||operation === null){
    updateResult('Operation not recognized!');
    return;
  }

  const calculator = new Calculator();
  calculator.add(numberA);

  let result;
  switch(operation[0]) {
    case '+': result = calculator.add(numberB);
      break;
    case '-': result = calculator.subtract(numberB);
      break;
    case '*': result = calculator.multiply(numberB);
      break;
    case '/': result = calculator.divide(numberB);
      break;
  }
  //debugger;
  updateResult(result);
}

// updates result in DOM element
function updateResult(result){
  const element = document.getElementById('result');
  if(element){
    //debugger;
    element.innerText = result;
  }
}
