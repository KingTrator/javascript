let v = function(x){
    return x * 2;
}

console.log(v(5));

function outra() {
    return function(x) {
        return x * 2;  
    }
}

let variable = outra();
console.log(variable(4));  
