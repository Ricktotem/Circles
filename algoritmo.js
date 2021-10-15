var boton = document.getElementById("main-button");
boton.addEventListener("click",crearFilas);

var mySet= new Set();
for(var i = 3; i<9;i++){
    mySet.add(i);
}

var mainArr = [3,4,5,6,7,8];
var sup = [1,2,0,0,0];
var inf = [9,0,0,0];

var arrBools = [false,false,false,false,false];
var num = 0;
var copia_sup = [];
var copia_inf = [];

// Complementos

// Fin de complementos

function recorrido(num, myArr){
    var posicion1 = 0;
    var posicion2 = 1;
    var flag = false;
    while(!flag && (posicion2 <= myArr.length && posicion1 < myArr.length -1)){
        if (posicion2 == myArr.length){
            if (posicion1 == posicion2 -1){
                flag =(myArr[posicion1]+myArr[posicion2] == num);
                posicion1++;
            } else {
                flag =(myArr[posicion1]+myArr[posicion2] == num); 
                posicion1++;
                posicion2 = posicion1 + 1;
            }
        } else {
            flag =(myArr[posicion1]+myArr[posicion2] == num);
            posicion2++;
        }
    }
return flag;
}

function crearFilas(){
    var con_total = 0; //cuenta personal de cuantas agrupaciones de numeros puedo tener
    var con_pos = 0;   // cuenta personal de cuantas agrupaciones de numeros puedo tener despues del primer filtro
    var head = 0;
    var flag = true;
    for(var i = 0; i < mainArr.length-2; i++){
        for(var l = i+1; l < mainArr.length-1;l++){
            for(var k = l+1; k < mainArr.length;k++){
                console.log(i ,l ,k); 
                completador(mainArr[i],mainArr[l],mainArr[k]);
                while(head < inf.length && recorrido(inf[head],sup)){
                    head++;
                }
                con_total++;
                if(head == inf.length){
                    con_pos++;
                    console.log("se encontro candidato");
                    for(let item of sup){
                    console.log(item)
                    }
                    console.log("debajo")
                    for(let elem of inf){
                    console.log(elem)
                    }
                }
                head = 0;
            }
        }
    }
    console.log(con_total + "total");
    console.log(con_pos + "posibles");
}

function completador(num1,num2,num3){
    var i = 1;
    sup[2] = num1;
    sup[3] = num2;
    sup[4] = num3;
    mySet.delete(num1)
    mySet.delete(num2)
    mySet.delete(num3)
    for (let item of mySet){
        inf[i] = item;
        i++;
    }
    if (!(mySet.has(num1))){
        mySet.add(num1);
    }
    if (!(mySet.has(num2))){
        mySet.add(num2);
    }
    if (!(mySet.has(num3))){
        mySet.add(num3);
    }
    i=0;
}

function secuencia(arr1,arr2){ // num iniciado en 0
    var flag = true;
    var i = 0;
    var x;
    while(flag && i+1 < arr1.length){
        x = arr1[i] + arr1[i+1];
        i++;
        if(arr2.indexOf(x) == -1){
            flag = false;
        }else{
            arr2.splice(arr2.indexOf(x),1)
        }
    }
    console.log(flag);
    return flag;
}

function sort(arr1,arrB,num){
    var flag = false;
    if(arr1.length == num){
        copiarArray(copia_inf,inf);
        return(secuencia(copia_sup,copia_inf))
    }else{
        var i = 0;
        while(!flag && (i < arr1.length)){
            if(arrB[i] == false){
                arrB[i] = true;
                if(copia_sup.length == 0){
                    copia_sup[0] = arr1[i];
                }else{
                    var x = arr1[i];
                    copia_sup.push(x);
                    console.log(copia_sup);
                }
                num++;
                flag = sort(arr1,arrB,num);
                arrB[i] = false;
                copia_sup.pop();
                num--;
            }
            i++;
        } 
        return flag;
    }
}

function arrRm(arr,num){ //remueve elemento del array
    var x = arr.indexOf(num);
    if(x > -1){
        arr.splice(x,1);
    }
    return(arr)
}

function copiarArray(arr1,arr2){
    for(var i=0; i<arr1.length; i++){
        arr2[i] = arr1[i];
    }
}

