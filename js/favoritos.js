const contenedorFavoritos = document.querySelector ("#favoritos")
const favoritosRecuperado = JSON.parse(localStorage.getItem("favoritos"))||[]
const favoritoTitulo = document.querySelector("#favTitulo")


const verFavoritos = () => {
    favoritosRecuperado.forEach((favorito) => {
        const tarjetaFavorito = document.createElement("section")
        tarjetaFavorito.className = ("tarjetaFavorito")
        tarjetaFavorito.innerHTML = `<table>
        <tr>
        <td> <img src=".././assets/img/propiedades/${favorito.imagen}" alt=""></td>
        <th>Operacion</th>
        <td>${favorito.operacion}</td>
        <th>Barrio</th>
        <td>${favorito.barrio}</td>
        <th>Dormitorios</th>
        <td>${favorito.dormitorios}</td>
        <th>Baños</th>
        <td>${favorito.baños}</td>
        <th>Valor</th>
        <td>${favorito.moneda} ${favorito.importe}</td>
        <th><button type="submit" class="btn btn-danger btnEliminar" id="${favorito.id}">Eliminar</button></th>
        <tr>
        </table>`

        contenedorFavoritos.append(tarjetaFavorito)
 
    })
 } 




const mostrarFavoritosEnTitulo = () =>{
    const numeroFav = document.createElement("span")
    numeroFav.className = "cantidadFavorito"
    numeroFav.innerText = `${favoritosRecuperado.length}` 
    favoritoTitulo.append(numeroFav)
}






verFavoritos()
mostrarFavoritosEnTitulo()