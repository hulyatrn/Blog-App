import { Link } from "react-router-dom";


const NotFound = () => {

    return (
        
        <div className="not-found">
            <h2>Yanlış Sayfa</h2>
            <p>Sayfa Bulunamadı</p>
            <Link to="/">Lütfen Anasayfaya gidiniz...</Link>
        </div>
        
    );
}

export default NotFound;