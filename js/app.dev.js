const getHora = () => {
    const fecha = new Date();    
    const tiempo = {
        hora: fecha.getHours(),
        minutos: fecha.getMinutes(),
        segundos: fecha.getSeconds()
    };
if (tiempo.hora < 10) {

    tiempo.hora = "0"+tiempo.hora;
    document.querySelector(".reloj").innerHTML = tiempo.hora+":"+tiempo.minutos+":"+tiempo.segundos;
    
} else {
    
    document.querySelector(".reloj").innerHTML = tiempo.hora+":"+tiempo.minutos+":"+tiempo.segundos;
  
}

if (tiempo.minutos < 10) {

    tiempo.minutos = "0"+tiempo.minutos;
    document.querySelector(".reloj").innerHTML = tiempo.hora+":"+tiempo.minutos+":"+tiempo.segundos;
    
} else {
    
    document.querySelector(".reloj").innerHTML = tiempo.hora+":"+tiempo.minutos+":"+tiempo.segundos;
  
}

if (tiempo.segundos < 10) {

    tiempo.segundos = "0"+tiempo.segundos;
    document.querySelector(".reloj").innerHTML = tiempo.hora+":"+tiempo.minutos+":"+tiempo.segundos;
    
} else {
    
    document.querySelector(".reloj").innerHTML = tiempo.hora+":"+tiempo.minutos+":"+tiempo.segundos;
  
}

};

setInterval(getHora, 100);

