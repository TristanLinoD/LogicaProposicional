

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
    let aux = C.replace("SI Y SOLO SI","<-->");
    aux = aux.replace("IGUAL A","<-->");
    aux = aux.replace("SI-ENTONCES","-->");
    aux = aux.replace("SI ENTONCES","-->");
    aux = aux.replace("ENTONCES","-->");
    aux = aux.replace("NO","~");
    aux = aux.replace("Y","^");
    aux = aux.replace("O","v");

    //Bien
    aux = aux.replace(P,"P");
    aux = aux.replace(Q,"Q");
    aux = aux.replace(R,"R");
    aux = aux.replace(S,"S");
    document.getElementById('wff').innerHTML=aux;
    /*const dict = {
        P:"P",
        Q:"Q",
        R:"R",
        S:"S",
        NO:"~",
        Y:"^",
        O:"v",
        ENTONCES:"-->",
        SIYSOLOSI:"<-->",
        SIENTONCES:"-->",
        IGUALA:"<-->"
    }
    console.log(`P: ${P}`);
    console.log(`Q: ${Q}`);
    console.log(`R: ${R}`);
    console.log(`S: ${S}`);
    console.log(`C: ${C}`);*/
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