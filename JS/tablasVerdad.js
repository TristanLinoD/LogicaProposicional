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
function compleja(texto){
    let propcom=texto.toUpperCase();
    console.log(`Este es el texto ${propcom}`);
    let division=propcom.split(" ");
    for(let x=0;division.lenght;i++){
        if(division[x]=="NO"){
            console.log(`~`);
        }
    }
}