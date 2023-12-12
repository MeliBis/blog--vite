import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className="nav">
    <ul>
      <li>
        <NavLink to="/">Inicio</NavLink>
      </li>
      <li>
        <NavLink to="/articulos">Articulos</NavLink>
      </li>
      <li>
        <NavLink to="crear-articulos">Crear articulos</NavLink>
      </li>
      <li>
        <NavLink to="contacto">Contacto</NavLink>
      </li>
    </ul>
  </nav>
  )
}

export default Navbar