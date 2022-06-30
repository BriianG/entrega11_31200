import {Button} from 'react-bootstrap'
import { useCartContext } from '../../context/CartContext'

const CartTable = ({item}) => {
    const { removeProduct } = useCartContext()
    
    return (
                        <tr>
                            <td><img style={{width: "100px", height:"100px"}} src={item.producto.imageURL}/></td>
                            <td>{item.producto.producto}</td>
                            <td>{item.cantidad}</td>
                            <td>${item.producto.precio}</td>
                            <td><Button variant="danger" onClick={()=>{removeProduct(item.producto.id)}}>
                                X
                            </Button></td>
                        </tr>
  )
}

export default CartTable