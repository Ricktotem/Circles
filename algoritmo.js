var superior = [1,2,3,4,5]
var inferior = [6,7,8,9]
var mySet = new Set();

for(var i = 3 ; i < 9; i++){
    mySet.add(i)
}

function algoritmo(){
    console.log(mySet);
}

function recorrido(){ //funcion que muestra todas las convinaciones de a pares de un array
    var pos1 = 0;
    var pos2 = 1;
    var myArr = Array.from(mySet);
    while (pos2 <= myArr.length && pos1 <= (myArr.length -1)){
        if (pos2 == myArr.length){
            if (pos1 == pos2-1){
                if (pos1 + 1 != myArr.length){
                console.log(myArr[pos1]+ " , " + myArr[pos2])
                }
                pos1++;
            }else{
                pos1++;
                pos2 = pos1 + 1;
            }
        }else{
            console.log(myArr[pos1]+ " , " + myArr[pos2])
            pos2++;
        }
    }
}