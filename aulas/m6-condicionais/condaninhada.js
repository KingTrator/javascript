var age = 39
/* if (age < 16) {
    console.log(`You don't vote.`)
} else {
    if (16 <= age && age <= 18) { // A parte 16 <= é redundante, mas deixei para lembrar do &&
    console.log('You can vote.')
    } else {
        console.log('You must vote.')
    }
}
*/
// Refazendo o código, mais simples e direto:
if (age < 16) {
    console.log(`With ${age} you don't vote.`)
} else if /*Simplificação */ (age < 18) {
    console.log(`With ${age} you can vote.`)
} else if (age >= 65) {
    console.log(`With ${age} you can vote, but you're not on obligation anymore.`)
} else {
    console.log(`With ${age} you must vote.`)
}

// Importante: Você pode selecionar alguma parte do código para que o Node.Js execute apenas aquele trecho em vez de todo o código.