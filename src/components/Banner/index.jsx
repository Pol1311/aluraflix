import "./Banner.css";


const Banner = () => {
    return (
        <section className="banner" >
            <div className="banner--description">
                <div className="banner--description--label">FRONT END</div>
                <h2 className="banner--description-title">Challenge React</h2>
                <h3 className="banner--description-info">Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la 
                    resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.                    
                </h3> 
            </div>
            <div className="banner--container--img"><img className="banner--img" src="/img/player.png" alt="elimsd" /></div>
        </section>
    );
};

export default Banner;