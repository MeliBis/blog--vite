import {useState, useEffect} from "react"

export const useAjax =(url, metodo)=>{
    const [estado, setEstado] = useState({
        datos:null,
        cargando:true,
    })
    
 const getData= async()=>{
    setEstado({
        ...estado,
        cargando:true
    })
    let opciones = {
        method: "GET"
    }
    if(metodo == "GET"){
       
        })

    }
    const peticion = await fetch(url)
    const data= await peticion.json()

    setEstado({
        ...estado,
        cargando:true
    })
                
              
        
    setEstado({
        datos:data,
        cargando:false
        }) 
    }
        useEffect(()=>{
            getData()
        
        
        },[url])

        return{
            datos:estado.datos,
            cargando: estado.cargando,
        }
}