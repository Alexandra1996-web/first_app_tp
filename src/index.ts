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
    apellido:'Perez',
    edad: 30,
    cursos: ['Angular', 'TypeScript'],
    direccion: { 
        calle: "juan perez con enrique rodo",
        comuna: 2323
},
};
console.log(persona);
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.edad);

let hobbies: any[] = ['leer', 'correr', 'dormir'];
console.log(hobbies[0]); 
console.log(typeof hobbies);

// hobbies: string es que es solo del tipo string el arreglo 
// hobbies: any[] es que es cualquier tipo de dato el arreglo

// Array de objetos buscar
// en google: typescript array of objects
// La diferencia de las tuplas con las listas son que las tuplas son de un tipo de dato que se especifica 
// y las listas son de cualquier tipo de dato 
// Una tupla en TypeScript es un array de elementos que están tipados. https://lineadecodigo.com/typescript/tupla-en-typescript/  

// ejemplo lista 
let lista: any[] = ['leer', 'correr', 'dormir', 2, true];
console.log(lista[0]);

// ejemplo tupla 

let automovil: [string, number] = ['toyota', 2019]; 
console.log(automovil[0]); 

// Enumeraciones --> no existe en JavaScript pero si existe en TypeScript. Nos sirve para definir valores que son fijos en un proyecto 


// es una lista de valores que se pueden asignar a una variable, utiliza como parte de su sintaxis el enum y las llaves

enum Color {Rojo, Verde, Azul, Amarillo}; // se puede asignar un valor a cada uno de los elementos de la enumeracion 


console.log(Color[0]);  // 0 es el indice de Rojo 

let colorFavorito: Color = Color.Rojo;

console.log(`Mi color favorito es ${colorFavorito}`);

//Any son los valores que no se pueden definir, no se sabe que tipo de dato es el que se va a recibir, no es muy recomendado porque ese no es el objetivo de TypeScript 


let objetos: any = ["hola", 2, true, {nombre: "Juan", apellido: "Perez"}];
console.log(objetos[3].nombre);


let tiempo: [string, string, string];
tiempo = ['Pasado','Presente','Futuro'];
console.log(tiempo[1]); // Presente




