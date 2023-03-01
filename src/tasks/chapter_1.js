/**
    2.1 Hello world
    window.alert('Я JavaScript!');
**/

/**
2.4 variables
 1)
let admin;
let name;
 name = 'John';
 admin = name;
 window.alert(admin);

 2)
 let earth;
 let user;

 3)
 const BIRTHDAY = '06.03.1989';
 const age = 33;
 **/

/**
 2.5 types
 1.
 hello 1
 hello name
 hello Ilya
**/

/**
 2.6 prompt,alert,confirm
 const name = window.prompt('What is your name ?', '');

 window.alert(name);
 **/

/**
 2.7 base math
 1)
 a = 2;
 b = 2;
 c = 2;
 d = 1;
 2)
 a = 4;
 x = 5;
 3)
 '10',-1,1,2,6,'9px',"$45",2,NaN,"-95",-14,1,NaN,-2;
 4)
 const a = Number(prompt('Первое число?', 1));
 const b = Number(prompt('Второе число?', 2));

 alert(a + b); // 12

 **/

/**
 2.9
 1) true,false, true , true , false, false, false
 **/

/**
 2.10 if else
 1) true
 2)
 const languageName = window.prompt('Какое «официальное» название JavaScript?').toLowerCase();

 if (languageName === String('ECMAScript').toLowerCase()) {
  window.alert('«Верно!»');
} else {
  window.alert('«Не знаете? ECMAScript!»');
}
 3)
 const num = Number(window.prompt(''));

 if (num > 0) {
  window.alert(1);
} else if (num < 0) {
  window.alert(-1);
} else {
  window.alert(0);
}

 4)
 let result = a + b < 4 ? 'мало':'много'

 5)

 let message =
 login === 'Сотрудник'
 ? 'Привет'
 : login === 'Директор'
 ? 'Здравствуйте'
 : login === ''
 ? 'Нет логина'
 : '';

 **/

/**
 2.11 logical operators

 1) 2
 2) 1, 2
 3) null
 4) 1
 5) 3
 6)
 if (age >= 14 && 90 <= age)
 7)
 if (!(age >= 14 && 90 <= age))
 if (age < 14 || 90 > age)
 8) 1 and 3
 9)
 const auth = window.prompt('Login')?.toLowerCase();

 if (auth === 'admin') {
  const pass = window.prompt('Password')?.toLowerCase();

  if (pass === 'я главный') {
    window.alert('«Здравствуйте!»');
  } else if (!pass) {
    window.alert('Canceled');
  } else {
    window.alert('«Неверный пароль»');
  }
} else if (!auth) {
  window.alert('Canceled');
} else {
  window.alert('«Я вас не знаю»');
}
 **/

/**
 2.13 cycles
1) 1

 2)
 1,2,3,4
 1,2,3,4,5

 3) 1,2,3,4 in both variants

 4)
 for (let i = 2; i <= 10; i++) {
  if (!(i % 2)) {
    console.log(i);
  }
}
 5)
 let i = 0;

 while (i < 3) {
  alert(`number ${i}!`);
  i++;
}

 6)

 let num = null;

 do {
  num = Number(window.prompt('num'));
} while (num <= 100 && num);
7)
 let num = 10;

 nextPrime: for (let i = 2; i <= num; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      continue nextPrime;
    }
  }

  alert(i);
}

 **/

/**
 2.14 switch
 1)
 let browser;

 if (browser === 'Edge') {
  alert("You've got the Edge!");
} else if (
 browser === 'Chrome' ||
 browser === 'Firefox' ||
 browser === 'Safari' ||
 browser === 'Opera'
 ) {
  alert('Okay we support these browsers too');
} else {
  alert('We hope that this page looks ok!');
}

 2)

 const number = +prompt('Введите число между 0 и 3', '');

 switch (number) {
  case 0:
    alert('Вы ввели число 0');
    break;

  case 1:
    alert('Вы ввели число 1');
    break;

  case 2:

  case 3:
    alert('Вы ввели число 2, а может и 3');
    break;
}

 **/

/**
 2.15 function
 1) both variant equal

 2)
 const checkAge = age =>  age > 18 ? true : confirm('Родители разрешили?');
 const checkAge = age =>  (age > 18) || confirm('Родители разрешили?');

 3)
 const min = (num1,num2) => num1 > num2 ? num 2 : num1

 4)
 const powNumber = (num, pow) => {
  let powNum = num;

  while (pow > 1) {
    powNum *= num;
    pow--;
  }

  return powNum;
};

 const num = Number(window.prompt('Number'));
 const pow = Number(window.prompt('Pow'));

 if (num > 1) {
  window.alert(powNumber(num, pow));
} else {
  window.alert(`${num} not a valid number!`);
}

 **/

/**
 2.17 arrow function
 1)

 const ask = (question, yes, no) => (confirm(question) ? yes() : no());

 ask(
 'Вы согласны?',
 () => alert('Вы согласились.'),
 () => alert('Вы отменили выполнение.')
 );

 **/
