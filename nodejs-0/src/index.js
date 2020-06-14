'use strict'
const fibonacci = () => {
    const lista = [0,1];
    while (true) {
        let num = lista[lista.length -2]+lista[lista.length -1];
        if( num< 350){
            lista.push(num);            
        }
        else{
            break;
        }
    }
    return lista;
}

const isFibonnaci = (num) => fibonacci().includes(num)

module.exports = {
    fibonacci,
    isFibonnaci
}
