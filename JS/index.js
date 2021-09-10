import {and, or, not, not2, imp, bico} from '../JS/tablasVerdad.js';
import {excepcion} from '../JS/excepciones.js'

function clean() {
    document.getElementById('sentencia_c').value = '';
}
function cleanAll() {
    document.getElementById('sentencia_p').value = '';
    document.getElementById('sentencia_q').value = '';
    document.getElementById('sentencia_r').value = '';
    document.getElementById('sentencia_s').value = '';
    document.getElementById('sentencia_c').value = '';
    document.getElementById('wff').innerHTML = '';
    document.getElementById('pasos__solucion').innerHTML = '';
}
function execute(){
    const P = document.getElementById("sentencia_p").value.toUpperCase();
    const Q = document.getElementById("sentencia_q").value.toUpperCase();
    const R = document.getElementById("sentencia_r").value.toUpperCase();
    const S = document.getElementById("sentencia_s").value.toUpperCase();
    const C = document.getElementById("sentencia_c").value.toUpperCase();
    let compleja = C.split(" ");
    console.log(`P: ${P}`);
    console.log(`Q: ${Q}`);
    console.log(`R: ${R}`);
    console.log(`S: ${S}`);
    console.log(`C: ${C}`);
    console.log(`Lista C: ${compleja}`);   
}