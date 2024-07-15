import Mercancia from "../Mercancia/Index"
import "./Productos.css" 

const Productos = (props) => {

const { mercancias, eliminarProducto } = props
 

return <section className="productos" > 
   
   <h3> Disponible: </h3>
   
   <div className="espacioMercancia"> 
{

 mercancias.map((mercancia, index) => <Mercancia datos={mercancia} key={index} eliminarProducto={eliminarProducto}  /> )

}
   </div>

 </section>

} 

export default Productos
