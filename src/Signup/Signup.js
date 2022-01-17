import './Signup.css';

function Signup(){

return ( 
    <>
         <div class="container">
         <div class="login-container">
            <div class="login">
               <h2>Inicie sesión con su red social</h2>
               <div class="login-items">
                  <button class="fb"><i class="fab fa-facebook-f"></i> Acceder con Facebook</button>          
                  <button class="correo"><i class="fab fa-google"></i> Acceder con Google</button>
               </div>
            </div>
            <div class="inicia-sesion">
               <h2>Registro</h2>
               <form action="">
                  <input type="text" placeholder="Nombre" class="usuario"/>
                  <input type="text" placeholder="Apellidos" class="usuario"/>
                  <input type="text" placeholder="Correo" class="usuario"/>
                  <input type="text" placeholder="Confirmar correo" class="usuario"/>
                  <input type="password" placeholder="Contraseña" class="pass"/>
                  <input type="submit" class="submit" value="Registrar"/>             
                  <p><a  href="#">Términos y condiciones de servicio</a></p>
               </form>
            </div>
         </div>
      </div>
    </>
);  

}
export default Signup;