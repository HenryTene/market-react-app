import './Navbar.css';
import logo from '../images/logo.png';
import user from '../images/user.png'

const Navbar = () => {
    return ( 

        <nav class="topnav">
            <div class="logo">
                  <img src={logo} alt="Logo"/> 
             
                
            </div>
            <div class="menu">
                <a class="active" href="#home">Inicio</a>
                <a href="#services">Servicios</a>
                <a href="#about">Quienes Somos</a>
                <a href="#contact">Contactanos</a>
            </div>
            <div class="login-container">
                <button type="submit">
                    <img class="login-avatar" src={user} alt="Avatar"/>
                </button>
            </div>
        </nav>
     );
}
 
export default Navbar;