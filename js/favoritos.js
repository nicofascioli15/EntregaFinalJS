const contenedorFavoritos = document.querySelector ("#favoritos")
const favoritosRecuperado = JSON.parse(localStorage.getItem("favoritos"))||[]


const verFavoritos = () => {
    favoritosRecuperado.forEach((favorito) => {
        const tarjetaFavorito = document.createElement("section")
        tarjetaFavorito.className = ("tarjetaFavorito")
        tarjetaFavorito.innerHTML = `<table>
        <tr>
        <td>  <img src=".././assets/img/propiedades/${favorito.imagen}" alt="">  </td>
        <th>Operacion</th>
        <td>${favorito.operacion}</td>
        <th>Departamento</th>
        <td>${favorito.departamento}</td>
        <th>Dormitorios</th>
        <td>${favorito.dormitorios}</td>
        <th>Baños</th>
        <td>${favorito.baños}</td>
        <th>Valor</th>
        <td>${favorito.moneda} ${favorito.importe}</td>
        <th>X</th>



       
        <tr>
        </table>`

        contenedorFavoritos.append(tarjetaFavorito)

 
    })
 } 

 verFavoritos()
