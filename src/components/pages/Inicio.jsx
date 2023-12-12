import {Link} from 'react-router-dom'

const Inicio = () => {
  return (
    <div className='jumbo'>
      <h1>Meliscript blog</h1>
      <p>Blog desarrolado con el MERN Stack (Mongodb, Express, React y Nodejs)</p>
      <Link to='/articulos' className='button'>Ver</Link>
    </div>
  )
}

export default Inicio