let array = []; 

function analisador(){
    let numero = document.querySelector("#button");
    let res = document.querySelector("#res");
    let numValue = Number(numero.value);  
    res.innerHTML = ''
    if(numValue >= 1 && numValue <= 100){
        array.push(numValue);
        let option = document.createElement("option");
        option.text = `O valor ${array[array.length - 1]} foi adicionado`
        res.appendChild(option);
    } else {
        window.alert('Digite um valor válido!');
    }
}

function finalizar(){
    let result = document.querySelector("#extra");
    result.innerHTML = ''
    let resultOrdenado = array.sort((a, b) => a - b);
    if(array.length == 0){
        window.alert('Você não digitou nenhum valor válido.')
    } else {     
        let soma = 0
        for(let c = 0; c < array.length; c++){
            soma = soma + array[c]
        }
        for(let c = 0; c < 5; c++){  
            let option = document.createElement("option");
            if (c === 0){
                option.text = `Ao todo, temos ${array.length} números cadastrados.`
            } else if (c === 1) {
                option.text = `O maior valor foi ${resultOrdenado[array.length - 1]}`
            } else if (c === 2) {
                option.text = `O menor valor informado foi ${resultOrdenado[0]}`
            } else if (c === 3) {
                option.text = `A soma de todos os valores enviados é: ${soma}`
            } else if (c === 4) {                    
                option.text = `A média dos valores digitados é ${(soma/array.length).toFixed(2)}`
            }
            result.appendChild(option);
        }
    }
}
