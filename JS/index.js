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