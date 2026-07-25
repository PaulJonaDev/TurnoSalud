//ok, Datos de los pacientes

const turnos = [
    {
        codigo: "A-014",
        nombre: "Jonathan Paul",
        tramite: "Afiliación",
        modulo: "Módulo 1",
        atendido: false
    },
    {
        codigo: "A-020",
        nombre: "Sebastián Rincón",
        tramite: "Entrega de medicamentos",
        modulo: "Módulo 3",
        atendido: false
    },
    {
        codigo: "A-030",
        nombre: "Paula Rodríguez",
        tramite: "Autorización",
        modulo: "Módulo 4",
        atendido: false
    },
    {
        codigo: "A-032",
        nombre: "Miguel Pineda",
        tramite: "Facturación",
        modulo: "Módulo 2",
        atendido: false
    },
    {
        codigo: "A-037",
        nombre: "Oscar Perdomo",
        tramite: "Asignación de citas",
        modulo: "Módulo 1",
        atendido: false
    },
    {
        codigo: "A-045",
        nombre: "Dilsia Lamadrid",
        tramite: "Afiliación",
        modulo: "Módulo 3",
        atendido: false
    }
];


// Elementos del DOM


const visorNumero = document.getElementById("visorNumero");
const visorModulo = document.getElementById("visorModulo");
const buscador = document.getElementById("buscador");
const contadorFila = document.getElementById("contadorFila");
const listaEspera = document.getElementById("listaEspera");
const btnLlamar = document.getElementById("btnLlamar");
const mensajeVacio = document.getElementById("mensajeVacio");


//  Pintar la fila - Crear


function pintarFila() {

    listaEspera.innerHTML = "";

    for (let i = 0; i < turnos.length; i++) {

        const turno = turnos[i];

        const li = document.createElement("li");
        li.classList.add("turno");

        
        li.dataset.codigo = turno.codigo;
        li.dataset.modulo = turno.modulo;

        if (turno.atendido) {
            li.classList.add("turno--atendido");
        }

        const spanCodigo = document.createElement("span");
        spanCodigo.classList.add("turno__codigo");
        spanCodigo.textContent = turno.codigo;

        const divDatos = document.createElement("div");
        divDatos.classList.add("turno__datos");

        const pNombre = document.createElement("p");
        pNombre.classList.add("turno__nombre");
        pNombre.textContent = turno.nombre;

        const pTramite = document.createElement("p");
        pTramite.classList.add("turno__tramite");
        pTramite.textContent = turno.modulo;

        const estado = document.createElement("span");
        estado.classList.add("turno__estado");

        if (turno.atendido) {
            estado.textContent = "Atendido";
        } else {
            estado.textContent = "En espera";
        }
         
        // Botón cancelar

       const botonCancelar = document.createElement("button");
       botonCancelar.classList.add("turno__cancelar");
       botonCancelar.textContent = "Cancelar";

       botonCancelar.dataset.codigo = turno.codigo;

        divDatos.appendChild(pNombre);
        divDatos.appendChild(pTramite);

        li.appendChild(spanCodigo);
        li.appendChild(divDatos);
        li.appendChild(estado);
        li.appendChild(botonCancelar);


        listaEspera.appendChild(li);

    }

    if (turnos.length === 0) {
        mensajeVacio.style.display = "block";
    } else {
        mensajeVacio.style.display = "none";
    }

    actualizarContador();

} 
// Pintar fila - llamado

pintarFila();


// Llamar siguiente

function llamarSiguiente() {

    for (let i = 0; i < turnos.length; i++) {

        if (!turnos[i].atendido) {

            turnos[i].atendido = true;

            visorNumero.textContent = turnos[i].codigo;
            visorModulo.textContent = turnos[i].modulo;

            pintarFila();

            return;

        }

    }

    visorNumero.textContent = "---";
    visorModulo.textContent = "No hay más turnos";

}

btnLlamar.addEventListener("click", llamarSiguiente);

// Cancelar turno

function cancelarTurno(codigo){

    for(let i = 0; i < turnos.length; i++){

        if(turnos[i].codigo === codigo){

            turnos.splice(i,1);

            break;

        }

    }

    buscador.value = "";
    
    pintarFila();

    if(turnos.length === 0){

    visorNumero.textContent = "---";
    visorModulo.textContent = "No hay más turnos";

}
}

listaEspera.addEventListener("click", function(evento){

    if(evento.target.classList.contains("turno__cancelar")){

        const codigo = evento.target.dataset.codigo;

        cancelarTurno(codigo);

    }

});

// Contador


function actualizarContador() {

    const pendientes = document.querySelectorAll(".turno:not(.turno--atendido)");

    contadorFila.textContent = pendientes.length;

}

// Buscar turnos

function buscarTurno(){

    const texto = buscador.value.toLowerCase();

    const tarjetas = document.querySelectorAll(".turno");

    tarjetas.forEach(function(tarjeta){

        const nombre = tarjeta.querySelector(".turno__nombre").textContent.toLowerCase();

        const codigo = tarjeta.dataset.codigo.toLowerCase();

        if(nombre.includes(texto) || codigo.includes(texto)){

            tarjeta.classList.remove("turno--oculto");

        }else{

            tarjeta.classList.add("turno--oculto");

        }

    });

}

buscador.addEventListener("input", buscarTurno);