//JS. HW_2

// Напишите валидационный скрипт используя функции

// 1. Скрипт должен на вход принимать строку.
// 2. После проверки строки выводить в консоль сообщение где будет конкретно написано, что не так в ведённой строке.
// 3. Минимум 5 символов в строке
// 4. Максимум 64 символа в строке
// 5. В строке должны быть буквы
// 6. Должна быть хотя бы одна буква в верхнем регистре
// 7. Должна быть хотя бы одна цифра
// 8. Должна быть хотя бы одна @
// 9. Строка не должна быть пустой

function check(str){
    if(typeof str == 'string'){
        if(str.length < 5){
            console.log("The string is too short")
    } else if(str.length > 64){
          console.log("The string is too long")
    } else if(!/[А-Яа-я-A-Za-z]+/.test(str)){
            console.log("The string must have at least one upper case letter")
    } else if(!/[0-9]/.test(str)){
            console.log("The string must have 1 number")
    } else if(!/[@]/.test(str)){
            console.log("The string must have @")
    }   } else if(str == ''){
            console.log("The string mustn't be empty")
        } else if(str != 'string'){
            console.log("It's not string")
        }
};

check('hbdfh@AыпаыФ153');
check('qefvgdQ@1');
check('ab');
