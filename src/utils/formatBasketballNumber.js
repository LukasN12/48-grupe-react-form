 export function formatBasketballNumber(number, minSize) {
    let formatedNumber = (number < 10 ? '0' : '') + number;

    for (let i = formatedNumber.length; i < minSize; i++) {
            formatedNumber = '0' + formatedNumber;
    }

    return formatedNumber;
}


