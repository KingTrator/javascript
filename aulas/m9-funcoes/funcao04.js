function fat(x) {
    let fatorial = 1;
    for(let c = x; c > 1; c --) {
        fatorial *= c;
    }
    return fatorial
}
 console.log(fat(19))
