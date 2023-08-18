import Navbar from '../NavBar/NavBar';
import './oner.css'; 


function Owner() {
  return (
    <div className="owner">
        <Navbar></Navbar>
        <div className="cardowner card-user">
        <div className="cardowner -body">
        <p className="cardowner -text"></p>
        <div className="author">
            <div className="block block-one"></div>
            <div className="block block-two"></div>
            <div className="block block-three"></div>
            <div className="block block-four"></div>
            <img className="avatar ia-block" src="https://cdn.discordapp.com/attachments/1141474429990359161/1142056278705848330/WhatsApp_Image_2023-08-18_at_6.22.44_AM.jpeg"/>
            <h5 className="title">Sebastian Carrera</h5>
            <h5 className="title">Desarollador Jr</h5>
        </div>
        <div className="card-description">
        <p>
        Como desarrollador, mi alegría radica en crear UMNAV, una herramienta que ayuda a los nuevos miembros de la comunidad Universidad Mariana. Ver cómo mi trabajo simplifica su experiencia al navegar por el campus y les brinda confianza en su entorno educativo me llena de satisfacción. Cada línea de código es un paso hacia una bienvenida más cálida y una adaptación más fácil. Estoy emocionado de ser parte de su transición exitosa y de contribuir al crecimiento de nuestra comunidad.
        </p>
        Contactame en :
        <br/>
        <i className='fa-regular fa-envelope'></i> Email: sebascarrera2000@gmail.com<br/>
        <br/>
           Github <a href="https://github.com/sebascarrera2000"><i className='fa-brands fa-github'></i></a>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Owner