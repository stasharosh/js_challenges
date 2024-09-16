function reverseString(randomString) {
    return randomString.split('').reverse().join('')
}


const result = reverseString('World')

console.log('RESULT-----', result)