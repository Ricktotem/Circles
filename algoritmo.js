var boton = document.getElementById("main-button");
boton.addEventListener("click",crearFilas);

var mySet= new Set();
for(var i = 3; i<9;i++){
    mySet.add(i);
}

var mainArr = [3,4,5,6,7,8];
var sup = [1,2,0,0,0];
var inf = [9,0,0,0];

function test(){
    var x = [1,2,4,5,7];
    console.log(recorrido(9,x))
}

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
    var con_total = 0;
    var con_pos = 0;
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