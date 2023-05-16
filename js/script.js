const propiedades = JSON.parse(localStorage.getItem("propiedades"))||[]
const favoritos = JSON.parse(localStorage.getItem("favoritos"))||[]

const llamadaPropiedadesCargadas = async() => {
    try{
        const resp = await fetch (`./js/propiedades.JSON`)
        const propiedades = await resp.json()
        const propiedadesGuardadas = localStorage.setItem("propiedades", JSON.stringify(propiedades))
    }catch(error){
        console.log ("volver a intentar")
    }
}


const crearPropiedad = () => {
    propiedades.forEach((propiedad) => {
        const contenedorPropiedades = document.querySelector("#muestraPropiedades")
        const tarjetaPropiedad = document.createElement("article")
        tarjetaPropiedad.className = "propiedad"
        tarjetaPropiedad.innerHTML = `<img src=".././assets/img/propiedades/${propiedad.imagen}" alt="">
        <h6>${propiedad.operacion}</h6>
        <h2>${propiedad.barrio}</h2>
        <h5>${propiedad.departamento}</h5>
        <p>${propiedad.dormitorios} dormitorios</p>
        <p>${propiedad.baños} baños</p>
        <p>${propiedad.moneda} ${propiedad.importe}</p>
        <button type="submit" class="btn btn-warning btnFav" id="propiedad${propiedad.id}">Agregar a favoritos</button>`
       
        contenedorPropiedades.append(tarjetaPropiedad)

    })
}



const agregarFavoritos = () => {
    propiedades.forEach((propiedad) => {
      const botonAgregarFavoritos = document.querySelector(`#propiedad${propiedad.id}`)
      botonAgregarFavoritos.addEventListener("click", () => {
        favoritos.push({
          id: propiedad.id,
          barrio: propiedad.barrio,
          dormitorios: propiedad.dormitorios,
          baños: propiedad.baños,
          departamento: propiedad.departamento,
          imagen: propiedad.imagen,
          moneda: propiedad.moneda,
          importe: propiedad.importe,
          operacion: propiedad.operacion,
        })
        const favGuardados = localStorage.setItem("favoritos",JSON.stringify(favoritos))
        Toastify({

            text: "Agregado a favoritos",
            duration: 2000
            }).showToast();
    })
  
  
    })


  }


llamadaPropiedadesCargadas()
crearPropiedad()
agregarFavoritos()





