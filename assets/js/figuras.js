console.log("Hello, world!");
// Codigo del Cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado) {
    return lado * 4;
}


function areaCuadrado(lado) {
    return lado * lado;
}

console.groupEnd();


// Codigo del Triangulo
console.group("Triangulos");

function perimetroTriangulo(lado1, lado2, base) {
    const perimetro = lado1 + lado2 + base;
    return perimetro;
}

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

console.groupEnd();

// Codigo del Circulo
console.group("Círculos");

function diametroCirculo(radio){
    return radio * 2;
}

const PI = Math.PI;
console.log("El valor de PI es: " + PI);

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio){
    return (radio * radio) * PI;

} 

console.groupEnd();

// Aqui se interectua con el HTML
// ********* CUADRADO
function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    //alert(perimetro);
    const rpc = document.getElementById("RCuadrado");
    rpc.innerText = "El Perimetro del Cuadrado es: " + perimetro;
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    //alert(area);
    const rpc = document.getElementById("RCuadrado");
    rpc.innerText = "El Area del Cuadrado es: " + area;    
}
// ******** CUADRADO

// ******** TRIANGULO
function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("inputLado1");
    const L1 = parseInt(input1.value);

    const input2 = document.getElementById("inputLado2");
    const L2 = parseInt(input2.value);

    const input3 = document.getElementById("inputLadoBase");
    const L3 = parseInt(input3.value);

    const perimetro = perimetroTriangulo(L1,L2,L3);
    //alert(perimetro);
    const rpt = document.getElementById("RTriangulo");
    rpt.innerText = "El Perimetro del Triangulo es: " + perimetro;
}

function calcularAreaTriangulo() {
    const input3 = document.getElementById("inputLadoBase");
    const L3 = parseInt(input3.value);

    const input4 = document.getElementById("inputAltura");
    const L4 = parseInt(input4.value);
    const areat = areaTriangulo(L3,L4);
    //alert(at);
    const rpt = document.getElementById("RTriangulo");
    rpt.innerText = "El Area del Triangulo es: " + areat;
}
// ******** TRIANGULO


// ******* CIRCULO
function calcularPerimetroCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    //alert(perimetro);
    const rpc = document.getElementById("RCirculo");
    rpc.innerText = "El Perimetro del Circulo es: " + perimetro;
}

function calcularAreaCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    //alert(area);
    const rpc = document.getElementById("RCirculo");
    rpc.innerText = "El Area del Circulo es: " + area;
}
// ******* CIRCULO