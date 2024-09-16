const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

function removeStringVowels(randomString) {
    return randomString
        .split('')
        .filter(char => !vowels.includes(char))
        .join('')
}

const result = removeStringVowels('Hello world')


console.log('------')
console.log('Result: ', result)
console.log('------')