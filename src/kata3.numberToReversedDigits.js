const numberToReversedDigits = (number) => {

    return number.toString().split('').reverse().map(element => Number(element));
};

module.exports = numberToReversedDigits;
