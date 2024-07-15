import "./Videos.css"
import Banner from "../Banner/Index"
import Iframe from 'react-iframe'
import { RiDeleteBin2Fill } from "react-icons/ri";

const VideoPlayer = (props) => {
    
  const { nombre, categoria, video, descipcion, id} = props
  const { eliminarVideo } = props


/*<div className="tarjetaVideo">
        <div className="encabezado">
        <h1> {categoria} </h1>
        <h2> {nombre} </h2>
        </div>
        <video width="280" height="210" controls>
          <source src={video} type="video/mp4" />
          { Añade más sources para diferentes formatos de video si es necesario }
   <h3> {descipcion} </h3>
          Tu navegador no soporta el elemento de video.
        </video>
      </div>
    <>
        <Banner img="https://i.ytimg.com/vi/R9uaBxgCkyA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLBvfL19Yv6wW-CbVF1sibjUtE6gMg" />
         
         <section className="tarjetaVideo">
         <iframe width="100%" height="100%" 
         src={video} 
         frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
 
         </section>
        </>
 

*/
//const { colorPrimario } = props.datos
//const obj = { backgroundColor: colorPrimario }



    return (

        <div className="tarjetaVideo">
        <RiDeleteBin2Fill className="eliminar" onClick={ () => eliminarVideo(id) } /> 
        <div className="encabezadoVideo">
       
        <h1> {categoria} </h1>
        <h2> {nombre} </h2>
        </div>

        <video width="280" height="210" controls>
          <source src={video} type="video/mp4" />
          
   <h3> {descipcion} </h3>
          Tu navegador no soporta el elemento de video.
        </video>
      </div>
    
    )

  }
  
  export default VideoPlayer