function parImp(number) {
    if (number % 2 === 0) {
        return 'Par!'
    } else {
        return 'Ímpar!'
    }
}

let n = parImp(7)
let m = parImp(8)
console.log(n, m)
