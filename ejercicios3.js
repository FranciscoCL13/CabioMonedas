
// CAMBIO CON MONEDAS de manera más óptima


function cambioMonedas(){
    let dinero = [1,2,5,10,20,50];
    let pagoDinero = prompt("Cuanto cambio a pagar?: ");
    console.log("Total a pagar: "+pagoDinero);
    let i = dinero.length;
    let selecDinero = [];
    while (pagoDinero > 0){
        let pay = pagoDinero - dinero[i];
        if (pay >= 0){
            pagoDinero = pay;
            selecDinero.push(dinero[i]);
        }else{
            i = i - 1;
        }
    }
    return selecDinero;
}

let monedaSeleccionada = cambioMonedas();
console.log("Paga con monedas de: "+ monedaSeleccionada);


//let monedas = [1, 5, 10];

//let porpagar;
//let i = 2;

  //console.log(i);
/*
PRUEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA



  function cambioMonedas() {
    let dinero = [1,2,5,10,20,50];

    let cambio = prompt("Cuanto se tiene que pagar?: ");
    let cambiototal = parseInt(cambio);
    let i = dinero.length - 1;
    let selecDine = [];
    let pagado;
    
      while (pagado>0) {
          pagado = cambiototal - dinero[i];
          selecDine.push(dinero[i]);
          console.log("Moneda seleccionada= " + selecDine[i]);
          if (pagado >= 0){
              cambiototal = pagado;
              selecDine.push(dinero[i]);
          } else {
              i = i - 1;
          }
      }
      return selecDine;
  }
 
 let selector = selecDine;
 console.log(selector);
 let monedaUsada = cambioMonedas();
 console.log(monedaUsada);


*/
/*
-------------------------
    PRUEBA 4
 
    do  {
        if (cambiototal > 0 && cambiototal >= monedas[i]){
            
        console.log("Por pagar: " + cambiototal);
    
        cambiototal = cambiototal - monedas[i];
        
        console.log("moneda seleccionada : " + monedas[i]);
        if (cambiototal > 0 && cambiototal < monedas[i]) {
            
            monedas[i]= monedas[i-1];
        } 
       
        }else{ console.log("Cambio pagado");}
            

    }while(cambiototal > 0);

    
   -------------------------- 
    PRUEBRA 3


 do  {

    
        cambiototal = cambiototal - monedas[i];
        console.log("Por pagar do: " + cambiototal);
        
    
        if (cambiototal >= 0) {
            console.log("Por pagar if: " + cambiototal);
            console.log("moneda seleccionada : " + monedas[i]);
        } else {
            cambiototal + monedas[i];
            i - 1;

        }
    }while(cambiototal > 0);



-------------------
do{
    if (sum < total){
        sum+= parseInt(mon3);
        a++;
        console.log(a);
    }else if (sum < total){
        sum+= parseInt(mon2);
        b++;
    }else if (sum < total){
        sum+= parseInt(mon1);
        c++;
    }
    console.log("monedas de 10: "+ a +" monedas de 5: "+ b +" monedas de 1: "+ c );

} while (sum <= total);




//------------------------------------------------


let mon1 = 1;
   let mon2 = 5;
   let mon3 = 10;
   let a, b, c;
   
let cambio = prompt("Cuanto daras de cambio?: ");
let total= 0;

do{
    for(a= mon3; a > total; a++)
    total += a;
    console.log(total);
    for(b= mon2; b > total; b++);
    total += b;
    console.log(b);
    for(c= mon1; c > total; c++);
    console.log(c);
}while (total <= cambio);
*/