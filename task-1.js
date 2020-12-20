// Напиши функцию logItems(array), которая получает массив и использует цикл for,
//который для каждого элемента массива будет выводить в консоль сообщение в формате[номер элемента]-[значение элемента].

// Нумерация должна начинаться с 1. К примеру для первого элемента массива ['Mango', 'Poly', 'Ajax'] 
//с индексом 0 будет выведено '1 - Mango', а для индекса 2 выведет '3 - Ajax'.

const logItems = (array) => {
for (let index = 0; index < array.length; index++) {
    const element = array.indexOf(array[index]) + 1;
    console.log(`${element} - ${array[index]}`);
}   
}
logItems(['Mango', 'Poly', 'Ajax']);
logItems(['apple', 'pear', 'orange', 'banana']);
