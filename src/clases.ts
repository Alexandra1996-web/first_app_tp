// Clases en TypeScript 
/* Definicion de un conjunto de objetos similares que consta de metodos y datos que se resumen la caracteristica principal de un objeto */ 

class Vehicule {
    constructor ( 
    protected brandName: string, // atributo de la clase 
    // readonly hace que el atributo no se pueda modificar y es solo lectura, solo existe en typescript no javascript 

    private readonly model: string, // atributo de la clase 
    private color: string, // atributo de la clase
    ) {}
    // usar un constructor que inicialice al enviar un parametro a brandName 
    /*  

    constructor(b: string, model: string, color: string) { 
        this.brandName = b;// constructor de la clase 
        this.model = model;
        this.color = color;
    } 
// crear metodos en el objeto 
*/ 

    drive(){
        console.log(
            `conduciendo un ${this.brandName} modelo: ${this.model} color: ${this.color}`); 
            
            // this hace referencia a la instancia de la clase 
        
    }
}

//new es para llamar a nuestra clase 


/* 
console.log(vehicule); // imprime el objeto */ 


// console.log(vehicule.brandName); // Toyota 

/* 
let motorcycle = {
    brandName: 'Honda',
    drive: vehicule.drive

}; 
console.log(motorcycle.drive()); // undefined porque no esta inicializado el objeto 

// https://www.c-sharpcorner.com/UploadFile/5089e0/how-to-use-this-keyword-in-typescript/#:~:text=The%20%22this%22%20keyword%20always%20points,type%20of%20the%20containing%20class. 

*/ 

// Herencia en TypeScript, extender es que se lo lleva a la clase hija 


class Car extends Vehicule{

    drive(): void {
        console.log(`Estoy en un auto ${this.brandName}`);
    }
}

// se puede heredar lso atributos y otros, y sobre escribir 


const vehicule = new Car('Toyota', "2009", "red"); // instanciamos la clase Vehicule y le pasamos el parametro Toyota. Inicializamos el objeto en memoria 

vehicule.drive(); // imprime el metodo drive  

// diferenctes tipos de visibilidad en typescript 
// public: se puede acceder desde cualquier parte de la clase
// private: solo se puede acceder desde la clase donde se creo
// protected: se puede acceder desde la clase donde se creo y desde las clases que hereden de esta clase 

// https://www.typescriptlang.org/docs/handbook/classes.html 







