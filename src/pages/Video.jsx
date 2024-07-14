import { useState } from "react";
import "./Videos.css"
import { v4 as uuid} from 'uuid';

const Videos = (props) => {
    const {nuevaCard} = props;

    const [nuevoTitulo,setNuevoTitulo] = useState("");
    const [nuevaCategoria, setNuevaCategoria] = useState("");
    const [nuevaImagen, setNuevaImagen] = useState("");
    const [nuevoVideo, setNuevoVideo] = useState("");
    const [nuevaDescripcion, setNuevaDescripcion] = useState("");


    const manejarEnvio = (e) => {
        let datosEnviar = {
            titulo: nuevoTitulo,
            categoria: nuevaCategoria,
            imagen: nuevaImagen,
            video: nuevoVideo,
            descripcion: nuevaDescripcion,
            id: uuid()
        };
        nuevaCard(datosEnviar);
    };

    const limpiarCampos = (e) => {
        e.preventDefault();
        setNuevoTitulo("");
        setNuevaCategoria("");
        setNuevaImagen("");
        setNuevoVideo("");
        setNuevaDescripcion("");
    };


    return (
        <main className="videos">
            <h1 className="videos--titulo">NUEVO VIDEO</h1>
            <h2 className="videos--informacion">Complete el formulario para crear una nueva tarjeta de video</h2>
            <h3 className="videos--tarjeta">Crear Tarjeta</h3>
            <form className="videos--form" onSubmit={manejarEnvio}>
                <div className="videos--contenedor--etiqutas">
                    <div>
                        <label htmlFor="" className="videos--etiqueta">Titulo</label>
                        <input onChange={(e) => setNuevoTitulo(e.target.value)} required type="text" name="" id="" placeholder="ingrese el título" className="videos--inputs" value={nuevoTitulo}/>
                    </div>
                    <div>
                        <label htmlFor="" className="videos--etiqueta">Imagen</label>
                        <input onChange={(e) => setNuevaImagen(e.target.value)} required type="url" name="" id="" className="videos--inputs" placeholder="ingrese el enlace de la imagen" value={nuevaImagen} />
                    </div>
                    <div>
                        <label htmlFor="" className="videos--etiqueta">Descripcion</label>
                        <textarea onChange={(e) => setNuevaDescripcion(e.target.value)} required name="" id="" className="videos--inputs" rows={6} placeholder="¿De qué se trata este vídeo?" value={nuevaDescripcion}></textarea>
                    </div>
                    <div className="videos--contenedor-botones">
                    <button className="videos--boton--guardar">Guardar</button>
                    <button type="reset" className="videos--boton--limpiar" onClick={limpiarCampos}>Limpiar</button>
                </div>
                </div>
                <div className="videos--contenedor--etiqutas">
                    <div>
                        <label htmlFor="" className="videos--etiqueta">Categoria</label>
                        <select onChange={(e) => setNuevaCategoria(e.target.value)} required name="" id="" className="videos--inputs" value={nuevaCategoria} >
                            <option value="" disabled defaultValue="" hidden>Seleccione una categoria</option>
                             {props.categorias.map((nombre,index) => {
                                return <option key={index} value={nombre}>{nombre}</option>
                            })} 
                        </select>
                    </div>
                    <div>
                        <label htmlFor="" className="videos--etiqueta">Video</label>
                        <input onChange={(e) => setNuevoVideo(e.target.value)} required type="url" name="" id="" className="videos--inputs" placeholder="ingrese el enlace del video" value={nuevoVideo}/>
                    </div>
                </div>

            </form>
        </main>
    );
};

export default Videos;