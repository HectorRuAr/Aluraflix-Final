import { useState } from "react"
import "./MasProd.css"

const MasProd = (props) => {

//ejemplo de useState const [nombreVariable, funcionActualiza] = useState(valorInicial)
/*const [mostrar,actualizarMostrar] = useState(true)
    const manejarClick = ()  => {
        console.log("Mostrar/Ocultar elemento")
        actualizarMostrar(!mostrar)
    }
*/

return <section className="BotonAgregar">

<img src="./img/Logo.svg" />

<div className="areaBotones"> 

<div className="BotonHome"> 

<img src="./img/Button.png" alt="logo Aluraflix"  onClick={props.cambiarMostrar} />

</div>

    
<div className="botonFormulario">
    
<img src="./img/Button2.png" alt="Imagen de Cofre" onClick={props.cambiarMostrar} /> 
    
</div>

</div>
    
    

</section>

}

export default MasProd