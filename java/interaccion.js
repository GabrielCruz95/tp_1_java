alert("El siguiente programa, simula el calculo de algunos servicios de la pagina para que el cliente sepa de antemano un aproximado a su tratamiento deseado ");
let n=0;
do{
    alert("Servicios para consultar precios aprox: 1-Ortodoncia 2-Extraccion de diente 3-Protesis 4-salir")
    n = parseInt(prompt("Ingrese alguna opcion:"));
    switch(n){
        case 1: 
            ortodoncia();
            break;
        case 2: 
            extraccion();
            break;
        case 3: 
            protesis();
            break;
        case 4: 
            alert("Saliendo.");
            break;
        default: 
            alert("Ingrese una opcion correcta");
            break;
    }
}while(n != 4);

function ortodoncia(){
    let iva= 1.2;
    let ortodon=35600;
    let resul= ortodon * iva;
    alert("El precio para la ortodoncia es: "+ resul +" Pesos Argentinos. Precio efectivo : "+ ortodon + " Pesos Argentinos");
}
function extraccion(){
    alert("Que diente esta interesado en extraccion: 1-molar 2-premolar 3-incisivos 4-caninos");
    let n = parseInt(prompt("Ingrese una opcion: "));
    let can= 5000;
    let molar= 10000;
    let inci= 6000;
    let premo= 8000;
    let iva= 1.2;
        switch(n){
            case 1: 
                let re1 = molar * iva ;
                alert("El precio por diente molar mas iva es: "+ re1 +" Pesos Argentinos. Precio efectivo : "+ molar + " Pesos Argentinos");
                break;
            case 2: 
                let re2 = premo * iva ;
                alert("El precio por diente premolar mas iva es: "+ re2 +" Pesos Argentinos. Precio efectivo : "+ premo + " Pesos Argentinos");
                break;
            case 3: 
                let re3= inci * iva ;
                alert("El precio por diente incisivo mas iva es: "+ re3 +" Pesos Argentinos. Precio efectivo : "+ inci + " Pesos Argentinos");
                break;
            case 4: 
                let re4= can * iva ;
                alert(`El precio por diente canino mas iva es: ${re4} Pesos Argentinos. Precio efectivo : ${can} Pesos Argentinos` );
                break;
            default: 
                alert("Ingrese una opcion correcta");
                break;
        }
}
function protesis(){
    alert("Que protesis desea consultar: 1-Parcial 2-Completa");
    let n= parseInt(prompt("Ingrese una opcion: "));
    let par= 20000;
    let comp= 40000;
    let iva= 1.2;
    switch(n){
        case 1:
            let re=par * iva;
            alert("El precio de la protesis parcial mas iva es: "+re+ " Pesos Argentinos. Precio en Efectivo: "+par+" Pesos Argentinos");
            break;
        case 2:
            let re2=comp * iva;
            alert("El precio de la protesis completa mas iva es: "+re2+ " Pesos Argentinos. Precio en Efectivo: "+comp+" Pesos Argentinos");
            break;
        default:
            alert("Ingrese una opcion correcta");
            break;    
    }

}
