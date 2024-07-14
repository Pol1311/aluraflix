import "./Input.css";

const Input = (props) => {
    const {type, nombre, valor, actualizarValor} = props;
  
    const manejarCambio = (e) => {
        actualizarValor(e.target.value);
    }

    return (
        <div className="input">
            <label  className="input--label" htmlFor="">{nombre}</label>
            <input 
                className="input--input" 
                type={type} 
                placeholder="Enter your name" 
                required 
                value={valor}
                onChange={manejarCambio}
            />
        </div>
    );
};

export default Input;