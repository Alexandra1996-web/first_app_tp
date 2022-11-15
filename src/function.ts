import { SignatureKind } from "typescript";

function sumar(valor:number, valor2:number):number
// function sumar(valor:number, valor2:number):string 
// function sumar(valor:number, valor2:number):boolean nosotros podemos indicar mediante los dos puntos el tipo de dato que va a retornar la funcion 

{
    return valor + valor2;
} 

console.log(sumar(2, 3)); 

// si no tenemos ningun retorno en la funcion se retorna un tipo void 

function imprimir(): void { // void es lo mismo que undefined basicamente, pero con void typescript identifica que no debe de retornar un valor 
    console.log(sumar(2, 3)); 
}

imprimir()


const sumarFlecha = (valor1:number, valor2:number):number => { // funcion flecha 
    return valor1 + valor2;
} 
console.log(sumarFlecha(5, 3)); 


// anotacion de tipos o inferencia de tipos en typescript 

// en una funcion anonima hacer lo siguiente:

const dividir = function (a:number, b:number): number {
    return a / b;
};
console.log(dividir(10, 2));  // 5 

// Never en funciones metodo para no retornar nada

let message = "ERRROR 404";
const throwError = (message:string) => { // any es cualquier tipo de dato
    if (!message) {
        throw new Error(message);
    }
    return message; 
};
console.log(throwError('Error fatal')); // Error: Error fatal 

// COMO UTILIZAR NEVER en la funcion anterior 

const throwError2 = (message:string):never => { 
    throw new Error(message); 
}; 


// asignacion en mi variable de una funcion la igual que JavaScript

let sumar2: Function; // asignamos el tipo de dato Function a la variable sumar2 especificando que tiene que recibir una funcion 
sumar2 = sumar;
let sumar3: (a: number, b:number ) => number; // asignamos el tipo de dato Function a la variable sumar2 especificando que tiene que recibir una funcion 
sumar3 = sumar; // asignamos la funcion sumar a la variable sumar3, no se le puede asginar imprimir porque esa funcion tiene un void 

console.log(sumar2(10, 3)); // 13
console.log(sumar3(10, 3)); // 13
// para ser mas especificos ahora podemos decirle el tipo de dato que va a recibir la funcion 


// Funciones callbacks, funciones que se ejecutan dentro de otras funciones o sea se envian por parametros, esta es otra de las cosas interesantes que nos permite hacer typeScript 











