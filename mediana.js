function calcularMediaAritmetica(lista) {
        const sumaLista = lista.reduce(
            function (valorAcumulado = 0, nuevoELemento) {
                return valorAcumulado + nuevoELemento;
            }
        );
    
        const promedioLista = sumaLista / lista.length;
        return promedioLista;
    }

const lista = [
    7550,
    999,
    800,
    700,
    300,
    150,
    87,
    705,
];

// Obtiene la mitad de la Lista
const mitadLista1 = parseInt(lista.length / 2);


function esPar(numerito) {
  if (numerito % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// let mediana;

// if (esPar(lista1.length)) {
//    const elemento1 = lista1[mitadLista1 - 1];
//    const elemento2 = lista1[mitadLista1];

//    const promedioElemento1y2 =calcularMediaAritmetica([elemento1, elemento2]);
//   mediana = promedioElemento1y2;

//} else {
    //mediana = lista1[mitadLista1];
// }


function calcularMediana(lista) {
    //Aqui se ordena la lista (El array recibido)
    function comparar (a, b) {return a - b;}
    const listaOrdenada = lista.sort(comparar);
    
    //Entonces se saca la mediana
    let mediana;

    if (esPar(listaOrdenada.length)) {
        const elemento1 = lista[mitadLista1 - 1];
        const elemento2 = lista[mitadLista1];
     
        const promedioElemento1y2 =calcularMediaAritmetica([elemento1, elemento2]);
        mediana = promedioElemento1y2;
     
     } else {
         mediana = lista[mitadLista1];
     }

return mediana;    
}