import "./ListaOpciones.css"
import { useState } from "react"

const ListaOpciones = (props) => {

 const [valor, actualisarValor] = useState("")
 // Metodo Map    map -> arreglo.map( (nombreArreglo, poscicion) => {
 // return <option> </option>      
 //})
 const manejarCambio = (e) => {
  console.log("cambio",e.target.value)
  props.actualizarTipo(e.target.value)

  }




return <div className="lista-opciones">

<label> Categoria </label>
<select value={props.valor} onChange={manejarCambio}> 
  <option value="" disabled defaultValue="" hidden > Seleccionar Categoria </option>

{props.categoria.map((categoria, index) =>  <option key={index} value={categoria} >  {categoria} </option>)}

</select>


</div>

}

export default ListaOpciones