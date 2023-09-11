import './App.css';
import  Testimonio from "./componentes/Testimonio.js";
import testimonios from './componentes/datosTestimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp</h1>
       
        {testimonios.map((testimonio, index) => (
          <Testimonio
            key={index} // Asegúrate de proporcionar una clave única para cada testimonio
            nombre={testimonio.nombre}
            imagen={testimonio.imagen}
            pais={testimonio.pais}
            cargo={testimonio.cargo}
            empresa={testimonio.empresa}
            testimonio={testimonio.testimonio}
          />
        ))}


      </div>
    </div>
  );
}

export default App;
