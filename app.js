const calculator = {
    add: function (a, b) {
        console.log(a + b);
    },
    minus: function (a, b) {
        console.log(a - b);
    },
    divide: function (a, b) {
        console.log(a / b);
    },
    times: function (a, b) {
        console.log(a*b);
    },
    power: function (a, b) {
        console.log(a**b);
    },
};


calculator.add(1,2);
calculator.minus(1,2);
calculator.divide(1,2);
calculator.times(3,2);
calculator.power(2,3);



const age = 96;
function calculateKrAge(ageOfForeigner) {
    return ageOfForeigner +2;
};

const krAge = calculateKrAge(age);

console.log(krAge);