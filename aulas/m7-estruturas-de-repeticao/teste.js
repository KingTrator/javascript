/*
// ESTRUTURA DE REPETIÇÃO while (equivale a while True)
var c = 1
while (c <= 5) {
    console.log(c)
    c++ // Equivale a c += 1 (não existe c++2, etc.)
}

// -------------------
// ESTRUTURA DE REPETIÇÃO do while (equivale a um while not, mas, efetivamente, é original do Javascript)
var c = 1
do {
    console.log(c)
    c++
} while (c <= 10)
*/ 
// -------------------
// ESTRUTURA DE REPETIÇÃO for (similar a for do Python, mas o incremento já vem embutido)
console.log('Vai começar...')
for(var c = 1;c <=4;c++) {
    console.log(c)
}
