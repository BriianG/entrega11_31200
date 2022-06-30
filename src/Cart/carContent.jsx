import { createContext, useState, useContext } from 'react' 

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({children}) => {
    // estados y funciones

const [cart, setCart] = useState([]);

const addToCart = (objProduct) => {


    let carritoPrevio = ([...cart,]);

    //some trae un boolean true o false, te permite comprar mas cantidades y no duplica
    if(carritoPrevio.some((item) => item.producto.id === objProduct.producto.id))
    
    {carritoPrevio.find((item)=> item.producto.id === objProduct.producto.id).cantidad += objProduct.cantidad
    setCart (carritoPrevio);
    }else {
    setCart([...cart, objProduct])
    }};

//vaciar carrito lo resetea
const vaciarCarrito = () => setCart([])

//ver
    function precioTotal() {
        let total = 0;

        cart.forEach((newProduct) => {

            total +=
                parseInt(newProduct.producto.precio) * parseInt(newProduct.producto.cantidad);
        });

        return parseInt(total);
    }



const iconCart  = () => cart.reduce((acum, valor) => acum + valor.cantidad, 0);


    return (
        <CartContext.Provider 
        value={{
        cart,
        addToCart,
        vaciarCarrito,
        precioTotal,
        iconCart
        }}
        >
            {children}


        </CartContext.Provider>

    )
}