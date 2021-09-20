const salariosVen = venezuela.map(
    function (persona){
        return persona.salary;
    }
);

const salariosVenSorted = salariosVen.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    } 
);

// HELPERS --> Funciones necesarias
// Determina si el Numero es Par o Impar
// Funicion de Apoyo para Calculo Mediana
function esPar(numero) {
    return (numero % 2 === 0);
}

// Calcula Media Aritmetica
// Funicion de Apoyo para Calculo Mediana
function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoELemento) {
            return valorAcumulado + nuevoELemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

// *************************************************
// Funcion que Calcula Mediana de Salarios
function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);
        return mediana;
    } else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}
// *************************************************
const medianaGeneralVen = medianaSalarios(salariosVenSorted);


// Funcion que Calcula Mediana del Top 10%
const spliceStart = (salariosVenSorted.length * 90) / 100;
const spliceCount = salariosVenSorted.length - spliceStart;

const salariosVenTop10 = salariosVenSorted.splice(
    spliceStart,
    spliceCount,
);

const medianaTop10Ven = medianaSalarios(salariosVenTop10);


console.log({
    medianaGeneralVen,
    medianaTop10Ven,
});