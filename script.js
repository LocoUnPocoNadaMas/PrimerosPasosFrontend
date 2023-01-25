/**
 * ES5
 */
//const object = require('./assets/data/cv-model.json');

/**
 * ES6
 */
import object from './assets/data/cv-model.json' assert {type: 'json'}


window.onload = onInit();

function onInit() {
    //compatibility();
    personal();
    contact();
    studies();
    jobs();
    skills();
    skin();
}

function personal() {
    let lugar = document.querySelector("#personal");
    let agregar;

    agregar = document.createElement("h2");
    agregar.innerHTML = object.datos.personales.Nombre;
    lugar.appendChild(agregar);
    agregar = document.createElement("h5");
    agregar.innerHTML = object.datos.estudios.universitarios.Estado;
    lugar.appendChild(agregar);
    agregar = document.createElement("h4");
    agregar.innerHTML = object.datos.estudios.universitarios.Titulo;
    lugar.appendChild(agregar);
    agregar = document.createElement("h4");
    agregar.innerHTML = object.datos.estudios.universitarios.Lugar;
    lugar.appendChild(agregar);

    agregar = document.createElement("div");
    agregar.setAttribute("id", "barra");
    agregar.setAttribute("class", "fondo2");
    lugar.appendChild(agregar);
    /*
    lugar = document.querySelector("#barra");
    agregar = document.createElement("ul");
    lugar.appendChild(agregar);
    */
}

function contact() {
    
    let lugar = document.querySelector("#barra");
    let agregar;

    agregar = document.createElement("a");
    agregar.href=object.datos.personales.linkedin;
    agregar.innerHTML = "LinkedIn";
    lugar.appendChild(agregar);

    agregar = document.createElement("a");
    agregar.href="mailto:"+object.datos.personales.Email;
    agregar.innerHTML = "Correo";
    lugar.appendChild(agregar);
}

function studies() {
    let lugar = document.querySelector("#studies");
    let agregar = document.createElement("ul");
    agregar.setAttribute("id", "stuList");
    lugar.appendChild(agregar);

    object.datos.estudios.complementarios.forEach(element => {
        //console.log(element.Curso);
        lugar = document.querySelector("#stuList");
        agregar = document.createElement("li");
        agregar.innerHTML = element.Curso+" - "+element.Período;
        lugar.appendChild(agregar);
/*
        lugar = document.querySelector("#stuPeriod");
        agregar = document.createElement("p");
        agregar.innerHTML = element.Período;
        lugar.appendChild(agregar);*/

    });
}

function jobs() {
    let lugar = document.querySelector("#jobs");
    let agregar = document.createElement("ul");
    agregar.setAttribute("id", "jobList");
    lugar.appendChild(agregar);

    object.datos.trabajos.forEach(element => {
        //console.log(element.Trabajo);
        agregar = document.createElement("li");
        agregar.innerHTML = element.Trabajo;

        lugar = document.querySelector("#jobList");

        lugar.appendChild(agregar);
    });
}

function skills() {
    let lugar = document.querySelector("#skills");
    let agregar = document.createElement("ul");
    agregar.setAttribute("id", "skiList");
    lugar.appendChild(agregar);
    object.datos.habilidades.forEach(element => {
        //console.log(element);
        let agregar = document.createElement("li");
        agregar.innerHTML = element.Tipo;

        let lugar = document.querySelector("#skiList");

        lugar.appendChild(agregar);
    });
}

function skin() {
    /*
    let agregar = document.createElement("p");
        agregar.innerHTML = element;
    let lugar = document.querySelectorAll("section")
    */
}

function compatibility() {
    var ES1     = !!(Array.prototype && Array.prototype.join),
        ES3     = !!(Array.prototype && Array.prototype.pop),
        ES51    = (function() {'use strict'; return !this; })(),
        ES6     = !!Object.assign,
        ES7     = !!(Array.prototype && Array.prototype.includes);
            /*
            var ES51    = Modernizr.es5,
                ES6     = Modernizr.es6object;
                ES7     = false;
            */

        if(ES7){
            alert('Tu navegador contiene características mínimas de ECMAScript 7');
        }else if(ES6){
            alert('Tu navegador contiene características mínimas de ECMAScript 6');
        }else if(ES51){
            alert('Tu navegador tiene soporte para ECMAScript 5.1');
        }else if(ES3){
            alert('Tu navegador contiene características de ECMAScript 3');
        }else if(ES1){
            alert('Tu navegador contiene características de ECMAScript 1');
        }else{
            alert('Tu navegador contiene características de ECMAScript desconocida');
        }
}
