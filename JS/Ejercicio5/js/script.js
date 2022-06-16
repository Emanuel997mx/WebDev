//funcion constructora de la "clase" circulo
function Circulo(radio){
    this.radio = radio;
}

//funcion miembro de la "clase" circulo
Circulo.prototype.getArea = 
function(){
    return Math.PI*Math.pow(this.radio, 2);
};

/*
codigo invalido
var c0 = Circulo(8);
//no se puede llamar a esta funcion ya que no se uso new
console.log(C0.getArea());
*/

var C = new Circulo(10);
console.log(C.getArea());

var C2 = new Circulo(20);
console.log(C2);

var C3 = {
    radio:10,
    getArea: function() {
        var self = this;
        console.log(this);
        var radio2 = function(){
            self.radio = 20;
        }
        radio2();
        console.log(this.radio);

        return Math.PI*Math.pow(this.radio,2);
    }
};

console.log(C2.getArea()); //las funciones son objetos