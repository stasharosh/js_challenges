function squareEachDigit(randomDigits) {
    const result = randomDigits
        .toString()
        .split('')
        .map((digit) => Number(digit ** 2))
        .join('')


    return Number(result)
}



const result = squareEachDigit(3124);


console.log('------')
console.log('Result: ', result)
console.log('------')