/**
    5.1 wrapper
    1) no
 **/

/**
 5.1 numbers
 1)

 const num1 = Number(window.prompt('num1'));
 const num2 = Number(window.prompt('num2'));

 window.alert(num1 + num2);
 
 2)
 const trueNumber = trueNum => {
  let num = null;

  do {
    num = +window.prompt('insert num', trueNum);
  } while (!isFinite(num));

  if (num === null) {
    return null;
  }

  return num;
};

 trueNumber(42);

 3) 4)
 const randomNum = (min, max) => {
  return Math.floor(min + Math.random() * (max + 1 - min));
};

 **/

/**
 5.2 string
 1)
 const ucFirst = str => str[0].toUpperCase() + str.slice(1);

 2)

 const checkSpam = str => {
  const spamWords = ['viagra', 'xxx'];

  return spamWords.some(item => str.toLowerCase().includes(item));
};

 3)
 const truncate = (str, len) => (str.length > len ? `${str.slice(0, len - 1)}...` : str);

 4)
 const extractCurrencyValue = (str) => Number(str.slice(1))
 **/

/**
 5.3 array
 1) 4

 2)
 const styles = ['Jazz', 'Bluez'];

 styles.push('Rock & Roll');
 styles[Math.round(styles.length / 2) - 1] = 'Classic';
 console.log(styles.shift());
 styles.unshift('Rap', 'Reggie');

 3)

 const sumInput = () => {
  const arr = [];

  while (true) {
    let value = prompt('Введите число');

    if (value === null || value === '' || !isFinite(Number(value))) {
      break;
    }

    arr.push(Number(value));
  }

  return arr.reduce((acc, item) => {
    acc += item;

    return acc;
  }, 0);

  4)

  const getMaxSubSum = arr => {
  let max = 0;

  arr.reduce((acc, item) => {
    acc += item;
    max = Math.max(acc, max);

    if (acc < 0) {
      acc = 0;
    }

    return acc;
  }, 0);

  return max;
};
};

**/

/**
 5.4 array methods
 1)

 const camelize = str => {
  return str
    .split('-')
    .map((item, index) => (index > 0 ? `${item[0].toUpperCase()}${item.slice(1)}` : item))
    .join('');
};

 2)
 const filterRange = (arr, ...args) => arr.filter(item => args.includes(item));

 3)
 const filterRangeInPlace = (arr, num1, num2) => {
  return arr.forEach((item, index) => {
    if (item <= num1 || item >= num2) {
      arr.splice(index, 1);
    }
  });
};

 4)
 arr.sort((a, b) => b - a);

 5)
 const copySorted = arr => [...arr].sort();

 6)
 function Calculator() {
  this.signs = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
  };

  this.calculate = args => {
    const [num, sign, num2] = args.split(' ');

    return this.signs[sign](Number(num), Number(num2));
  };

  this.addMethod = (sign, fn) => {
    if (!(sign in this.signs)) {
      this.signs = {
        ...this.signs,
        [sign]: fn,
      };
    }
  };
}

 7)
 let names = users.map(item => item.name);

 8)
 let usersMapped = users.reduce((acc, item) => {
  const { id, name, surname } = item;

  acc.push({
    id,
    fullName: `${name} ${surname}`,
  });

  return acc;
}, []);

 9)
 const sortByAge = arr => arr.sort((a, b) => a.age - b.age)

 10)
 const shuffle = arr => arr.sort(() => Math.random() - 0.5);

 11)
 const getAverageAge = arr => arr.reduce((acc, item) => (acc += item.age), 0) / arr.length;

 12)

 const unique = arr => {
  return arr.reduce((acc, item) => {
    if (!acc.includes(item)) {
      acc.push(item);
    }

    return acc;
  }, []);
};

 13
 const groupById = arr => arr.reduce((acc, item) => (acc[item.id] = item && acc), {});

 **/

/**
 5.6 map && set
 1)
 const unique = val => [...new Set(val)];

 2)
 const aclean = arr => {
  const map = new Map();

  arr.forEach(item => {
    const sortItem = item.toLowerCase().split('').sort().join('');

    map.set(item, sortItem);
  });

  return [...new Set(map.values())];
};
 **/

/**
 5.8 object keys || values || entries
 1)
 const sumSalaries = salaries => {
  let sum = 0;

  for (let values of Object.values(salaries)) {
    sum += values;
  }

  return sum;
};

 2)
 const count = obj => Object.keys(obj).length;

 **/

/**
 5.9 Destructuring
 1)
 const { name, years: age, isAdmin = false } = user;

 2)
 const topSalary = obj => {
  let num = -Infinity;
  let name = '';

  for (let [keys, values] of Object.entries(obj)) {
    if (values > num) {
      num = values;
      name = keys;
    }
  }

  return name;
};
 **/
