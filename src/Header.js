import './Nav.css';

const Header = () =>{
  return(
    <header className="header">
      <nav className='nav'>
        <div className='container'>
          <span className='logo'>
            LOGO
          </span>
          <ul className='list'>
            <li>Inicio</li>
            <li>Catálogo</li>
            <li>Nosotros</li>
            <li>Contacto</li>
          </ul>
        </div>
      </nav>
    </header>
  )
  
}


export default Header;