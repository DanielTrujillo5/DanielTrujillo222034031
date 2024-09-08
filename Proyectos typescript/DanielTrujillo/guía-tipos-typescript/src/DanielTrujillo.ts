
interface tipoVehiculo {
    tipo: string;  
    marca: string;
    modelo: string;
    cilindraje: number;
    numPuertas: number;
    arrancarVehiculo: () => void;
    cEspeciales: caracteristicasEspeciales[];
}

interface caracteristicasEspeciales {
    velocidad: number;
    suspension: boolean;  
    agregarSuspension: () => void;  
}

interface testArray {
    modelos: number[];
    caracteristicasArray: Array<string[]>;
}

const miVehiculo: tipoVehiculo = {
    tipo: 'camioneta',
    marca: 'toyota',
    modelo: 'tx',
    cilindraje: 4000,
    numPuertas: 4,
    cEspeciales: [],
    arrancarVehiculo() {
        console.log(`El vehiculo arranco con un motor de ${this.cilindraje} cc`);
    }
};

const miSegundoVehiculo: caracteristicasEspeciales = {
    velocidad: 200,
    suspension: false,  
    agregarSuspension() {  
        if (this.suspension) {
            console.log('Tu vehiculo tiene suspensión');
        } else {
            console.log('Tu vehiculo no tiene suspensión');
        }
    }
};

const miTercerVehiculo: testArray = {
    modelos: [2021, 2022, 2023, 2025, 2026],
    caracteristicasArray: [
        ['Azul', 'Verde'],
        ['rin 15', 'rin 17'],
        ['2 puertas', '4 puertas']
    ]
};

// Impresión de resultados
console.log({ miVehiculo });  // Imprime el valor del objeto miVehiculo

// Invocación del método arrancarVehiculo del objeto miVehiculo
miVehiculo.arrancarVehiculo();

// Invocación del método agregarSuspension del objeto miSegundoVehiculo
miSegundoVehiculo.agregarSuspension();  

// Imprimir el valor de miSegundoVehiculo
console.log({ miSegundoVehiculo });

// Imprimir el valor del objeto miTercerVehiculo
console.log({ miTercerVehiculo });

// Imprimir un índice específico de caracteristicasArray para el valor "Azul"
console.log(miTercerVehiculo.caracteristicasArray[0][0]);  // Azul

// Imprimir un índice específico de caracteristicasArray para el valor "4 puertas"
console.log(miTercerVehiculo.caracteristicasArray[2][1]);  // 4 puertas

// Recorrer los subarrays con forEach y emplear el índice
let index = 0;
miTercerVehiculo.caracteristicasArray.forEach((caracteristica) => {
    console.log(caracteristica[index]);
});

index = 1;
miTercerVehiculo.caracteristicasArray.forEach((caracteristica) => {
    console.log(caracteristica[index]);
});
