"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sumar(valor, valor2) {
    return valor + valor2;
}
console.log(sumar(2, 3));
function imprimir() {
    console.log(sumar(2, 3));
}
imprimir();
const sumarFlecha = (valor1, valor2) => {
    return valor1 + valor2;
};
console.log(sumarFlecha(5, 3));
const dividir = function (a, b) {
    return a / b;
};
console.log(dividir(10, 2));
let message = "ERRROR 404";
const throwError = (message) => {
    if (!message) {
        throw new Error(message);
    }
    return message;
};
console.log(throwError('Error fatal'));
const throwError2 = (message) => {
    throw new Error(message);
};
let sumar2;
sumar2 = sumar;
let sumar3;
sumar3 = sumar;
console.log(sumar2(10, 3));
console.log(sumar3(10, 3));
//# sourceMappingURL=function.js.map