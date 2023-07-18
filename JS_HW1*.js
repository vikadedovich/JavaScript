// HW_1*
// Задания с разным количеством звездочек:)
// 1*:
// Преобразовать написанный код в 26-33 пунктах в функцию,
// принимающую на вход возраст.
// Пример: const checkAge = function(age) {
// Ваши преобразования
// }
// Вывести в консоль результат работы функции с возрастами
// 17, 18, 61

function check(age){
    if(age < 18){
        console.log("You don’t have access cause your age is " + age + " It’s less then"
            )
    } else if( 18 <= age && age < 60){
        console.log("Welcome!")
    } else if(age >= 60){
        console.log("Keep calm and look Culture channel")
    } else{
            console.log("Technical work");
        }
};
check(5);
check(28);
check(70);
check();
// 2*:
// Преобразовать задание 1* таким образом, чтобы первым делом
// в функции проверялся тип данных. И если он не Number - кидалась
// ошибка.


function checkAge(age){
    if(typeof age == 'number'){
    if(age < 18){
        console.log("You don’t have access cause your age is " + age + " It’s less then"
            )
    } else if( 18 <= age && age < 60){
        console.log("Welcome!")
    } else if(age >= 60){
        console.log("Keep calm and look Culture channel")
    } } else if(typeof age != 'number'){
        console.log("Please, enter a number!")
    }
    else{
            console.log("Technical work");
        }
};

checkAge(5);
checkAge(28);
checkAge("4553");
checkAge();
// 3**:
// Преобразовать 2* таким образом, чтобы значение '2'
// (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось,
// преобразовываясь в number

function Age(age){
    if(typeof age == 'string'){
        age = parseInt(age.match(/\d+/))}
    if(age < 18){
        console.log("You don’t have access cause your age is " + age + " It’s less then"
            )
    } else if( 18 <= age && age < 60){
        console.log("Welcome!")
    } else if(age >= 60){
        console.log("Keep calm and look Culture channel")
    } else{
            console.log("Technical work");
        }
};
Age('346');
Age("ds5");

// 4***:
// Преобразовать задание 3* таким образом, чтобы возраст
// вводится используя функцию prompt в привязанной верстке

