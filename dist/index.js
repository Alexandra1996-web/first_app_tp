"use strict";
var persona = {
    nombre: 'Juan',
    apellido: 'Perez',
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
let hobbies = ['leer', 'correr', 'dormir'];
console.log(hobbies[0]);
console.log(typeof hobbies);
let lista = ['leer', 'correr', 'dormir', 2, true];
console.log(lista[0]);
let automovil = ['toyota', 2019];
console.log(automovil[0]);
var Color;
(function (Color) {
    Color[Color["Rojo"] = 0] = "Rojo";
    Color[Color["Verde"] = 1] = "Verde";
    Color[Color["Azul"] = 2] = "Azul";
    Color[Color["Amarillo"] = 3] = "Amarillo";
})(Color || (Color = {}));
;
console.log(Color[0]);
let colorFavorito = Color.Rojo;
console.log(`Mi color favorito es ${colorFavorito}`);
let objetos = ["hola", 2, true, { nombre: "Juan", apellido: "Perez" }];
console.log(objetos[3].nombre);
let tiempo;
tiempo = ['Pasado', 'Presente', 'Futuro'];
console.log(tiempo[1]);
//# sourceMappingURL=index.js.map