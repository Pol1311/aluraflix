import { useState } from "react";
import "./Modal.css";
import Input from "../Input";
import Select from "../Select";

const Modal= (props) => {

    const {titulo,categoria, imagen, video, descripcion, id} = props.datosModal;
    const {cambiarEstadoModal, editarCard} = props;

    const [tituloInicial,setTitulo] = useState(titulo);
    const [categoriaInicial, setCategoria] = useState(categoria);
    const [imagenInicial, setImagen] = useState(imagen);
    const [videoInicial, setVideo] = useState(video);
    const [descripcionInicial, setDescripcion] = useState(descripcion);


    const manejarEnvio = (e) => {
        e.preventDefault();
        let datosEnviar = {
            titulo: tituloInicial,
            categoria: categoriaInicial,
            imagen: imagenInicial,
            video: videoInicial,
            descripcion: descripcionInicial,
            id
        };
        editarCard(datosEnviar);
        cambiarEstadoModal();
    };

    const limpiarCampos = (e) => {
        e.preventDefault();
        setTitulo("");
        setCategoria("");
        setImagen("");
        setVideo("");
        setDescripcion("");
    };

    return (
        <section className="modal" >

            <form className="modal--form" onSubmit={manejarEnvio}>
                <h2 className="modal--form--title">Editar Card:</h2>
                <img className="modal--form--close" src="/img/close.png" alt="close" onClick={cambiarEstadoModal} />
                <Input 
                    type="text" 
                    nombre="Titulo" 
                    valor={tituloInicial} 
                    actualizarValor={setTitulo} 
                />
                <Select 
                    valor={categoriaInicial} 
                    actualizarValor={setCategoria} 
                    categorias={props.categorias}
                />
                <Input 
                    type="url" 
                    nombre="Imagen" 
                    valor={imagenInicial} 
                    actualizarValor={setImagen} 
                />
                <Input 
                    type="url" 
                    nombre="Video" 
                    valor={videoInicial} 
                    actualizarValor={setVideo} 
                />
               
                <label className="modal--form--label" htmlFor="">Descripcion</label>
                <textarea 
                    className="modal--form--textarea" 
                    name="" 
                    id="" 
                    cols="30" 
                    rows="10" 
                    required
                    value={descripcionInicial}
                    onChange={ (e) => {setDescripcion(e.target.value)}
                    }
                >
                </textarea>
                <div className="modal--form--buttons">
                    <button className="modal--form--buttons--save">Guardar</button>
                    <button className="modal--form--buttons--erase" onClick={limpiarCampos}>Limpiar</button>
                 </div>
            </form>
        </section>
    );
};

export default Modal;

