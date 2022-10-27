
/*----- Rutas Json ------*/

const tarot = "json/tarot.json";

/*------Inicio-----*/

const seccion = document.getElementById("seccion");
const inicio = document.createElement("div");
inicio.innerHTML=`
<div class="caja imagenTarot" id="imagenTarot">
    <img src="img/inicio1.png">
</div>
<div class="caja texto">
    <h1>Elije una carta para descubrir el mensaje del tarot</h1>
<div class="caja cartas">
    <div class="carta">
        <img src="img/carta.jpg"> 
    </div>
    <div class="carta">
        <img src="img/carta.jpg"> 
    </div>
    <div class="carta">
        <img src="img/carta.jpg"> 
    </div>
</div>                        
</div>                                                           
`
inicio.classList.add("tarot");
seccion.appendChild(inicio);

const cartasTarot = document.getElementsByClassName("carta");                        
                
fetch(tarot)
    .then(respuesta => respuesta.json())
    .then(carta => {        

        for(let i = 0; i < cartasTarot.length; i++){
            cartasTarot[i].addEventListener('click', leerCarta);  

        }                       

        function leerCarta(){
            let numSuerte = (Math.round(Math.random() * 22));
            console.log(numSuerte);
            let cartaSuerte = carta.find(carta=> carta.id === numSuerte);  
            console.log(cartaSuerte);

            let cartaElegida = document.createElement("div")
            cartaElegida.innerHTML = `
            <div class="caja imagenCarta" id="imagenCarta">
                <img src=${cartaSuerte.img}>
            </div>
            <div class="caja texto">
                <h1><strong>${cartaSuerte.nombre}</strong></h1>
                <p>${cartaSuerte.mensaje}</p>  
            </div>            
            <div class="botones" id="botonesInicio">
                <div class="boton" id="salir">Salir</div>    
            </div>                              
            `
            seccion.removeChild(inicio);
            cartaElegida.classList.add("cartaElegida");                
            seccion.appendChild(cartaElegida);

            const salir = document.getElementById("salir");
            salir.addEventListener("click", ()=>{
                seccion.appendChild(fin);
                seccion.removeChild(cartaElegida);
            })
        }                                  
})
.catch(error => console.log(error))
.finally(() => console.log("Proceso Finalizado"));

const fin = document.createElement("div");
fin.innerHTML=`
<div class="caja imagenFin">
    <img src="img/fin.jpg">
</div>
<div class="caja texto">
    <p class="despedida">¡Hasta pronto!</p> 
                         
</div>
<p>Hecho con <span class="material-symbols-outlined">
    favorite</span> por <a href="https://amarantac.github.io/portafolio/">Amaranta</a> </p>  
<p class="creditos">Ilustraciones por <a href="https://www.cocorrina.com/">cocorrina</a> </p>                                                          
`
fin.classList.add("tarot");


       