const  venezuela = [];

venezuela.push({
    name: "Edwar J",
    lastname: "Aguiar",
    sexo: "Masculino",
    salary: 1000,

});

venezuela.push({
    name: "Barbara C",
    lastname: "Alfonzo",
    sexo: "Femenino",
    salary: 1500,
});

venezuela.push({
    name: "Carlos M",
    lastname: "Aguiar",
    sexo: "Masculino",
    salary: 1900,
});

venezuela.push({
    name: "Carlos A",
    lastname: "Nieves",
    sexo: "Masculino",
    salary: 2050,
});

venezuela.push({
    name: "Manuel F",
    lastname: "Alfonzo",
    sexo: "Masculino",
    salary: 5100,
});

venezuela.push({
    name: "Ramon A",
    lastname: "Aguiar",
    sexo: "Masculino",
    salary: 950,
});

venezuela.push({
    name: "Luis A",
    lastname: "Aguiar",
    sexo: "Masculino",
    salary: 1650,
});

venezuela.push({
    name: "Carmen D",
    lastname: "Aguiar",
    sexo: "Femenino",
    salary: 1280,
});

venezuela.push({
    name: "LuzMarina",
    lastname: "Arias",
    sexo: "Femenino",
    salary: 1890,
});

venezuela.push({
    name: "Dioscelis D",
    lastname: "Teran",
    sexo: "Femenino",
    salary: 650,
});

venezuela.push({
    name: "Juan C",
    lastname: "Leon",
    sexo: "Masculino",
    salary: 3180,
});

venezuela.push({
    name: "Mayra",
    lastname: "Diaz",
    sexo: "Femenino",
    salary: 2950,
});

venezuela.push({
    name: "Ana M",
    lastname: "Alfonzo",
    sexo: "Femenino",
    salary: 4300,
});

venezuela.push({
    name: "Ana C",
    lastname: "Flores",
    sexo: "Femenino",
    salary: 890,
});

venezuela.push({
    name: "Elio F",
    lastname: "Farfan",
    sexo: "Masculino",
    salary: 4600,

});

venezuela.push({
    name: "Fremiot B",
    lastname: "Bello",
    sexo: "Masculino",
    salary: 3750,
});

venezuela.push({
    name: "Dalia C",
    lastname: "Blancacho",
    sexo: "Femenino",
    salary: 4500,
});

venezuela.push({
    name: "JeanPierre B",
    lastname: "Blancacho",
    sexo: "Masculino",
    salary: 3050,

});

venezuela.push({
    name: "Nelson M",
    lastname: "Medina",
    sexo: "Masculino",
    salary: 3000,
});

venezuela.push({
    name: "Daniel P",
    lastname: "Pachano",
    sexo: "Masculino",
    salary: 3900,

});

// Crea la Tabla en HTML

createTable(venezuela);

function createTable(data){
    var table = document.getElementById('personalTable');

    for (var i=0; i < data.length; i++){
      var row = `<tr>
                      <td>${data[i].name}</td>
                      <td>${data[i].lastname}</td>
                      <td>${data[i].sexo}</td>    
                      <td>${data[i].salary}</td>                          
                 </tr>`
      table.innerHTML + row
    }

}