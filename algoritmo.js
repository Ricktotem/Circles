var superior = [1,2,3,4,5]
var inferior = [6,7,8,9]
var mySet = new Set();

for(var i = 3 ; i < 9; i++){
    mySet.add(i)
}

function algoritmo(){
    var flag = recorrido(9,false);
    if (flag){
        console.log("existen dos numeros que me dan 9")
    }
}

function recorrido(num,flag){ //funcion que muestra todas las convinaciones de a pares de un array
    var posicion1 = 0;
    var posicion2 = 1;
    var myArr = Array.from(mySet);
    while (!flag && (posicion2 <= myArr.length && posicion1 < (myArr.length -1))){
        if (posicion2 == myArr.length){
            if (posicion1 == posicion2 - 1){
                console.log(myArr[posicion1]+ " , " + myArr[posicion2]);
                flag = (myArr[posicion1] + myArr[posicion2] == num);
                posicion1++;
            }else{
                posicion1++;
                posicion2 = posicion1 + 1;
            }
        }else{
            console.log(myArr[posicion1]+ " , " + myArr[posicion2]);
            flag = (myArr[posicion1] + myArr[posicion2] == num);
            posicion2++;
        }
    }
    return flag;
}