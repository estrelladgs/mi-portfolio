import './About.css';
import foto from '../assets/foto3.jpg';

function About() {
  return (
    <section id="sobre" className="about">
      <div className='about-text'>
        <h2>Sobre mí</h2>
        <p>👩‍💻 React, CSS, diseño UX/UI</p>
        <p>🎓 Ingeniería Multimedia (3º curso)</p>
        <p>🤝 Experiencia en liderazgo estudiantil</p>
      </div>
      <img src={foto} alt="Estrella Domínguez" className="about-image" />
    </section>
  );
}

export default About;
