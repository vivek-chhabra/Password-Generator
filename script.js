const passContainer = document.querySelector('.pass')
const copyBtn = document.querySelector('.password i')
const submit = document.querySelector('.btn')
let length = document.querySelector('.length input')
const wantUppercase = document.querySelector('.uppercase input')
const wantLowercase = document.querySelector('.lowercase input')
const wantNumbers = document.querySelector('.numbers input')
const wantSymbol = document.querySelector('.symbol input')
const container = document.querySelector('.container')

// let passwordArr = [
//     ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
//     ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
//     ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
//     ['!', '@', '#', '$', '%', '&', '*', '?']
// ]

// functions ===========================================================================================================================

// random number generator within a range
function randomNum(min, max) {
    let random = Math.floor(Math.random() * ((max + 1) - min) + min)
    return random;
}

function getLowerCase() {
    let random = randomNum(97, 122)
    return String.fromCharCode(random)
}

function getUpperCase() {
    let random = randomNum(65, 90)
    return String.fromCharCode(random)
}

function getNumber() {
    let random = randomNum(0, 9)
    return `${random}`;
}

function getSymbol() {
    let random = randomNum(33, 43)
    return String.fromCharCode(random)
}

const functionArr = [
    getUpperCase,
    getLowerCase,
    getNumber,
    getSymbol
]

// generating password
function generatePassword(array) {
    let newArr = [];
    let position = 0;
    let password = '';
    for (let i = 0; i < 4; i++) {
        if (array[i] == true) {
            newArr[position] = i;
            position++;
        }
    }
    for (let i = 0; i < array[4]; i++) {
        if (array[4] <= 30) {
            let random = randomNum(0, (newArr.length - 1))
            password += functionArr[newArr[random]]();
        } else {
            passContainer.innerHTML = 'Should not exceed limit 22'
            return;
        }
    }
    console.log(password)
    passContainer.innerHTML = password;
}

// =====================================================================================================================================

submit.addEventListener('click', () => {
    let size = parseInt(length.value)
    let arr = [wantUppercase.checked, wantLowercase.checked, wantNumbers.checked, wantSymbol.checked, size]
    let password = generatePassword(arr);
})

container.addEventListener('keydown', (e) => {
    if (e.key == 'Enter') {
        let size = parseInt(length.value)
        let arr = [wantUppercase.checked, wantLowercase.checked, wantNumbers.checked, wantSymbol.checked, size]
        let password = generatePassword(arr);
    }
})



