const verFavoritos = () => {
    favoritos.forEach((favorito) => {
        const contenedorFavoritos = document.querySelector ("#favoritos")
        const tarjetaFavorito = document.createElement("section")
        tarjetaFavorito.className = ("tarjetaFavorito")
        tarjetaFavorito.innerHTML = `<table>
        <tr>
        <td>  <img src=".././assets/img/propiedades/${favorito.imagen}" alt="">  </td>
        <td>${favorito.barrio}</td>
        <td>${favorito.importe}</td>
        <td>${favorito.departamento}</td>
        

       
        <tr>
        </table>`

        contenedorFavoritos.append(tarjetaFavorito)

 
    })
 } 

 verFavoritos()
