import { useCartContext } from "../../Cart/carContent"


function Cart() {
  const { cart, vaciarCarrito, precioTotal} = useCartContext()

  return (
    <div>
      <ul>
        {
        cart.map(item => 
                <li key={item.id} >

          <div className="w-50 col-4">
          <img src= {item.imageURL} alt=""  className="w-25"/>
          </div>
          <div className="row mt-5">

          <h3>nombre:{item.producto}</h3>
          <h3>precio: {item.precio}</h3>
          <h3> caracteristica: {item.caracteristica}</h3>
          <h3>cantidad: {item.cantidad}</h3>
          <h3>precio Total: {precioTotal}</h3>
          </div>
          

                </li> )
        }
      </ul>
<div>
  <button className="btn btn-primary" onClick={vaciarCarrito}> Vaciar Carrito</button>

</div>

    </div>
  )
}

export default Cart