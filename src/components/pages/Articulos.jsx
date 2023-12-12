import { useState, useEffect } from "react";

const Articulos = () => {
  const [articulos, setArticulos] = useState([]);

  useEffect(() => {
  }, []);

const conseguirArticulos = async() => {
  const url= "http://localhost:3900/api/articulos"
  let peticion= await fetch(url, {
    method:'GET'
  })
  let datos = await peticion.json();
  if(datos.status === 'success'){
    setArticulos(datos.articulos)
  }
}
  return (
    <>
      {articulos.map((articulo => {
        return (
          <article key={articulo._id} className="articulo-item">
          <div className="mascara">
            <img src="https://cdn.pixabay.com/photo/2023/11/20/23/11/woman-8402067_1280.jpg" alt=""/>
          </div>
          <div className="datos">
            <h3 className="title">{articulo.titulo}</h3>
            <p className="description">{articulo.contenido}</p>
            <button className="edit">Editar</button>
            <button className="delete">Borrar</button>
          </div>
        </article>
        );
      }))}
    </>
  );
};

export default Articulos;