//ok, Datos de los pacientes

const turnos = [
{
  codigo: "A-014",
  nombre: "Laura Gómez",
  tramite: "Afiliación",
  modulo: "Módulo 1",
  atendido: false
 },

{
  codigo: "A-020",
  nombre: "Miguel Ascanio",
  tramite: "Entrega de medicamentos",
  modulo: "Módulo 3",
  atendido: false
 },
{
  codigo: "A-030",
  nombre: "Laura Gómez",
  tramite: "Autorizacion",
  modulo: "Módulo 5",
  atendido: false
 },
{
  codigo: "A-032",
  nombre: "Laura Gómez",
  tramite: "Facturacion",
  modulo: "Módulo 2",
  atendido: false
 },
{
  codigo: "A-037",
  nombre: "Laura Gómez",
  tramite: "Asignacion de citas",
  modulo: "Módulo 7",
  atendido: false
 },
];


// Llamados de los elementos

const visorNumero = document.getElementById("visorNumero");
const visorModulo = document.getElementById("visorModulo");
const buscador = document.getElementById("buscador");
const contadorFila = document.getElementById("contadorFila");
const listaEspera = document.getElementById("listaEspera");
const btnLlamar = document.getElementById("btnLlamar");
const mensajeVacio = document.getElementById("mensajeVacio")

// Pintar las filas

function pintarFila(){

    listaEspera.innerHTML = "";
    for (let i = 0; i < turnos.length; i++) {
      const turno = turnos[i];
      const li = document.createElement("li");
      li.classList.add("turno");

      li.dataset.codigo = turno.codigo;
      li.dataset.modulo = turno.modulo;

      if (turno.atendido) {
        li.classList.add("turno-atendido");
      }

      const spanCodigo = document.createElement("span");
      spanCodigo.classList.add("turno_codigo");
      spanCodigo.textContent = turno.codigo;

      const divDatos = document.createElement("div");
      divDatos.classList.add("turno__datos");

      const pTramite = document.createElement("p");
      pTramite.classList.add("turno_tramite");
      pTramite.textContent = turno.tramite;

      const pNombre = document.createElement("p");
      pNombre.classList.add("turno_nombre");
      pNombre.textContent = turno.nombre;

      divDatos.appendChild(pNombre);
      divDatos.appendChild(pTramite);

      li.appendChild(spanCodigo);
      li.appendChild(divDatos);

      listaEspera.appendChild(li);
    }

}