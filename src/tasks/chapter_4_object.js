/**
    4.1 object
1)
 const obj = {};

 obj.name = 'John';
 obj.surname = 'Smith';
 obj.name = 'Pete';
 delete obj.name;

 2)
 const isEmpty = obj => {
  for (let keys in obj) {
    if (keys) {
      return false;
    }
  }

  return true;
};

3) yes

 4)
 const sum = obj => {
  return Object.values(obj).reduce((acc, item) => {
    acc += item;

    return acc;
  }, 0);
};

 5)
 const multiplyNumeric = obj => {
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] *= 2;
    }
  }

  return obj;
};
 **/

/**
 4.4 this
 2)
 const calculator = {
  read() {
    this.num1 = Number(window.prompt('Number1'));
    this.num2 = Number(window.prompt('Number2'));
  },
  sum() {
    if (this?.num1 && this?.num2) {
      return this?.num1 + this?.num2;
    }
  },
  mul() {
    if (this?.num1 && this?.num2) {
      return this?.num1 * this?.num2;
    }
  },
};

3)

 let ladder = {
  step: 0,
  up() {
    this.step++;

    return this;
  },
  down() {
    this.step--;

    return this;
  },
  showStep: function () {
    alert(this.step);

    return this;
  },
};
 **/

/**
 4.5 new
 1) if create outside of functions obj, then hand one this object in both function body, and return
2)
 function Calculator() {
  this.read = () => {
    this.num1 = Number(window.prompt('Number1'));
    this.num2 = Number(window.prompt('Number2'));
  };

  this.sum = () => {
    if (this?.num1 && this?.num2) {
      return this?.num1 + this?.num2;
    }
  };

  this.mul = () => {
    if (this?.num1 && this?.num2) {
      return this?.num1 * this?.num2;
    }
  };
}
3)
 function Accumulator(start = 0) {
  this.value = start;

  this.read = () => {
    this.value += Number(window.prompt('Number1'));
  };
}

 **/
