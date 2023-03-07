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
        let rango;
        if (nota >= 90 && nota <= 100) {
            rango = "rango90-100";
        } else if (nota >= 80 && nota <= 89) {
            rango = "rango80-89";
        } else if (nota >= 70 && nota <= 79) {
            rango = "rango70-79";
        } else if (nota >= 60 && nota <= 69) {
            rango = "rango60-69";
        } else if (nota < 60 && nota >= 1) {
            rango = "rangoMenos60";
        } else if (nota === 0) {
            rango = "payaso";
        } else {
            console.log("Rango malardo pa' ni pa eso sirves");
        }
        const filas = document.getElementsByTagName("tr");
        for (let i = 1; i < filas.length; i++) {
            const fila = filas[i];
            if (fila.id !== rango) {
                fila.style.display = "none";
            } else {
                fila.style.display = "";
            }
        }
    }
}

const nombre = prompt("Ingrese su nombre: ");
const nota = parseInt(prompt("Ingrese su nota: "));
const estudiante1 = new Estudiante(nombre);
const estandar1 = new Estandar(nota);

const saludo = `¡Hola ${estudiante1.nombre.toUpperCase()}! Esta es la tabla de notas universales, pulsa filtrar`;
document.getElementById("titulo").textContent = saludo;

const miBoton = document.getElementById("filter");
// miBoton.addEventListener('click', estandar1.Listar());
miBoton.addEventListener('click', (saludo) => {
    estandar1.Listar();
    saludo = `${estudiante1.nombre.toUpperCase()}, Esta sería tu nota en distintas medidas`;
    document.getElementById("titulo").textContent = saludo;
});

