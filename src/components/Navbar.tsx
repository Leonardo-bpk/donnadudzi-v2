import logo from '../assets/logo.png'

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Academia Donaduzzi" />
      </div>

      <nav className="navbar-links">
        <a href="#">Formulário</a>
        <a href="#">Projetos</a>
        <a href="#">Login</a>
      </nav>

      <div className="navbar-actions">
        <button className="profile-button">
          Perfil
        </button>

        <button className="menu-button">
          ☰
        </button>
      </div>
    </header>
  )
}

export default Navbar