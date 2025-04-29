import './Home.css';
import pdf from '../assets/CV-Estrella.pdf';

function Home() {
  return (
    <section id="inicio" className="home">
      <h1>Hola, soy Estrella 👋</h1>
      <p>Desarrolladora frontend en formación, apasionada por crear interfaces intuitivas y modernas.</p>
      <div className="cta-buttons">
        <a href={pdf} className='btn' target="_blank" download="CV-Estrella.pdf">Descargar CV</a>
        <a href="https://github.com/estrelladgs" className="btn" target="_blank">GitHub</a>
      </div>

    </section>
  );
}

export default Home;
