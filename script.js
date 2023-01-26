/**
 * ES5
 */
//const object = require('./assets/data/cv-model.json');

/**
 * ES6
 */
import object from './assets/data/cv-model.json' assert {type: 'json'}


window.onload = onInit();

const fondo1 = "#67989A";
const fondo2 = "#417E80";
const fondo3 = "#236467";
const fondo4 = "#0D4A4D";
const fondo5 = "#003133";
const fondo6 = "#FFF";
const fondo6dark = "#202020";
const letra1 = "#003133";
const letra2 = "rgba(255, 255, 255, 0.5)";
const letra3 = "rgba(0, 0, 0, 0.5)";
const letra4 = "#67989A";

function onInit() {
    //compatibility();
    personal();
    contact();
    studies();
    jobs();
    skills();
    //skin();
    //document.getElementById("diseño").addEventListener("click", onChange());
    onChange();
}

function onChange() {
    /*
    var value = document.querySelector('#diseño').selectedOptions[0].value;
    console.log(value);
    */
    document.getElementById("diseño").onchange = function () {

        let selected = document.getElementById("diseño").value;
        switch (selected) {
            case "value1": {
                console.log("awa");
                changeSkin(".fondo6", fondo6, true);
                changeSkin(".letra3", letra3, false);
                changeSkin(".fondo4", fondo4, true);
                changeSkin(".letra4", letra4, false);
                changeSkin(".fondo1", fondo1, true);
                changeSkin(".letra1", letra1, false);
            }
                break;
            case "value2": {
                console.log("ewe");
                changeSkin(".fondo6", fondo6dark, true);
                changeSkin(".letra3", letra2, false);
                changeSkin(".fondo4", fondo2, true);
                changeSkin(".letra4", letra1, false);
                changeSkin(".fondo1", fondo4, true);
                changeSkin(".letra1", letra4, false);
            }
                break;
            case "value3": {
                console.log("iwi");
                changeSkin(".fondo6", fondo2, true);
                changeSkin(".letra3", letra3, false);
                changeSkin(".fondo4", fondo4, true);
                changeSkin(".letra4", letra4, false);
                changeSkin(".fondo1", fondo1, true);
                changeSkin(".letra1", letra1, false);

            }
                break;
            case "value4": {
                console.log("owo");
                changeSkin(".fondo6", fondo4, true);
                changeSkin(".letra3", letra3, false);
                changeSkin(".fondo4", fondo2, true);
                changeSkin(".letra4", letra5, false);
                changeSkin(".fondo1", fondo1, true);
                changeSkin(".letra1", letra1, false);

            }
                break;

            default: alert("something was wrong");
                break;
        }
    }
}

function personal() {
    addComponent("h2", "#personal", object.datos.personales.Nombre, null, null);
    addComponent("h5", "#personal", object.datos.estudios.universitarios.Estado, null, null);
    addComponent("h4", "#personal", object.datos.estudios.universitarios.Titulo, null, null);
    addComponent("h4", "#personal", object.datos.estudios.universitarios.Lugar, null, null);
    //addComponent("div", "#personal", null, id, barra);

    let lugar = document.querySelector("#personal");
    let agregar;
    agregar = document.createElement("div");
    agregar.setAttribute("id", "barra");
    agregar.setAttribute("class", "fondo1 letra1");
    lugar.appendChild(agregar);
}

function contact() {
    addComponent("a", "#barra", "LinkedIn", "href", object.datos.personales.linkedin);
    addComponent("a", "#barra", "Correo", "href", "mailto:" + object.datos.personales.Email);
}

function studies() {
    addComponent("ul", "#studies", null, "id", "stuList");
    object.datos.estudios.complementarios.forEach(element => {
        addComponent("li", "#stuList", element.Curso + " - " + element.Período, null, null);
    });
}

function jobs() {
    addComponent("ul", "#jobs", null, "id", "jobList");
    object.datos.trabajos.forEach(element => {
        addComponent("li", "#jobList", element.Trabajo, null, null);
    });
}

function skills() {
    addComponent("ul", "#skills", null, "id", "skiList");
    object.datos.habilidades.forEach(element => {
        addComponent("li", "#skiList", element.Tipo, null, null);
    });
}

function addComponent(componente, id, element, attribName, attribValue) {
    let agregar = document.createElement(componente);
    if (typeof (element) === 'string')
        agregar.innerHTML = element;
    if (typeof (attribName) === 'string' && typeof (attribValue) === 'string')
        agregar.setAttribute(attribName, attribValue);
    let lugar = document.querySelector(id);
    lugar.appendChild(agregar);

}

function changeSkin(clase, color, background) {
    if (background) {
        console.log("back: " + background);
        let intro = document.querySelectorAll(clase);
        //let intro = document.getElementsByClassName('fondo6');
        intro.forEach(element => {
            //element.className = 'fondo6 letra3';
            element.style.backgroundColor = color;
        });
    } else {
        console.log("color: " + background);
        let intro = document.querySelectorAll(clase);
        //let intro = document.getElementsByClassName('fondo6');
        intro.forEach(element => {
            //element.className = 'fondo6 letra3';
            //element.style.backgroundColor = color;
            element.style.color = color;
        });
    }

    /*
    let agregar = document.createElement("p");
        agregar.innerHTML = element;
    let lugar = document.querySelectorAll("section")
    */
}

function compatibility() {
    var ES1 = !!(Array.prototype && Array.prototype.join),
        ES3 = !!(Array.prototype && Array.prototype.pop),
        ES51 = (function () { 'use strict'; return !this; })(),
        ES6 = !!Object.assign,
        ES7 = !!(Array.prototype && Array.prototype.includes);
    /*
    var ES51    = Modernizr.es5,
        ES6     = Modernizr.es6object;
        ES7     = false;
    */

    if (ES7) {
        alert('Tu navegador contiene características mínimas de ECMAScript 7');
    } else if (ES6) {
        alert('Tu navegador contiene características mínimas de ECMAScript 6');
    } else if (ES51) {
        alert('Tu navegador tiene soporte para ECMAScript 5.1');
    } else if (ES3) {
        alert('Tu navegador contiene características de ECMAScript 3');
    } else if (ES1) {
        alert('Tu navegador contiene características de ECMAScript 1');
    } else {
        alert('Tu navegador contiene características de ECMAScript desconocida');
    }
}
