cuadradoBoton.addEventListener("click", function(){
    titulo.innerHTML="Cuadrado";
    botonesOcultos()
    opcionescuadrado()
});

circuloBoton.addEventListener("click", function(){
    titulo.innerHTML="Circulo";
    botonesOcultos()
    opcionescirculo()
});

trianguloBoton.addEventListener("click", function(){
    titulo.innerHTML="Triangulo";
    botonesOcultos()
    opcionestriangulo()
});

botonBack.addEventListener("click", function(){
    botones.style.display="block";
    titulo.innerHTML="Seleccione la figura";
    botonBack.style.display="none";
    botonOpcionesCuadrado.style.display="none";
    botonOpcionesCirculo.style.display="none";
    botonOpcionesTriangulo.style.display="none";
})
