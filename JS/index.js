

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