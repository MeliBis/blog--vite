import {Routes, Route, BrowserRouter as Router, NavLink, Link} from "react-router-dom"
import Inicio from '../components/pages/Inicio'
import Articulos from '../components/pages/Articulos'
import Header from "../components/layout/Header"
import Navbar from "../components/layout/Navbar"
import SideBar from "../components/layout/SideBar"
import Footer from "../components/layout/Footer"
import Contacto from "../components/pages/Contacto"
import Crear from "../components/pages/Crear"
import Busqueda from "../components/pages/Busqueda"
import Articulo from "../components/pages/Articulo"
import Editar from "../components/pages/Editar"

const Rutas = () => {
  return (
    <Router>
        {/* layout */}
        <Header/>
        <Navbar/>
        {/* contenido */}
          <section>
              <Routes>
                  <Route path='/' element={<Inicio/>}/>
                  <Route path='inicio' element={<Inicio/>}/>
                  <Route path='articulos' element={<Articulos/>}/>
                  <Route path='crear' element={<Crear/>}/>
                  <Route path='contacto' element={<Contacto/>}/>
                  <Route path='buscar/:busqueda' element={<Busqueda/>}/>
                  <Route path='articulo/:id' element={<Articulo/>}/>
                  <Route path='editar/:id' element={<Editar/>}/>

                  <Route path='*' element={
                    <div className="jumbo">
                      <h1>Página no encontrada</h1>
                      <h2>Error 404</h2>
                    </div>
                  }/>
              </Routes>
          </section>
        <SideBar/>
        <Footer/>
    </Router>
  )
}

export default Rutas