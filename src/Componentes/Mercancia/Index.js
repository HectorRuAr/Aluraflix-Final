import "./Mercancia.css"
import { RiDeleteBinLine } from "react-icons/ri";


const Mercancia = (props) => {

    const { nombre, precio, foto, id } = props.datos
    const { eliminarProducto } = props

return <div className="mercancia">
 
 <div className="encabezado">  

    <RiDeleteBinLine className="eliminar" onClick={ () => eliminarProducto(id) }/> 

 </div>

 <img src={foto}  alt=" Mercancia " />

 <div className="info">
 <h4> {nombre} </h4>
 <h5> ${precio} </h5>
 </div>

</div>


}

export default Mercancia