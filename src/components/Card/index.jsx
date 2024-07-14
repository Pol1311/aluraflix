import "./Card.css";


const Card = (props) => {
    const {color, cambiarEstadoModal,eliminarCard, guardarId} =  props;
    const {imagen,id} = props.tarjeta;
  
    
    const manejarClick = (e) => {
        e.preventDefault();
        guardarId(id);
        cambiarEstadoModal();
    }; 

    const manejarBorrar = (e) => {
        e.preventDefault();
        eliminarCard(id);
    }

    return (
        <div className="card" style={{borderColor:color}} data-id={id}>
            <div className="card--image" style={{backgroundColor:color}}><img className="card--image--img" src={imagen} alt="imagen" /></div>
            <div className="card--buttons">
                <button className="card--buttons--erase" onClick={manejarBorrar}><img className="card--buttons--erase--img" src="/img/delete.png" alt="borrar" onClick={ () => eliminarCard(id)} />Borrar</button>
                <button className="card--buttons--edit" onClick={manejarClick}><img className="card--buttons--edit--img" src="/img/edit.png" alt="editar" />Editar</button>
            </div>
        </div>
    );
};

export default Card;