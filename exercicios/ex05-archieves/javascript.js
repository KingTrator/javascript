function enviar() {
    var number_user = document.querySelector('input#numero');
    var tab = document.getElementById('seltab');
    tab.innerHTML= '';
    if (number_user.value.length == 0) {
        window.alert('Digite um número!!')
    } else {
        var n = number_user.value;
    }
    if (number_user.value.length > 0 && number_user.value.length < 2 || number_user.value.length > 0 && number_user.value == 10 ) {
        for(var c = 1; c < 11; c++) {
            var opcao = document.createElement("option");
            opcao.text = `${n} x ${c} = ${c*n}`
            tab.appendChild(opcao)
        }
    }
}

// OBS: "option" é uma tag em HTML5.