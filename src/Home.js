import BlogList from "./BlogList";
import useFetch from "./useFetch";


const  Home = () => {


    const {veri:blogs,yukleniyor,hata}=useFetch("http://localhost:3000/yazilar");

    

    return (
        <div className="home">
            {hata && <div className="error">{hata}</div>}
            {yukleniyor && <div className="loading">Yükleniyor</div>}
            {blogs && <BlogList bloglar={blogs} baslik="Hülya'nın Yazıları"/>}
        </div>


    );
}

export default Home;