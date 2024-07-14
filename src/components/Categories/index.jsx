import "./Categories.css";
import Card from "../Card";


const Categories = (props) => {

    const {cambiarEstadoModal, nombre, color, eliminarCard, guardarId} = props;
    const {tarjeta} = props;

    return ( <> { tarjeta.length >  0 && 
        <section className="categories">
            <div className="categories--label" style={{backgroundColor:color}} >{nombre}</div>
            <div className="categories--card-container">
                {tarjeta.map( (elemento) => { 
                    return ( <Card tarjeta={elemento} cambiarEstadoModal={cambiarEstadoModal} color={color} key={elemento.id} eliminarCard={eliminarCard} guardarId={guardarId}/>)
                } )}
            </div>
        </section>}</>
    );
};

export default Categories;