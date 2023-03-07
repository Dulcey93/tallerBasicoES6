class Estudiante {
    nombre;
    constructor(nombre) {
        this.nombre = nombre;
    }
}
class Estandar {
    nota;

    constructor(nota) {
        this.nota = nota;
    }

    // Métodos
    Listar() {
        const miTabla = document.getElementById("tabla");
        if (nota >= 90 && nota <= 100) {
            // El número está dentro del rango 90 a 100
            console.log("El número está dentro del rango 0 a 10");
        } else if (nota >= 80 && nota <= 89) {
            // El número está dentro del rango 20 a 30, haz algo específico aquí
            console.log("El número está dentro del rango 20 a 30");
        } else if (nota >= 70 && nota <= 79) {
            // El número está dentro del rango 40 a 50, haz algo específico aquí
            console.log("El número está dentro del rango 40 a 50");
        } else if (nota >= 60 && nota <= 69) {
            // El número está dentro del rango 40 a 50, haz algo específico aquí
            console.log("El número está dentro del rango 40 a 50");
        } else if (nota >= 1 && nota < 60) {
            // El número está dentro del rango 40 a 50, haz algo específico aquí
            console.log("El número está dentro del rango 40 a 50");
        } else if (nota ===0) {
            // El número está dentro del rango 40 a 50, haz algo específico aquí
            console.log("El número está dentro del rango 40 a 50");
        } else {
            // El número está fuera de los tres rangos especificados
            console.log("El número está fuera de los rangos especificados");
        }
        // recorrer todas las filas de la tabla
        for (let i = 0; i < miTabla.rows.length; i++) {
            const fila = miTabla.rows[i];
            // const celda = fila.cells[1];
            // const valor = parseInt(celda.innerHTML);

            // si el valor de la celda no está dentro del rango del filtro, ocultar la fila
            if (valor < minimo || valor > maximo) {
                fila.style.display = "none";
            } else {
                fila.style.display = "";
            }
        }
    }
}

const nombre = prompt("Ingrese su nombre");
const nota = prompt("Ingrese su nota");
const estudiante1 = new Estudiante(nombre);
const estandar1 = new Estandar(nota);

const saludo = `¡Hola ${estudiante1.nombre}! Selecciona como quieres saber tu equivalente`;
document.getElementById("titulo").textContent = saludo;

const miBoton = document.getElementById("filter");
miBoton.addEventListener("click", estandar1.Listar());

