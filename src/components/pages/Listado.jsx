import React from 'react'

const Listado = ({articulos, setArticulos}) => {
  return (
    articulos.map((articulo) => {
        return (
          <article key={articulo._id} className="articulo-item">
            <div className="mascara">
              <img
                src="https://cdn.pixabay.com/photo/2023/11/20/23/11/woman-8402067_1280.jpg"
                alt=""
              />
            </div>
            <div className="datos">
              <h3 className="title">{articulo.titulo}</h3>
              <p className="description">{articulo.contenido}</p>
              <button className="edit">Editar</button>
              <button className="delete">Borrar</button>
            </div>
          </article>
        );
      })
  )
}

export default Listado