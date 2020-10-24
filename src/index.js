module.exports = function toReadable (number) {
   const numbersArr = ['', 'one', 'two', 'three', 'four', 'five',
        'six', 'seven', 'eight', 'nine', 'ten',
        'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
        'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
    const numbersMoreThanTwenty = ['twenty', 'thirty', 'forty', 'fifty', 'sixty',
        'seventy', 'eighty', 'ninety'];

    if (number === 0) {
        return 'zero';
    }

    if (number >= 0 && number <= 20) {

        return numbersArr[number]
    } else if (number > 20 && number < 100) {
        if (String(number)[1] === '0') {
            return `${numbersMoreThanTwenty[Math.trunc(number / 10 - 2)]}`
        } else {
            return `${numbersMoreThanTwenty[Math.trunc(number / 10 - 2)]} ${numbersArr[number % 10]}`;
        }
    } else if (number >= 100) {
        if (number % 100 === 0) {
            return `${numbersArr[number / 100]} hundred`;
        } else if (number / 10 === 0) {
            return `${numbersArr[Math.trunc(number / 100)]} hundred ${numbersMoreThanTwenty[(Math.trunc(number % 100) / 10) - 2]}`;
        } else if (number % 100 <= 19) {
            return `${numbersArr[Math.trunc(number / 100)]} hundred ${numbersArr[(number % 100)]}`;
        } else {
            if (number % 10 === 0) {
                return `${numbersArr[Math.trunc(number / 100)]} hundred ${numbersMoreThanTwenty[Math.trunc((number % 100) / 10) - 2]}`;
            } else {
                return `${numbersArr[Math.trunc(number / 100)]} hundred ${numbersMoreThanTwenty[Math.trunc((number % 100) / 10) - 2]} ${numbersArr[number % 10]}`;
            }
        }
    }
}
