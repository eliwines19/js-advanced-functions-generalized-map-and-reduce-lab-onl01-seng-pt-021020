// Add your functions here
function map(array, func) {
    let newArray = [];
    array.forEach(element => {
        newArray.push(func(element))
    })
    return newArray
}

function reduce(array, func, start) {
    let a = (!!start) ? start : array[0]
    let b = (!!start) ? 0 : 1

    for (; b < array.length; b++) {
        a = func(array[b], a)
    }
    return a
}