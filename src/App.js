import { v4 as uuid } from "uuid"
import Formulario from "./Componentes/Formulario/Formulario"
import MasProd from "./Componentes/MasProd/Index"
import { useState } from "react";
import Footer from "./Componentes/Footer/Index";
import Home from "./Componentes/Home/Index"




function App() {
  
  const [mostrarFormulario,ActualizarMostrar] = useState(false)

  const [videoSubido, actualizarVideos] = useState([{
    "id": uuid(),
    "nombre":"Quires saber que es Front End",
    "video":"https://www.youtube.com/watch?v=R9uaBxgCkyA",
    "descripcion":"Introduccion a el mundo de Front End",
    "categoria":"Inovacion y Gestion"
  },
  {
    "id": uuid(),
    "nombre":"Quires saber que es Front End",
    "video":"https://www.youtube.com/watch?v=R9uaBxgCkyA",
    "descripcion":"Introduccion a el mundo de Front End",
    "categoria":"Front End"
  },
  {
    "id": uuid(),
    "nombre":"Quires saber que es Front End",
    "video":"https://www.youtube.com/watch?v=R9uaBxgCkyA",
    "descripcion":"Introduccion a el mundo de Front End",
    "categoria":"Back End"
  },
  {
    "id": uuid(),
    "nombre":"Quires saber que es Front End",
    "video":"https://www.youtube.com/watch?v=R9uaBxgCkyA",
    "descripcion":"Introduccion a el mundo de Front End",
    "categoria":"Front End"
  },
  {
    "id": uuid(),
    "nombre":"Quires saber que es Front End",
    "video":"https://www.youtube.com/watch?v=R9uaBxgCkyA",
    "descripcion":"Introduccion a el mundo de Front End",
    "categoria":"Front End"
  },
  {
    "id": uuid(),
    "nombre":"Quires saber que es Front End",
    "video":"https://www.youtube.com/watch?v=R9uaBxgCkyA",
    "descripcion":"Introduccion a el mundo de Front End",
    "categoria":"Front End"
  },
  {
    "id": uuid(),
    "nombre":"Quires saber que es Front End",
    "video":"https://www.youtube.com/watch?v=R9uaBxgCkyA",
    "descripcion":"Introduccion a el mundo de Front End",
    "categoria":"Back End"
  },
  {
    "id": uuid(),
    "nombre":"Quires saber que es Front End",
    "video":"https://www.youtube.com/watch?v=R9uaBxgCkyA",
    "descripcion":"Introduccion a el mundo de Front End",
    "categoria":"Back End"
  },
  {
    "id": uuid(),
    "nombre":"Quires saber que es Front End",
    "video":"https://www.youtube.com/watch?v=R9uaBxgCkyA",
    "descripcion":"Introduccion a el mundo de Front End",
    "categoria":"Inovacion y Gestion"
  }
  ])

  // Ternario --> condicion ? seMuetra : noSeMuestra
  // condicion && seMuestra
  const cambiarMostrar = () => {

     ActualizarMostrar(!mostrarFormulario)

  }

// Registro de Videos

const registrarVideo = (registroVideo) => {

console.log("Nuevo Video",registroVideo)
actualizarVideos([... videoSubido, registroVideo])

}

// Eliminar Porductos
const eliminarVideo= (id) => {
  console.log("Producto Eliminado", id)
  const nuevosVideos = videoSubido.filter((videoSubido) => videoSubido.id !== id)
  console.log(nuevosVideos)
  actualizarVideos(nuevosVideos)
}

//Lista de prodcutos
 const categoria = [

{
   nombre: "Front End",
   colorPrimario: "#6BD1FF"
},
{
  nombre: "Back End",
  colorPrimario: "#00C86F"
},
{
  nombre: "Inovacion y Gestion",
  colorPrimario: "#FFBA05"
}
]


  
 // .filter( mercancia => mercancia.productos === productos.tipo ) 
 // <Productos mercancias={mercancias} eliminarProducto={eliminarProducto} />
  
  return (
    <div>

        

      <MasProd cambiarMostrar={cambiarMostrar} />
      { mostrarFormulario === true ? <Formulario registrarVideo={registrarVideo} categoria={categoria.map((categoria) => categoria.nombre )} /> :
       <> { categoria.map((categoria) => <Home datos={categoria} 
       key={categoria.nombre} eliminarVideo={eliminarVideo} videoSubido={videoSubido.filter(registroVideo => registroVideo.categoria === categoria.nombre)} 
       
       
    

       />) } </> }
      
      
      
      { /* mostrarFormulario && <Formulario/> */}
     
      
     
      
    
     <Footer/>
     
    </div>
  );
}

export default App;
