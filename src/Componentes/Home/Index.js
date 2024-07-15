import "./Home.css"
import VideoPlayer from "../Videos/Index"

const Home = (props) => {
    //Destructuracion
    const { colorPrimario, nombre } = props.datos
    const { videoSubido, eliminarVideo } = props
    const obj = { backgroundColor: colorPrimario }
    

    const estiloTitulo = { borderColor: colorPrimario }

    return <section className="home" >
                  
                 <div className="encabezado" style={obj} > 
                <h3 style={estiloTitulo}> {nombre} </h3>
                </div>

                <div className="videoSubido">
                    {
                        videoSubido.map((registroVideo, index) => < VideoPlayer
                            datos={registroVideo}
                            key={index}
                            colorPrimario={colorPrimario}
                            eliminarVideo={eliminarVideo}
                        />)
                    }
                </div>
            </section>
}

export default Home





