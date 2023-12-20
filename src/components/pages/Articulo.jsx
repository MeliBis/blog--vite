import { useState, useEffect } from "react";
import { Global } from "../../helpers/Global";
import { Peticion } from "../../helpers/Peticion";
import Listado from "./Listado";
import { useParams } from "react-router-dom";

const Articulo = () => {
  const [articulo, setArticulo] = useState({});
  const [cargando, setCargando] = useState(true);
  const params=useParams()
  
  useEffect(() => {
    conseguirArticulo();
  }, []);

  const conseguirArticulo = async () => {
    const { datos, cargando } = await Peticion(Global.url+"articulo/" + params.id, "GET");

    if (datos.status === "success") {
      setArticulo(datos.articulo);
    }
    
    setCargando(false);
  };
  return (
    <div className="jumbo">
      {cargando ? "Cargando ..." : 
        
          (
            <>
              <div className="mascara">
                {articulo.imagen != "default.png" && <img src={Global.url + "imagen/"+articulo.imagen} />}
                {articulo.imagen == "default.png" && <img src="https://cdn.pixabay.com/photo/2023/10/20/14/20/ai-generated-8329581_1280.jpg" />}
              </div>
              <h1>{articulo.titulo}</h1>
              <span>{articulo.fecha}</span>
              <p>{articulo.contenido}</p>
            </>
          )
       
      }
    
    </div>
  );
};

export default Articulo;
