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






