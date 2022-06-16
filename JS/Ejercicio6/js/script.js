//las funciones son objetos
function mul(x, y) {
    return x * y;    
}

mul.version="v.1.0.0";
console.log(mul.version);

//fabrica de funciones
function makeMul(num){
    var miFuncion = function(x){
        return num * x;
    }
    return miFuncion;
}

var mul3 = makeMul(3);
console.log(mul3(5));

//las funciones pueden ser argumento de otras funciones
function hacerOperacion(x, operacion){
    return operacion(x);
}

var res = hacerOperacion(5, mul3);
console.log(res);

var duplicar = makeMul(2);
res = hacerOperacion(100, duplicar);
console.log(res);
