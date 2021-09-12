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
//CUADRADO
function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

//TRIANGULO
function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("inputLado1");
    const L1 = parseInt(input1.value);

    const input2 = document.getElementById("inputLado2");
    const L2 = parseInt(input2.value);

    const input3 = document.getElementById("inputLadoBase");
    const L3 = parseInt(input3.value);

    const perimetro = perimetroTriangulo(L1,L2,L3);
    alert(perimetro);
}

function calcularAreaTriangulo() {

    const input3 = document.getElementById("inputLadoBase");
    const L3 = parseInt(input3.value);

    const input4 = document.getElementById("inputAltura");
    const L4 = parseInt(input4.value);

    const at = areaTriangulo(L3,L4);
    alert(at);
}

//CIRCULO
function calcularPerimetroCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
}