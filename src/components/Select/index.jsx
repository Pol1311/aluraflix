import "./Select.css";


const Select = (props) => {
    const {valor, actualizarValor} = props;

    const manejarCambio = (e) => {
        actualizarValor(e.target.value);
    };
    
    return (
        <div className="select">
            <label className="select--label" htmlFor="">Categoria</label>
            <select 
                className="select--select" 
                required 
                value={valor}
                onChange={manejarCambio}
            >
                <option value="" disabled defaultValue="" hidden>Seleccione una categoria</option>
                {props.categorias.map((nombre,index) => {
                    return <option key={index} value={nombre}>{nombre}</option>
                })}
            </select>
        </div>
    );

};

export default Select;