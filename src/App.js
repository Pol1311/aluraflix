import './App.css';
import { useState, useEffect} from 'react';
import Home from './pages/Home';
import Videos from './pages/Video';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { buscar, nuevo, eliminar,modificar } from './api/api';

function App() {

  const [categorias, setCategorias] = useState([]);
  const [cards, setCards] = useState([]);
  const [cambio,setCambio] = useState([]);

  useEffect( () => {buscar("/categorias", setCategorias)},[]);
  useEffect( () => {buscar("/card", setCards)},[cards,cambio]);


  const nuevaCard = (card) => {
    nuevo(
      card.titulo,
      card.categoria,
      card.imagen,
      card.video,
      card.descripcion,
      card.id,
      setCards
    )
    // actualizarCartas([...cartas, card]);
    console.log("nueva tarjeta");
  };

  const editarCard = (card) => {
    modificar(
      card.titulo,
      card.categoria,
      card.imagen,
      card.video,
      card.descripcion,
      card.id,
      setCambio
    )
    // const tarjetaActualizada = cards.map( (tarjeta) => {
    //   if(tarjeta.id === card.id){
    //     tarjeta = card;
    //   }
    //   return tarjeta;
    // })
    // actualizarCartas(tarjetaActualizada); 
    console.log("datos actualizados", card);
  };

  const eliminarCard = (id) => {
    console.log("eliminar tarjeta", id);
    eliminar(id,setCambio);
    /* 
    const filtrarCard = cartas.filter( (carta) => carta.id !== id);
    actualizarCartas(filtrarCard); */
  };

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home categorias={categorias} tarjeta={cards} editarCard={editarCard} eliminarCard={eliminarCard} />} />
          <Route path="/videos" element={<Videos nuevaCard={nuevaCard} categorias={categorias.map((categoria) => { return (categoria.nombre) } )} />} 
          />
          <Route path='*' element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
