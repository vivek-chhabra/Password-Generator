const passContainer = document.querySelector('.pass')
const submit = document.querySelector('.btn')
const copy = document.querySelector('.password i')
let length = document.querySelector('.length input')
const wantUppercase = document.querySelector('.uppercase input')
const wantLowercase = document.querySelector('.lowercase input')
const wantNumbers = document.querySelector('.numbers input')
const wantSymbol = document.querySelector('.symbol input')
const container = document.querySelector('.container')

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

// =====================================================================================================================================

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

    // making the new array of true conditions
    for (let i = 0; i < 4; i++) {
        if (array[i] == true) {
            newArr[position] = i;
            position++;
        }
    }

    // making the password by using length
    for (let i = 0; i < array[4]; i++) {
        if (array[4] <= 50) {
            let random = randomNum(0, (newArr.length - 1))
            password += functionArr[newArr[random]]();
        } else {
            passContainer.value = 'Password length Should not exceed 50'
            return;
        }
    }
    passContainer.value = password;
}


submit.addEventListener('click', () => {
    try {
        passContainer.value = '';
    } catch (err) {
        console.log(err)
    }
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

// to copy the code
let copyText = document.querySelector('.copy')
copy.addEventListener('click', () => {
    passContainer.select();
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    copyText.style = `opacity: 100`
    setTimeout(() => {
        copyText.style = `opacity: 0`
    }, 1000);
})




