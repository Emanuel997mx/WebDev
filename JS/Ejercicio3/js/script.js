//concatenacion de cadenas

var str="Hola";
//str +=" mundo";
str = str + " Mundo";

console.log("¡"+str+"!");

//operadores matemáticos
console.log((5+4)/2);
console.log(6-2);
console.log(4%2);
console.log(4*1000);
console.log(undefined/5);

function test(a){
    console.log(a/5);
}
test();//llamada a funcion indefinida
test(10);//esta es la llamada a una funcion definida

//operadores relacionales
var x = 4, y = 4;
if ( x == y ){
    console.log("x=4 es igual a y=4");
}

x="4"//java script puede modificar el tipo de dato en cualquier momento de la ejecución

if (x == y){
    console.log("x='4' es igual a y=4");
}

//operador estrictamente igual a 
if (x === y){
    console.log("x='4' es igual a y=4");
}else{
    console.log("estrictamente: x='4' NO es IGUAL a y=4");
}

x=5;

if(x != y){
    console.log("x=5 es DISTINTO de y=4");
}

if(x > y){
    console.log("x=5 es mayor que y=4");
}

x=3
if(x < y){
    console.log("x=3 es menor que y=4");
}

x=10;
if(x >= y){
    console.log("x=10 es mayor o igual que y=4");
}

x=3;
if(x <= y){
    console.log("x=3 es menor o igual que y=4")
}

/**********************************************
 **********************************************/

console.log(true||false);
console.log(true||true);
console.log(false||false);

console.log(true&&false);
console.log(true&&true);
console.log(false&&false);

if(false || null || undefined || " " || 0 || NaN){
    console.log("Este codigo siempre se ejecuta");
}else{
    console.log("Todo es falso");
}

if(true && "hello" && 1 && -1 && "false"){
    console.log("todo es verdadero")
}

var sumf= 0;
for(var i=0; i<=100; i++){
    console.log(i);
    sumf+=i;
}
console.log("la suma de los primeros 100 números es: "+sumf);

var sumw=0;
var cont=1;
while(cont<101){
    sumw+=cont;
    cont++;
}
console.log("la suma de los primeros 100 números con while lopp es: "+sumw);

function test2(arg1){
    arg1 = arg1 ||"predeterminado";
    console.log("valor: "+arg1);
}

test2();
test2("hola");