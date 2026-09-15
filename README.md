<div align="center">

# 🩺 TurnoSalud — Tablero de sala de espera

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/Estado-Ejercicio_de_práctica-blue)

Un tablero de turnos de sala de espera hecho con **JavaScript puro** — sin frameworks, sin librerías.

</div>

---

## 📌 Sobre este proyecto

Este es un **ejercicio guiado de manipulación del DOM**, no una aplicación de producción. Lo dejo así de transparente a propósito: la estructura HTML/CSS venía como plantilla base de la curricula, y mi trabajo fue completar la lógica en JavaScript — selección de elementos, renderizado dinámico de listas, manejo de eventos y actualización de estado en tiempo real.

Lo incluyo en mi portafolio porque demuestra que puedo:

- [x] Seleccionar y manipular elementos del DOM (`getElementById`, `createElement`, `innerHTML`)
- [x] Renderizar listas dinámicas a partir de un array de objetos
- [x] Manejar eventos de usuario (`click`, `input`) para filtrar y actualizar la interfaz
- [x] Mantener y sincronizar estado (contador de turnos en espera, turno actual en atención)

<details>
<summary><strong>🧠 Ver qué conceptos se practicaron en detalle</strong></summary>

| Concepto | Dónde se aplica |
| --- | --- |
| Array de objetos como fuente de datos | `const turnos = [...]` en `app.js` |
| Renderizado dinámico de listas | `pintarFila()` recorre el array y crea `<li>` por cada turno |
| Búsqueda/filtrado en tiempo real | Listener sobre el input `#buscador` |
| Actualización de UI reactiva a estado | `#contadorFila` y `#visorNumero` se actualizan al llamar un turno |

</details>

---

## 🚀 Cómo probarlo

No requiere instalación ni build — es HTML/CSS/JS plano:

```bash
git clone https://github.com/PaulJonaDev/TurnoSalud.git
cd TurnoSalud
# abre index.html directamente en el navegador
```

O pruébalo en producción: *(agrega aquí el link de GitHub Pages si lo despliegas)*

---

## 🗂️ Estructura

```
TurnoSalud/
├── index.html      # Estructura: visor, panel de control, fila de espera
├── styles.css       # Estilos del tablero
└── app.js           # Toda la lógica: datos, renderizado, eventos
```

---

## 🛠️ Próximos pasos si lo sigo desarrollando

- [ ] Persistencia real (ahora mismo los datos son un array hardcodeado en memoria)
- [ ] Actualizar el pie de página con mis propios créditos
- [ ] Mover a un componente reusable si lo integro a un proyecto mayor

---

<div align="center">

Hecho por **Jonathan Paul** · [GitHub](https://github.com/PaulJonaDev) · [LinkedIn](https://www.linkedin.com/in/pauljonadev)

</div>