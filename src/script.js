import {QA} from "../models/data.js";
import {url} from "./utils.js";

// variable para continuar el recorrido de las preguntas
var next = false;

if(window.location.pathname === `${url}/index.html`){
    document.querySelector("#btn-iniciar").addEventListener("click", () => {
        let name = document.querySelector("#txt-name").value;

        localStorage.setItem("name", name);

        window.location.href = `${url}/preguntas.html`;
    });
}

function crearTemplate({pregunta, respuestas, correctIndex}){
    const spanPregunta = document.createElement("span");
    spanPregunta.classList.add("pregunta");
    spanPregunta.textContent = pregunta;

    const divRespuestas = document.createElement("div");
    divRespuestas.classList.add("respuestas");

    divRespuestas.addEventListener("click", e => {
        const {target} = e;

        if(target.classList.contains("respuesta")){
            let {id} = target;

            if(parseInt(id) === correctIndex){
                alert("CORRECTO");
            }else{
                alert("incorrecto");
            }
        }
    });

    const fragment = document.createDocumentFragment();

    respuestas.forEach((respuesta, index) => {
        const div = document.createElement("div");
        
        div.id = index;
        div.classList.add("respuesta");
        div.textContent = respuesta;

        fragment.appendChild(div);
    });

    divRespuestas.appendChild(fragment);

    document.querySelector(".section").append(spanPregunta);
    document.querySelector(".section").append(divRespuestas);
}



if(window.location.pathname === `${url}/preguntas.html`){
    crearTemplate(QA[0]);
    // crearTemplate(QA[1]);
}

if(window.location.pathname === `${url}/puntaje.html`){
    let name = localStorage.getItem("name");

    alert("felicidades " + name);
}