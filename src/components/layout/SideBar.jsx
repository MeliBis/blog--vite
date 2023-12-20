import React, { useState } from 'react'
import {Navigate, useNavigate} from 'react-router-dom'

const SideBar = () => {
  const [buscar, setBuscar] = useState('')
  const navegar= useNavigate()

  const hacerBusqueda= (e) =>{
  e.preventDefault()
  let mi_busqueda = e.target.search_field.value;
  navegar("/buscar/"+mi_busqueda, {replace:true})
}

  return (
    <aside className="lateral">
    <div className="search">
      <h3 className="title">Buscador</h3>
      <form onSubmit={hacerBusqueda}>
        <input type="text" name="search_field" />
        <input type="submit" id="search" value='buscar'/>
{/*         <button id="search">Buscar</button>
 */}      </form>
    </div>
   {/*  <div className="add">
      <h3 className="title">Añadir pelicula</h3>
      <form>
        <input type="text" id="title" placeholder="Titulo" />
        <textarea
          id="description"
          placeholder="Descripción"
          defaultValue={""}
        />
        <input type="submit" id="save" defaultValue="Guardar" />
      </form>
    </div> */}
  </aside>
  )
}

export default SideBar