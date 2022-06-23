
import { Link } from "react-router-dom";
const Navbar = () => {


    return (
        <nav className="navbar">
            <h1>Hülya Blog</h1>
            <div className="links">
                <Link to={"/"}>Anasayfa</Link>
                <Link className="new-post" to={"/create"}>Yeni Yazı</Link>

            </div>
        </nav>

    );


}

export default Navbar;