function cotizadorDeAbertura(ancho, alto, cantidad, abertura, tipoDeVidrio, colocacion) {
    let dimensiones = ancho * alto
    console.log(dimensiones)
    let sumadeselecciones = dimensiones + abertura + tipoDeVidrio + colocacion
    console.log(sumadeselecciones)
    let codigoConCantidad = sumadeselecciones + cantidad
    console.log(codigoConCantidad)
    
    
    if (sumadeselecciones === "oono") {
        alert("debe solicitar cotizacion a: aberturasmisued@outlook.com")
    }
    
    if (cantidad === 1) {
        alert("Su producto ha sido generado, por favor inserte su codigo generado en el formulario de contacto:"+" "+sumadeselecciones)
    } else if (cantidad>1) {
        alert("Sus productos han sido generados con un codigo, por favor inserte el mismo en el formulario de contacto:"+" "+codigoConCantidad)
    } else {
        alert("Usted ha ingresado una cantidad no valida")
    }
    
}


do  {
    let anchoDeAbertura =parseInt(prompt("Ingrese ancho de su abertura (en metros)"))
    let altoDeAbertura =parseInt(prompt("Ingrese alto de su abertura (en metros)"))
    let cantidadDeAberturas = parseInt(prompt("Ingrese cantidad"))
    let AberturaSeleccionada = prompt("Ingrese tipo de abertura ( (A)VENTANA CORREDIZA (B)PUERTA CORREDIZA (C)TECHO VIDRIADO (O)OTRO )")
    let VidrioSeleccionado = prompt("Ingrese tipo de vidrio ( (L)laminado (D) DVH (F) FLOAT/CRUDO (O)OTRO )")
    let colocacionElegida = prompt("¿Desea colocacion? (SI / NO)")
    
    cotizadorDeAbertura(anchoDeAbertura, altoDeAbertura, cantidadDeAberturas, AberturaSeleccionada, VidrioSeleccionado, colocacionElegida)

    var ReutilizarGeneradorDecodigo = prompt("¿desea generar otro producto? ( SI / NO )")
    
    if (ReutilizarGeneradorDecodigo === "no" || ReutilizarGeneradorDecodigo === "NO") {
        alert("Gracias por su valiosa consulta, ¡hasta pronto!")
    }
} while ((ReutilizarGeneradorDecodigo === "SI" || ReutilizarGeneradorDecodigo === "si"))
