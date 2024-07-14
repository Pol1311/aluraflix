import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <header className="header">
            <h1 className="header--logo">ALURAFLIX</h1>
            <div className="header--container--button">
               <Link to="/" className="header--buttons header--home">HOME</Link>
               <Link to="/videos" className="header--buttons header--new">NUEVO VIDEO</Link>
            </div>
        </header>
   );
};

export default Header;