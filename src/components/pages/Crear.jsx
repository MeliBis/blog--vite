import { useState } from "react"
import { useForm } from "../../hooks/useForm"
import {Global} from '../../helpers/Global'
import { Peticion } from "../../helpers/Peticion"

const Crear = () => {
  
  const {formulario,enviado, cambiado} = useForm({})
  const [resultado, setResultado] = useState("no_enviado")
  
  const guardarArticulo = async(e)=>{
    e.preventDefault()

//recoger datos formulario
    let nuevoArticulo= formulario
    
  //guardar articulo en backend
    const {datos, cargando} = await Peticion(Global.url+"crear","POST", nuevoArticulo)
    
    if(datos.status === "success"){
      setResultado("guardado")
    }else{
      setResultado("error")
  }  

//console.log(datos);
}

return (
    <div className="jumbo">
      <h1>Crear artículo</h1>
      <p>formulario para crear un articulo</p>

      <strong>{resultado == "guardado" ? "Articulo guardado con exito" : "Articulo no guardado" }</strong>
      <strong>{resultado == "error" ? "Los datos son incorrectos" : "" }</strong>
      {/* montar formulario */}
    <form action="" className="formulario" onSubmit={guardarArticulo}>
      <div className="form-group">
        <label htmlFor="titulo">Titulo</label>
        <input type="text" name="titulo"onChange={cambiado}/>
      </div>
      <div className="form-group">
        <label htmlFor="contenido">Contenido</label>
        <textarea type="text" name="contenido"  onChange={cambiado}/>
      </div>
      <div className="form-group">
        <label htmlFor="file0">Imagen</label>
        <input type="file" name="file0" id="file"  />
      </div>
  
      <div className="form-group">
        <input type="submit" value="Guardar" className="btn btn-success" />
      </div>
    </form>


    </div>
  )
}

export default Crear