let nota1 = parseInt(prompt("Ingrese la nota 1"));
let nota2 = parseInt(prompt("Ingrese nota 2"));
let nota3 = parseInt(prompt("Ingrese nota 3"));
let nombreAlumno = prompt("Ingrese el nombre del alumno");
let materia = prompt("Ingrese la materia");
let promedio = 0;

nota1Valida = true;
nota2Valida = true;
nota3Valida = true;

if (nota1 < 0 || nota1 > 10 || !nota1) {
  console.log(`nota1 esta mal ingresada debe estar en el rango del 1 al 10`);
  nota1Valida = false;
}

if (nota2 < 0 || nota2 > 10 || !nota2) {
  console.log(`nota2 esta mal ingresada debe estar en el rango del 1 al 10`);
  nota2Valida = false;
}

if (nota3 < 0 || nota3 > 10 || !nota3) {
  console.log(`nota3 esta mal ingresada debe estar en el rango del 1 al 10`);
  nota3Valida = false;
}

if (nota1Valida == true && nota2Valida == true && nota3Valida == true) {
  promedio = (nota1 + nota2 + nota3) / 3;

  if (promedio >= 7) {
    console.log(
      `${nombreAlumno} ¡felicidades! Has aprobado con un promedio de ${promedio} `
    );
  } else {
    console.log(
      `${nombreAlumno} gracias por tu esfuerzo. Nos vemos pronto en clase. El promedio obtenido es:  ${promedio} `
    );
  }
}
