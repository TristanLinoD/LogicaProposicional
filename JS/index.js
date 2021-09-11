

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
    let P = noPalabras(document.getElementById("sentencia_p").value.toUpperCase().trim());
    let Q = noPalabras(document.getElementById("sentencia_q").value.toUpperCase().trim());
    let R = noPalabras(document.getElementById("sentencia_r").value.toUpperCase().trim());
    let S = noPalabras(document.getElementById("sentencia_s").value.toUpperCase().trim());
    const C = noPalabras(document.getElementById("sentencia_c").value.toUpperCase().trim());
    let n = tamanio(C);
    let aux = C;
    if(P !== ""){
        P = sentencia(P);
        console.log(`${P} ---P`);
        for (let i = 0; i < n; i++) {
            aux = aux.replace(P,"P");
        }
    }
    if(Q !== ""){
        Q = sentencia(Q);
        console.log(`${Q} ---Q`);
        for (let i = 0; i < n; i++) {
            aux = aux.replace(Q,"Q");
        }
    }
    if(R !== ""){
        R = sentencia(R);
        console.log(`${R} ---R`);
        for (let i = 0; i < n; i++) {
            aux = aux.replace(R,"R");
        }
    }
    if(S !== ""){
        S = sentencia(S);
        console.log(`${S}---S`);
        for (let i = 0; i < n; i++) {
            aux = aux.replace(S,"S");
        }
    }

    for (let i = 0; i < n+1; i++) {
        if(aux === aux.replace("IGUAL A","<-->"))
            break;
        else
            aux = aux.replace("IGUAL A","<-->");
    }
    for (let i = 0; i < n+1; i++) {
        if(aux === aux.replace("SI Y SOLO SI","<-->"))
            break;
        else
            aux = aux.replace("SI Y SOLO SI","<-->");
    }
    for (let i = 0; i < n+1; i++) {
        if(aux === aux.replace("SI-ENTONCES","-->"))
            break;
        else
            aux = aux.replace("SI-ENTONCES","-->");
    }
    for (let i = 0; i < n+1; i++) {
        if(aux === aux.replace("SI ENTONCES","-->"))
            break;
        else
            aux = aux.replace("SI ENTONCES","-->");
    }
    for (let i = 0; i < n+1; i++) {
        if(aux === aux.replace("ENTONCES","-->"))
            break;
        else
            aux = aux.replace("ENTONCES","-->")
    }
    for (let i = 0; i < n+1; i++) {
        console.log(aux);
        if(aux === aux.replace("NO","~"))
            break;
        else
            aux = aux.replace("NO","~");
    }
    for (let i = 0; i < n+1; i++) {
        if(aux === aux.replace("Y","^"))
            break;
        else
            aux = aux.replace("Y","^");
    }
    for (let i = 0; i < n+1; i++) {
        if(aux === aux.replace("O","v"))
            break;
        else
            aux = aux.replace("O","v");
    }
    aux.trim();
    let aux2 = aux[aux.length-1];
    let aux3 = aux.substring(0, aux.length-1);
    console.log("----------++++++++");
    console.log(aux2);
    console.log(aux3);
    aux = aux3+ " " + aux2;
    console.log(aux);
    document.getElementById('wff').innerHTML = aux;
}
function evaluar(){
    let resultado = "";
    let wff = document.getElementById('wff').innerHTML;
    let n = tamanio(wff);
    for (let i = 0; i < n; i++) {
        wff = wff.replace("&gt;", ">");
        wff = wff.replace("&lt;", "<");
    }
    console.log(wff);
    let valor_p = document.getElementById('valor_p').checked;
    let valor_q = document.getElementById('valor_q').checked;
    let valor_r = document.getElementById('valor_r').checked;
    let valor_s = document.getElementById('valor_s').checked;
    for(let i=0; i < (n); i++){
        wff = wff.replace("P", valor_p === true ? "T" : "F");
        wff = wff.replace("Q", valor_q === true ? "T" : "F");
        wff = wff.replace("R", valor_r === true ? "T" : "F");
        wff = wff.replace("S", valor_s === true ? "T" : "F");
    }
    document.getElementById('pasos__solucion').innerHTML = wff;
    resultado += wff + "<br>";
    for (let i = 0; i < n; i++) {
        if(wff[i] !== " "){
            if(wff.indexOf("~") !== -1){ // ~|espacio|letra
                indice = wff.indexOf("~");
                let word = not(wff[indice+2]) === true ? "T" : "F";
                let corte = wff.slice(indice, indice+3);
                console.log(`corte: ${corte}`);
                wff = wff.replace(corte, word);
                console.log(wff);
                resultado += wff + "<br>";
                i = 0;
            }else if(wff[i] === "T" || wff[i] === "F"){ // T ^ ~ F == 
                if(wff[i+2] === "^"){
                    let word = and(wff[i],wff[i+4]) === true ? "T" : "F";
                    wff = wff.substring(i+5,wff.length);
                    wff =  word + wff;
                    console.log(wff);
                    resultado += wff + "<br>";
                    i = 0;
                }else if(wff[i+2] === "v"){ // T v F
                    let word = or(wff[i],wff[i+4]) === true ? "T" : "F";
                    wff = wff.substring(i+5,wff.length);
                    wff =  word + wff;
                    console.log(wff);
                    resultado += wff + "<br>";
                    i = 0;
                }else if(wff[i+2] === "-"){ // T --> F
                    let word = imp(wff[i],wff[i+6]) === true ? "T" : "F";
                    wff = wff.substring(i+7,wff.length);
                    wff =  word + wff;
                    console.log(wff);
                    resultado += wff + "<br>";
                    i = 0;
                }else if(wff[i+2] === "<"){ // T <--> F
                    let word = imp(wff[i],wff[i+7]) === true ? "T" : "F";
                    wff = wff.substring(i+8,wff.length);
                    wff =  word + wff;
                    console.log(wff);
                    resultado += wff + "<br>";
                    i = 0;
                }
            }
        }
    }
    console.log(resultado);
    document.getElementById('pasos__solucion').innerHTML = resultado;
}
function and(p,q){
    if(p === "T" && q === "T"){
        console.log(`It's true `);
        return true;
    }else if(p === "T" && q === "F"){
        console.log(`It's false`);
        return false;
    }else if(p === "F" && q === "T"){
        console.log(`It's false`);
        return false;
    }else if(p === "F" && q === "F"){
        console.log(`It's false`);
        return false;
    }
}
function or(p,q){
    if(p === "T" && q === "T"){
        console.log(`It's true `);
        return true;
    }else if(p === "T" && q === "F"){
        console.log(`It's true `);
        return true;
    }else if(p === "F" && q === "T"){
        console.log(`It's true `);
        return true;
    }else if(p === "F" && q === "F"){
        console.log(`It's false`);
        return false;
    }
}
function not(p){
    if(p === "T"){
        console.log(`It's false`);
        return false;
    }
    else{
        console.log(`It's true `);
        return true;
    }
}
function not2(p,q){
    if(p === "T" && q === "T"){
        console.log(`It's false p & false q`);
        return [false,false];
    }else if(p === "T" && q === "F"){
        console.log(`It's false p & true q`);
        return [false,true];
    }else if(p === "F" && q === "T"){
        console.log(`It's true p & false q`);
        return [true,false];
    }else if(p === "F" && q === "F"){
        console.log(`It's true p & true q`);
        return [true,true];
    }
}
function imp(p,q){
    if(p === "T" && q === "T"){
        console.log(`It's true `);
        return true;
    }else if(p === "T" && q === "F"){
        console.log(`It's false`);
        return false;
    }else if(p === "F" && q === "T"){
        console.log(`It's true `);
        return true;
    }else if(p === "F" && q === "F"){
        console.log(`It's true `);
        return true;
    }
}
function bico(p,q){
    if(p === "T" && q === "T"){
        console.log(`It's true `);
        return true;
    }else if(p === "T" && q === "F"){
        console.log(`It's false`);
        return false;
    }else if(p === "F" && q === "T"){
        console.log(`It's false`);
        return false;
    }else if(p === "F" && q === "F"){
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
function tamanio(string) {
    return string.split(" ").length;
}
function corte(string, indice, fin){
    let corte = string.slice(indice, indice+fin);
    return string.replace(corte, " ");
}
function sentencia(frase){ // Y corro Y nado Y
    for (let i = 0; i < frase.length; i++) {
        if(frase.indexOf(" Y ") !== -1 || frase.indexOf("Y ") !== -1 || frase.indexOf(" Y") !== -1){
            if(frase.indexOf(" Y ") !== -1){
                indice = frase.indexOf(" Y ");
                frase = corte(frase, indice, 3)
            }else{
                if(frase.indexOf("Y ") !== -1 && frase.indexOf("Y ") === 0){
                    indice = frase.indexOf("Y ");
                    frase = corte(frase, indice, 2)
                }else if(frase.indexOf(" Y") !== -1 && frase.indexOf(" Y") === frase.length-2){
                    indice = frase.indexOf(" Y")
                    frase = corte(frase, indice, 2)
                }
            }
            
        }
        if(frase.indexOf(" O ") !== -1 || frase.indexOf("O ") !== -1 || frase.indexOf(" O") !== -1){
            if(frase.indexOf(" O ") !== -1){
                indice = frase.indexOf(" O ");
                frase = corte(frase, indice, 3)
            }else{
                if(frase.indexOf("O ") !== -1 && frase.indexOf("O ") === 0){
                    indice = frase.indexOf("O ");
                    frase = corte(frase, indice, 2)
                }else if(frase.indexOf(" O") !== -1 && frase.indexOf(" O") === frase.length-2){
                    indice = frase.indexOf(" O")
                    frase = corte(frase, indice, 2)
                }
            }
            
        }
        if(frase.indexOf(" NO ") !== -1 || frase.indexOf("NO ") !== -1 || frase.indexOf(" NO") !== -1){
            if(frase.indexOf(" NO ") !== -1){
                indice = frase.indexOf(" NO ");
                frase = corte(frase, indice, 4)
            }else{ 
                if(frase.indexOf("NO ") !== -1 && frase.indexOf("NO ") === 0){
                    indice = frase.indexOf("NO ");
                    frase = corte(frase, indice, 3)
                }else if(frase.indexOf(" NO") !== -1 && frase.indexOf(" NO") === frase.length-3){
                    indice = frase.indexOf(" NO")
                    frase = corte(frase, indice, 3)
                }
            }
        }
    }
    return frase;
}