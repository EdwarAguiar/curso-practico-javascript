
const lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1
];

const lista1Count = {};

lista1.map(
    function (elemento) {
        if (lista1Count[elemento]) {
            lista1Count[elemento] += 1;
        } else{
            lista1Count[elemento] = 1;
        }
    }
);

//Object.entries() se convierte el objeto en un array de nuevo
//.sort() lo ordenamos
//lista1Array ordena el Array usando el elemento 1 del array
//Ese orden no nos sirve para encontrar la moda

const lista1Array = Object.entries(lista1Count).sort(
    function (valorAcumulado, nuevoValor) {
        valorAcumulado - nuevoValor
    }
);

//Object.entries() se convierte el objeto en un array de nuevo
//.sort() lo ordenamos
//listaModa ordena el Array usando el elemento 2 del array (Numero de veces q se repite)
//En ListaModa, entonces, el ultimo elemento nos dira la Moda o 'El valor q aparece con mayor frecuencia
// en un conjunto de datos o array.


const listaModa = Object.entries(lista1Count).sort(
    function (elementoA, elementoB){
        return elementoA[1] - elementoB[1];
    }
);

const moda = listaModa[listaModa.length - 1];

