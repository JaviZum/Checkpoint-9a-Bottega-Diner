                              //  BOTTEGA  DINER
//Programa que simula la elección de un menú según la hora del día (desayuno, comida o cena).
//Seleccionaremos los 3 platos y nos presentará una nota final con el importe de cada uno y el total.

//Seleccion de hora para determinar si el menu sera de desayuno/comida/cena.
function solicitarHora() {
    let hora = prompt("Introduzca la hora en formato HH (24 horas):");

    if (hora !== null) {
        let horas = parseInt(hora, 10);
        if (!isNaN(horas) && horas >= 0 && horas <= 23) {
            if (horas >= 6 && horas < 12) {
                mostrarMenu("desayuno");
            } else if (horas >= 12 && horas < 18) {
                mostrarMenu("comida");
            } else if (horas >= 18 && horas < 24) {
                mostrarMenu("cena");
            } else {
                alert("No se sirve comida en este horario.");
            }
        } else {
            alert("Formato no válido. Por favor ingresa una hora válida en formato HH.");
        }
    } else {
        alert("Has cancelado la entrada.");
    }
}

//Completo menu para desayuno/comida/cena que incluye primer plato/segunda plato/postre.
function mostrarMenu(tipo) {
    const menus = {
        desayuno: {
            primero: [
                { plato: "Zumo de naranja", precio: 2 },
                { plato: "Yogur con frutas", precio: 3 },
                { plato: "Macedonia", precio: 5 }
            ],
            segundo: [
                { plato: "Huevos revueltos", precio: 5 },
                { plato: "Tostadas con aguacate", precio: 4 },
                { plato: "Churros", precio: 3 }
            ],
            postre: [
                { plato: "Café con leche", precio: 3 },
                { plato: "Sencha", precio: 2 },
                { plato: "Kombucha", precio: 3 }
            ]
        },
        comida: {
            primero: [
                { plato: "Ensalada César", precio: 7 },
                { plato: "Sopa de tomate", precio: 6 },
                { plato: "Espaguetti", precio: 5 }
            ],
            segundo: [
                { plato: "Pollo asado", precio: 10 },
                { plato: "Pasta al pesto", precio: 8 },
                { plato: "Lubina a la sal", precio: 15 }
            ],
            postre: [
                { plato: "Tarta de queso", precio: 5 },
                { plato: "Helado de vainilla", precio: 4 },
                { plato: "Sorbete al cava", precio: 10 }
            ]
        },
        cena: {
            primero: [
                { plato: "Ensalada César", precio: 9 },
                { plato: "Sopa de tomate", precio: 8 },
                { plato: "Espaguetti", precio: 7 }
            ],
            segundo: [
                { plato: "Pollo asado", precio: 12 },
                { plato: "Pasta al pesto", precio: 10 },
                { plato: "Lubina a la sal", precio: 17 }
            ],
            postre: [
                { plato: "Tarta de queso", precio: 7 },
                { plato: "Helado de vainilla", precio: 6 },
                { plato: "Sorbete al cava", precio: 12 }
            ]
        }
    };

    const comentarios = [
        "¡Excelente selección!",
        "Un deleite gastronómico!",
        "¡Disfrute su comida!",
        "La mejor opción del menú.",
        "No puedo imaginar nada más rico!"
    ];

    // Inicialización de parámetros.
  
    let menu = menus[tipo];
    let totalPrecio = 0;
    let seleccion = [];
    let detalleMenu = "";

    // Uso de expresiones algegraicas para eliminar la introduccion de acentos en la seleccion
     
    function eliminarAcentos(texto) {
        return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    // Selección de los 3 platos, construcción de factura.
  
    ["primero", "segundo", "postre"].forEach(curso => {
        let platoSeleccionado = null;

        while (!platoSeleccionado) {
            let opciones = menu[curso].map(item => `${item.plato} - ${item.precio}€`).join(", ");
            let eleccion = prompt(`Selecciona un ${curso} para ${tipo} escribiendo el nombre del plato: ${opciones}`);
            eleccion = eliminarAcentos(eleccion.toLowerCase().split(' ')[0]); // Tomamos solo la primera palabra

            platoSeleccionado = menu[curso].find(item => eliminarAcentos(item.plato.toLowerCase().split(' ')[0]) === eleccion);

            if (platoSeleccionado) {
                let comentario = comentarios[Math.floor(Math.random() * comentarios.length)];
                alert(`${platoSeleccionado.plato} - ${platoSeleccionado.precio}€ - ${comentario}`);
                seleccion.push(platoSeleccionado.plato);
                totalPrecio += platoSeleccionado.precio;
                detalleMenu += `${platoSeleccionado.plato} - ${platoSeleccionado.precio}€\n`;
            } else {
                alert("Selección no válida. Inténtalo de nuevo.");
            }
        }
    });

    alert(`Tu menú completo:\n\n${detalleMenu}\nPrecio total: ${totalPrecio}€`);
}

solicitarHora();