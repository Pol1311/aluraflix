import Banner from '../components/Banner';
import Categories from '../components/Categories';
import Modal from '../components/Modal';
import { useState } from 'react';


const Home = (props) => {

    const [mostrarModal,acutalizarMostrarModal] = useState(false);
    const [datosModal, actualizarDatosModal] = useState();

    const {editarCard, eliminarCard} = props;

    const cambiarEstadoModal = () => {
      acutalizarMostrarModal(!mostrarModal);
    };

    const guardarId = (id) => {
      props.tarjeta.map( (elemento) => {
        if(elemento.id === id) {
          actualizarDatosModal(elemento);
        }
      });
    };
    
    return (
        <main>
            <Banner />
            {props.categorias.map((elemento,index) => {

              return( <Categories nombre={elemento.nombre} key={index} color={elemento.color} cambiarEstadoModal={cambiarEstadoModal} tarjeta={props.tarjeta.filter( tarjeta => tarjeta.categoria === elemento.nombre )} eliminarCard={eliminarCard} guardarId={guardarId} />
              )
            })}
             
            {mostrarModal && <Modal cambiarEstadoModal={cambiarEstadoModal} editarCard={editarCard} categorias={props.categorias.map( (categoria) => categoria.nombre)} datosModal={datosModal} />}
        </main>
    );
};

export default Home;