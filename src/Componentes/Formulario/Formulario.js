import { useState } from "react"
import "./Formulario.css"
import CampoTexto from "../CampoTexto"
import Boton from "../Boton/Index"
import { v4 as uuid } from "uuid"
import ListaOpciones from "../ListaOpciones/Index"



const Formulario = (props) => {

  const [nombre, actualizarNombre] = useState("")
  const [video, actualizarVideo] = useState("")
  const [descripcion, actualizarDescripcion] = useState("")
  const [id , actualizarId] = useState( uuid())
  const [categoria, actualizarCategoria] = useState("")

 const limpiarFormulario = () => {
  actualizarNombre('');
  actualizarVideo('');
  actualizarDescripcion('');
  actualizarId('');
};

  const manejarEnvio = (e) => {
    e.preventDefault()
  let datosAEnviar = {
             id: id,
         nombre: nombre,
         video: video,
         descripcion: descripcion,
         categoria: categoria
      
  }

  limpiarFormulario()

  props.registrarVideo(datosAEnviar)
  
}  
    return <section className="formulario">
        
        <form onSubmit={manejarEnvio} >
   <h2>
    Nuevo Video
   </h2>
   <h3> 
   Complete el formulario para crear una nueva tarjeta de viadeo 
   </h3>

<div className="areaSuperior">

<CampoTexto 
titulo=" Nombre" 
valor={nombre}
interno="Introdusca el nombre" 
actualisarValor={actualizarNombre} />
<ListaOpciones
  titulo="Tipo"
  valor={categoria}
  interno="Selecione la categoria"
  actualizarTipo={actualizarCategoria}
  categoria={props.categoria}
/>

</div>

<div className="areaInferior">

<CampoTexto 
titulo=" Video" 
valor={video} 
interno="Introdusca el url"
actualisarValor={actualizarVideo} /> 
<CampoTexto 
titulo="Descripcion "
valor={descripcion} 
interno="¿De que trata el video?"
actualisarValor={actualizarDescripcion} />

</div>

   <div className="contenedorBotones">

   <Boton titulo="Enviar" />
  

   </div>

        </form>

         </section>
}

export default Formulario