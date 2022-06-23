import { useState} from "react";
import { useHistory} from "react-router-dom";


const Create = () => {

    const [baslik,setBaslik]=useState("");
    const [aciklama,setAciklama]=useState("");
    const [yazar,setYazar]=useState("hulya");


    const [yukleniyor,setYukleniyor]=useState(false);



    const history=useHistory();


    const handleSubmit=(e)=>{
        e.preventDefault();

        setYukleniyor(true);

        const yazi={ad:baslik,aciklama,yazar};

        fetch("http://localhost:3000/yazilar/",{
            method: "POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(yazi)
        }).then(()=>{
            console.log("yazi eklendi");
            setYukleniyor(false);

            history.push("/");
        })
    }

    return (
        <div className="create">
            <h2 className="write">Yeni Yazı Ekle</h2>

            <form onSubmit={handleSubmit}>
                <label>Yazı Başlık:</label>
                <input type="text" required value={baslik} onChange={(e)=>setBaslik(e.target.value)}></input>
                <label>Yazının Açıklaması:</label>
                <textarea required value={aciklama} onChange={(e)=>setAciklama(e.target.value)}>

                </textarea>
                <label>Yazar:</label>
                <select value={yazar} onChange={(e)=>setYazar(e.target.value)}>
                    <option value="Halit Ziya Uşaklıgil">Halit Ziya Uşaklıgil</option>
                    <option value="Reşat Nuri Güntekin">Reşat Nuri Güntekin</option>
                    <option value="Oğuz Atay">Oğuz Atay</option>
                    <option value="George Orwell">George Orwell</option>              
                </select>
                {!yukleniyor && <button>Ekle</button>}
                {yukleniyor && <button disabled>Yükleniyor</button>}
            </form>
        </div>
    );
}

export default Create;