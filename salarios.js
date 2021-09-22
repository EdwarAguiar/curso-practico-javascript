const personal = [];

personal.push({ IDEmpleado: 1000, Nombre: "Edwar J", Apellido: "Aguiar", Sexo: "Masculino", Cargo: "Director Operaciones", Departamento: "Gerencia Operaciones", Salario: 3575});
personal.push({ IDEmpleado: 1001, Nombre: "Barbara C", Apellido: "Alfonzo", Sexo: "Femenino", Cargo: "Director Administracion", Departamento: "Gerencia Operaciones", Salario: 3575});
personal.push({ IDEmpleado: 1002, Nombre: "Carlos M", Apellido: "Aguiar", Sexo: "Masculino", Cargo: "Pasante Sub-Pagado",  Departamento: "Informatica", Salario: 1000});
personal.push({ IDEmpleado: 1003, Nombre: "Carlos A", Apellido: "Nieves", Sexo: "Masculino", Cargo: "Gerente Soporte Tecnico",  Departamento: "Informatica", Salario: 3250});
personal.push({ IDEmpleado: 1004, Nombre: "Ana Mayela", Apellido: "Alfonzo", Sexo: "Femenino", Cargo: "Gerente Administracion",  Departamento: "Administracion", Salario: 3100});
personal.push({ IDEmpleado: 1005, Nombre: "Mariangel G", Apellido: "Nieves", Sexo: "Femenino", Cargo: "Gerente Recursos Humanos",  Departamento: "Administracion", Salario: 3000});
personal.push({ IDEmpleado: 1006, Nombre: "Nelson", Apellido: "Medina", Sexo: "Masculino", Cargo: "Jefe Implementaciones",  Departamento: "Informatica", Salario: 2800});
personal.push({ IDEmpleado: 1007, Nombre: "Juan C", Apellido: "Leon", Sexo: "Masculino", Cargo: "Asesor Administracion",  Departamento: "Administracion", Salario: 2800});
personal.push({ IDEmpleado: 1008, Nombre: "Luis A", Apellido: "Aguiar", Sexo: "Masculino", Cargo: "Asesor Recreativo",  Departamento: "Administracion", Salario: 2800});
personal.push({ IDEmpleado: 1009, Nombre: "JeanPierre", Apellido: "Blancacho", Sexo: "Masculino", Cargo: "Diseñador Grafico",  Departamento: "Informatica", Salario: 2500});
personal.push({ IDEmpleado: 1010, Nombre: "Jordy", Apellido: "Medina", Sexo: "Masculino", Cargo: "Tecnico Instalador",  Departamento: "Operaciones", Salario: 2100});
personal.push({ IDEmpleado: 1011, Nombre: "Daniel", Apellido: "Pachano", Sexo: "Masculino", Cargo: "Ingeniero Instalador",  Departamento: "Operaciones", Salario: 3000});
personal.push({ IDEmpleado: 1012, Nombre: "Ramon Alberto", Apellido: "Aguiar", Sexo: "Masculino", Cargo: "Tecnico Instalador",  Departamento: "Operaciones", Salario: 2500});


function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
      let th = document.createElement("th");
      let text = document.createTextNode(key);
      th.appendChild(text);
      row.appendChild(th);
    }
  }
  
  let table = document.querySelector("table");
  let data = Object.keys(personal[0]);
  generateTableHead(table, data);

  function generateTable(table, data) {
    for (let element of data) {
      let row = table.insertRow();
      for (key in element) {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
      }
    }
  }

  generateTable(table, personal);