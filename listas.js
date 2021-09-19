const ancho = screen.width
const alto = screen.height

var lista = [];
//var mitadLista = 0;

// Obtiene la mitad de la Lista
mitadLista = parseInt(lista.length / 2);

/*AGREGAR ELEMENTO A LA LISTA */
function agregarElemento() {
    const newElement = document.getElementById("inputLista");
    const newElementValue = newElement.value;

    lenValue = newElementValue;

    if (lenValue == 0){
        const mostrarMensaje = document.getElementById("mensaje");
        mostrarMensaje.innerText = "VACIO" + lenValue;
    }

    lista.push(newElementValue);

    const mostrarLista = document.getElementById("original");
    mostrarLista.innerText = "Lista: " + lista;

    const mostrarMensaje = document.getElementById("mensaje");
    mostrarMensaje.innerText = "";


    // Esta forma -->document.getElementById("lista").innerHTML = lista; permite publicar el valor directo
    // Pero, si se requiere agregar texto para concatenar
    // Entonces te conviene mas la forma anterior
    // document.getElementById("lista").innerHTML = lista;
}

function borrarLista() {
    lenlista = lista.length;
    if (lenlista == 0) {
        const mostrarMensaje = document.getElementById("mensaje");
        mostrarMensaje.innerText = "No hay nada que borrar";
    }

    lista = [];

    const listaOriginal = document.getElementById("original");
    listaOriginal.innerText = lista;
    const mostrarLista = document.getElementById("ordenada");
    mostrarLista.innerText = lista;
}


function ordenarLista() {
    const listaOriginal = document.getElementById("original");
    listaOriginal.innerText = "Lista Original: " + lista;

    listaOrdenada = lista.sort(
        function(elementoA, elementoB){
            return elementoA - elementoB
        }
    );
    
    const mostrarLista = document.getElementById("ordenada");
    mostrarLista.innerText = "Lista Ordenada: " + listaOrdenada;
}


// CALCULANDO PROMEDIO
function cpromedio() {
    const rpromedio = calcularPromedio(lista);
    const listaOriginal = document.getElementById("original");
    listaOriginal.innerText = "El Promdeio de la lista es: " + rpromedio;
}

// Es Necesario covertir los valores del ARRAY a Numeros, para que pueda SUMAR en lugar de Concatenar
function calcularPromedio(lista) {   
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoELemento) {
            return parseInt(valorAcumulado) + parseInt(nuevoELemento);
        }
    );
    
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}
// END -->> CALCULANDO PROMEDIO


// CALCULANDO MEDIANA
// Funciones de Soporte
//function calcularMediaAritmetica(xlista) {
//    const sumaLista = xlista.reduce(
//        function (valorAcumulado = 0, nuevoELemento) {
//            return valorAcumulado + nuevoELemento;
//        }
//    );
//
//    const promedioLista = sumaLista / xlista.length;
//    return promedioLista;
//}

function esPar(numerito) {
    if (numerito % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }

// SE SOLICITA CALCULAR LA MEDIANA  
function cmediana() {
    const rmediana = calcularMediana(lista);

    const listaOriginal = document.getElementById("original");
    listaOriginal.innerText = "La Mediana de la lista es: " + rmediana;
}

function calcularMediana(lista) {
    mitadLista = parseInt(lista.length / 2);

    listaOrdenada = lista.sort(
        function(elementoA, elementoB){
            return elementoA - elementoB
        }
    );
 
   //Entonces se saca la mediana
   let xmediana;
    
   if (esPar(listaOrdenada.length)) {
      const elemento1 = listaOrdenada[mitadLista - 1];
      const elemento2 = listaOrdenada[mitadLista];
      //const promedioElemento1y2 =calcularMediaAritmetica([elemento1, elemento2]);
      xmediana = (parseInt(elemento1) + parseInt(elemento2))/2
      //xmediana = promedioElemento1y2;       
   } else {
         xmediana = listaOrdenada[mitadLista];
   }
    
return xmediana;    
}
