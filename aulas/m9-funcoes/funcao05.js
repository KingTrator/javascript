// Função recursiva

function fatorial(n) {
    if (n === 1) { // Caso básico 
        return 1
    } else {
        return n * fatorial(n-1) // Caso recursivo
    }
}

console.log(fatorial(4))

// Funcionamento:
// Uma função recurisva possui a seguinte estrutura básica:
// function função_recurisva(parâmetros){
//    if condição_de_parada {
//        return algo
//    } else {
//        Código aqui
//        return operação + função_recursiva(parâmetros_modificados)
//    }
//}
// Ou seja, há um "if" para a condição de parada
// E um else no qual se repete as chamadas até que "if" seja atendido.
// Para códigos simples como este, é uma má prática, pois leva a overheading de chamadas.