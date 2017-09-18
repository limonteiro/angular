var minhaVar = 'minha variavel';

function minhaFunc(x, y) {
    return x + y;
}

//ES 6 ou ES 2015
let num = 2; 
const PI = 3.14;

//Arrow function
var numeros = [1, 2, 3];
numeros.map(function(valor){
    return valor * 2;
});
numeros.map(valor => valor * 2); //ES 2015

/* 
Transpilar o ES 6 para o Javascript puro.

*/

class Matematica {
    soma(x, y){
        return x + y;
    }
}

//O typescript permite a tipagem de variáveis
var n1: string = 'sdsds';
// n1 = 4;
