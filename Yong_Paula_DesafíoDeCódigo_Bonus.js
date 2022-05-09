/*BONUS NINJA: modifica tu solución para el #3 para que cualquier número en el arreglo que NO sea mayor que 5 se reemplace con una cadena de "No hay dados". Esta cadena NO debe imprimirse.
var arr3 = [6, 2, 12, 14, -24, 5, 0] */

var arr3 = [6, 2, 12, 14, -24, 5, 0];
for (var i = 0; i < arr3.length; i = i + 1) { 
    if (arr3[i]>5)        
    console.log(arr3[i]);
    else{
        console.log("No hay dados");
    }
}
