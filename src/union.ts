// Tipos de datos Union string | number | boolean | any 

// function padLeft(value: string, padding: any)  
//operador | que representa un or porque antes any significaba cualquier cosa 
type StringOrNumber = string | number; // se crea un tipo de dato que es un string o un number
// se crea una variable que es un string o un number

function padLeft(value: string, padding: StringOrNumber) { // se le asigna el tipo de dato StringOrNumber a la variable padding

    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error(`Expected string or number, got '${padding}'.`);
}
console.log(padLeft("Hello world", 20));
console.log(padLeft("Hello world", 5));

