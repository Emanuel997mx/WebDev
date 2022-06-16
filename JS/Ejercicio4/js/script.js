//creacion de objetos
var empresa = new Object();

empresa.nombre = "facebook";
empresa.ceo = new Object();
empresa.ceo.nombre= "Emanuel"
empresa.ceo.apellido= "Gonzalez Francisco"

console.log(empresa);
console.table(empresa);

console.log(empresa.ceo.nombre);
console.log(empresa["nombre"]);

var attr = "No de usuarios";
empresa[attr]= 100000000000;

console.log(empresa[attr]);
console.log(empresa["No de usuarios"]);

var facebook ={
    nombre: "Facebook",
    ceo:{
        nombre: "Emanuel",
        apellido: "Gonzalez"
    },
    "No de usuario":10000000000,
};

console.log(facebook)