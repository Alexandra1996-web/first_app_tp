// Tipos de datos Union string | number | boolean | any 
// se crea una variable que es un string o un number
function padLeft(value, padding) {
    {
        if (typeof padding === "number") {
            return Array(padding + 1).join(" ") + value;
        }
        if (typeof padding === "string") {
            return padding + value;
        }
        throw new Error("Expected string or number, got '".concat(padding, "'."));
    }
    console.log(padLeft("Hello world", 20)); // returns "    Hello world" 
    console.log(padLeft("Hello world", "Hola"));
} // returns "    Hello world" 
