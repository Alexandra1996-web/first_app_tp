function imprimir(
    a: number,
    b: number, 
    mostrar: (value: number) => void // le decimos que la funcion mostrar va a recibir un numero y no va a retornar nada

): void {
    let resultado = a + b; // le decimos que mostrar es la suma de a mas b 
    mostrar(resultado); // le decimos que mostrar es la suma de a mas b 
}

imprimir(2,2,(x) => { console.log(x); }); // 4

