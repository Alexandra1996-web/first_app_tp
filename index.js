/*
function sumar(valor1: number, valor2: number) {
    return valor1 + valor2;
}
console.log(sumar(2, 3)); 8 */
// Objetos definir y sus atributos 
// lo mejor siempre es ponerle el tipo a cada 
// atributo del objeto 
// doble llave de un objeto es para especificar 
// el tipo de dato que va a tener cada atributo 
var persona 
/* {

    nombre: string;
    apellido: string;
    edad: number;
    curso: Array<string>;
    direccion: {
        calle: string;
        comuna: number;
    };
} */
= {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 30,
    cursos: ['Angular', 'TypeScript'],
    direccion: {
        calle: "juan perez con enrique rodo",
        comuna: 2323
    }
};
console.log(persona);
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.edad);
// Array de objetos buscar
// en google: typescript array of objects
// https://www.typescriptlang.org/docs/handbook/advanced-types.html
