let valores = [8, 1, 7, 4, 2, 9]

for(pos=0;pos < valores.length; p++){
    console.log(`A posição ${pos} tem valor ${valores[pos]}`)
}
// Alternatively:
for(let pos in valores){
    console.log(`A posição ${pos} tem valor ${valores[pos]}`)
}

// Looking for specific values
valores.indexOf(7) // returns the position
valores.indexOf(9) // returns -1 (not found)