/* Para escrevar na tela em um arquivo Js, o processo é diferente, usamos console.log() 
console.log('Olá, Mundo!')
Para ver o processo em execução, pressione a tecla f8 */

var vel = Number(50) /* Não é preciso explicitar Number(), mas faz bem */
console.log(`A velocidade do seu carro é ${vel}Km/h`)
var limite = vel - 60

if (vel > 60) {
    console.log(`Você ultrapassou a velocidade permitida (60Km/h) em ${limite}Km/h.`)
}

else {
    console.log('Você está no limite permitido de velocidade.')
}
