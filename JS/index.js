

console.log(and(true,true));
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
    const P = noPalabras(document.getElementById("sentencia_p").value.toUpperCase().trim());
    const Q = noPalabras(document.getElementById("sentencia_q").value.toUpperCase().trim());
    const R = noPalabras(document.getElementById("sentencia_r").value.toUpperCase().trim());
    const S = noPalabras(document.getElementById("sentencia_s").value.toUpperCase().trim());
    const C = noPalabras(document.getElementById("sentencia_c").value.toUpperCase().trim());
    let iterador = function(string) {
        return string.split(" ").length;
    }
    let n = iterador(C);
    let aux = C;
    if(P !== ""){
        if(P === "Y" || P === "O" || P === "No"){
            /* for (let i = 0; i < n; i++) {
                // excepcion()
                // Se divide por palabras y se checa si la palabra i == i + 1 solo con y y o
                // Hay una excepcion en no
            } */
        }else{
            for (let i = 0; i < n; i++) {
                aux = aux.replace(P,"P");
            }
        }
    }
    if(Q !== ""){
        if(Q === "Y" || Q === "O" || Q === "No"){

        }else{
            for (let i = 0; i < n; i++) {
                aux = aux.replace(Q,"Q");
            }
        }
    }
    if(R !== ""){
        if(R === "Y" || R === "O" || R === "No"){

        }else{
            for (let i = 0; i < n; i++) {
                aux = aux.replace(R,"R");
            }
        }
    }
    if(S !== ""){
        if(S === "Y" || S === "O" || S === "No"){

        }else{
            for (let i = 0; i < n; i++) {
                aux = aux.replace(S,"S");
            }
        }
    }
    for (let i = 0; i < n; i++) {
        aux = aux.replace("IGUAL A","<-->");
        aux = aux.replace("SI Y SOLO SI","<-->");
        aux = aux.replace("SI-ENTONCES","-->");
        aux = aux.replace("SI ENTONCES","-->");
        aux = aux.replace("ENTONCES","-->");
        aux = aux.replace("NO","~");
        aux = aux.replace("Y","^");
        aux = aux.replace("O","v");
    }

    document.getElementById('wff').innerHTML=aux;
}
function evaluar(){
    let wff = document.getElementById('wff').innerHTML;
    console.log(utf8_decode(wff));
}
function and(p,q){
    if(p==true && q==true){
        console.log(`It's true `);
        return true;
    }else if(p==true && q==false){
        console.log(`It's false`);
        return false;
    }else if(p==false && q==true){
        console.log(`It's false`);
        return false;
    }else if(p==false && q==false){
        console.log(`It's false`);
        return false;
    }
}
function or(p,q){
    if(p==true && q==true){
        console.log(`It's true `);
        return true;
    }else if(p==true && q==false){
        console.log(`It's true `);
        return true;
    }else if(p==false && q==true){
        console.log(`It's true `);
        return true;
    }else if(p==false && q==false){
        console.log(`It's false`);
        return false;
    }
}
function not(p){
    if(p==true){
        console.log(`It's false`);
        return false;
    }
    else{
        console.log(`It's true `);
        return true;
    }
}
function not2(p,q){
    if(p==true && q==true){
        console.log(`It's false p & false q`);
        return [false,false];
    }else if(p==true && q==false){
        console.log(`It's false p & true q`);
        return [false,true];
    }else if(p==false && q==true){
        console.log(`It's true p & false q`);
        return [true,false];
    }else if(p==false && q==false){
        console.log(`It's true p & true q`);
        return [true,true];
    }
}
function imp(p,q){
    if(p==true && q==true){
        console.log(`It's true `);
        return true;
    }else if(p==true && q==false){
        console.log(`It's false`);
        return false;
    }else if(p==false && q==true){
        console.log(`It's true `);
        return true;
    }else if(p==false && q==false){
        console.log(`It's true `);
        return true;
    }
}
function bico(p,q){
    if(p==true && q==true){
        console.log(`It's true `);
        return true;
    }else if(p==true && q==false){
        console.log(`It's false`);
        return false;
    }else if(p==false && q==true){
        console.log(`It's false`);
        return false;
    }else if(p==false && q==false){
        console.log(`It's false`);
        return false;
    }
}
function excepcion(word, next_word){
    if (word === next_word){
        return true;
    }else {
        return false;
    }
}
function noPalabras(texto){
    return texto.replace(/[ ]+/g," ");
}