// crear con objeto medico con los siguientes atributos 
enum Role {
    Doctor,
    Anestesista, 
    Asistente,
    Administrativo
}

//crear interfaces nos permite ahorrar lineas de codigos para esto se usa la palabra reservada interface 


interface Staff {   //aca type funcionaria en vez de interface
    name: string;
    email: string;
    role: Role;
} 

interface Billable {
    total: number;
    currentBill(): string; 
}


const medico = { 
    name: "Martin",
    email: "martin@test.com",
    role: Role.Doctor, // 0 es un Enum 
    total: 25,
    currentBill() { 
        return `Valor actual de la factura es de ${this.total}`; 
    }
}; 

// crear una funcion para poder imprimir el rol del medico 

/* 
const printStaff = (staff: {name: string, email: string, role: Role}) => { 
console.log(staff);
}

printStaff(medico); 


en vez de esta estructura le puedo pasar el objeto Staff directamente porque cumple esta estructura*/

// la otra opcion es hacerlo asi 

const printStaff = (staff: Staff) => { 
    console.log(staff);
    }

const printCurrentBill = (bill: Billable) => { console.log(bill.currentBill()); 
} 


printStaff(medico); // funciona de la misma forma 

printCurrentBill(medico); // no funciona porque no tiene la funcion currentBill 



// Diferencias entre Type y Interface en TypeScript

// Interfaces son solo para definir estructuras de un objeto 
// Types son para definir y modelar objetos pero no se limita a los objetos














