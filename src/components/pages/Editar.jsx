import { useEffect, useState } from "react"
import { useForm } from "../../hooks/useForm"
import { Peticion } from "../../helpers/Peticion"
import {Global} from '../../helpers/Global'
import { useParams } from "react-router-dom"

const Editar = () => {
  
  const {formulario,enviado, cambiado} = useForm({})
  const [resultado, setResultado] = useState("no_enviado")
  const [articulo, setArticulo] = useState({});
  const params = useParams()

  useEffect(() => {
    conseguirArticulo();
  }, []);

  const conseguirArticulo = async () => {
    const { datos } = await Peticion(Global.url+"articulo/" + params.id, "GET");

    if (datos.status === "success") {
      setArticulo(datos.articulo);
    }
    
   
  };

  const editarArticulo = async(e)=>{
    e.preventDefault()

//recoger datos formulario
    let nuevoArticulo= formulario
    
  //guardar articulo en backend
    const {datos} = await Peticion(Global.url+"articulo/"+params.id,"PUT", nuevoArticulo);
    //subir imagen
    const fileInput = document.querySelector("#file")

    if(datos.status === "success" && fileInput.files[0]){
      setResultado("guardado")
      
      
      const formData = new FormData();
      formData.append("file0", fileInput.files[0])

      const subida= await Peticion(Global.url+"subir-imagen/"+datos.articulo._id,"POST",formData,true);
      
      
      if(subida.status === "success"){
        setResultado("guardado")
      }else{
        setResultado("error")
      }

    }else{
      setResultado("error")
  }  

console.log(datos);
}

return (
    <div className="jumbo">
      <h1>Editar artículo</h1>
      <p>formulario para editar un articulo {articulo.titulo}</p>
{/*   <pre>{JSON.stringify(formulario)}</pre>
 */}  <strong>{resultado == "guardado" ? "Articulo guardado con exito" : "Articulo no guardado" }</strong>
      <strong>{resultado == "error" ? "Los datos son incorrectos" : "" }</strong>
      {/* montar formulario */}
    <form action="" className="formulario" onSubmit={editarArticulo}>
      <div className="form-group">
        <label htmlFor="titulo">Titulo</label>
        <input type="text" name="titulo"onChange={cambiado} defaultValue={articulo.titulo}/>
      </div>

      <div className="form-group">
        <label htmlFor="contenido">Contenido</label>
        <textarea type="text" name="contenido"  onChange={cambiado} defaultValue={articulo.contenido}/>
      </div>

      <div className="form-group">
        <label htmlFor="file0">Imagen</label>
        <div className="mascara">
          {articulo.imagen != "default.png" && <img src={Global.url + "imagen/"+articulo.imagen} />}
          {articulo.imagen == "default.png" && <img src="https://cdn.pixabay.com/photo/2023/10/20/14/20/ai-generated-8329581_1280.jpg" />}
        </div>
        <input type="file" name="file0" id="file"  />
      </div>
  
      <div className="form-group">
        <input type="submit" value="Guardar" className="btn btn-success" />
      </div>
    </form>


    </div>
  )
}

export default Editar