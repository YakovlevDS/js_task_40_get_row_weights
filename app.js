// ? Task:Несколько человек стоят рядом, разделенные на две команды. Первый человек попадает в команду 1, второй - в команду 2, третий - в команду 1 и так далее.

// Реализуй функцию getRowWeights, которая принимает массив чисел (веса людей) и возвращает новый массив из двух целых чисел, где первое - общий вес команды 1, а второе - общий вес команды 2.

// Примечания:

// Размер массива не менее 1.
// Все числа положительные.
// Пример:

// getRowWeights([10]) === [10, 0]
// getRowWeights([10, 85, 90]) === [100, 85]
// getRowWeights([8, 5, 9, 3]) === [17, 8]


// Solution 1
function getRowWeights(array) {
   
    const sumWeights = (numCom, arr) => {
        let weightsCom = 0;
        for (let i = numCom - 1; i < arr.length; i += 2) {
            weightsCom += arr[i];
        }
        return weightsCom;
    }

    return [sumWeights(1, array), sumWeights(2, array)]
}

console.log(getRowWeights([10]));
console.log(getRowWeights([10, 85, 90]));
console.log(getRowWeights([8, 5, 9, 3]));

// ! Explanation: for solid(Removing recurring functional)
