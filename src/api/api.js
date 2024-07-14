import axios from "axios";

export const api = axios.create({
        baseURL: 'http://localhost:5000'
    }
);

export const buscar = async (url, setData) => {
    const respuesta = await api.get(url);
    setData(respuesta.data);
};

export const nuevo = async (titulo, categoria, imagen, video, descripcion, id, setData) => {
    const respuesta = await axios.post('http://localhost:5000/card', {
        titulo: titulo,
        categoria: categoria,
        imagen: imagen,
        video: video,
        descripcion: descripcion,
        id: id    
    });
    return setData(respuesta.data);
};
  
export const eliminar = async (id,setData) => {
    const respuesta = await axios.delete(`http://localhost:5000/card/${id}`);
    return setData(respuesta.data);
};

export const modificar = async (titulo,categoria, imagen, video, descripcion, id, setData) => {
    const respuesta = await axios.put(`http://localhost:5000/card/${id}`,{
        titulo: titulo,
        categoria: categoria,
        imagen: imagen,
        video: video,
        descripcion: descripcion,
        id: id    
    });
    return setData(respuesta.data);
};