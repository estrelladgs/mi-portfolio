import './Projects.css';

function Projects() {
  return (
    <section id="proyectos" className="projects">
      <h2>Proyectos destacados</h2>
      <div className="project-list">

        <div className="project-card">
          <h3>Puzzle-Raze</h3>
          <p>Puzzle en HTML, CSS y JS que permite subir una imagen y transformarla en un rompecabezas jugable.</p>
          <a href="https://github.com/estrelladgs/Puzzle-Raze" target="_blank" rel="noopener noreferrer">Ver código</a>
        </div>

        <div className="project-card">
          <h3>Kleren</h3>
          <p>Tienda online de ropa desarrollada con .NET.</p>
          <a href="https://github.com/estrelladgs/kleren" target="_blank" rel="noopener noreferrer">Ver código</a>
        </div>

        <div className="project-card">
          <h3>uPho</h3>
          <p>Red social en PHP con subida de imágenes, álbumes y control de acceso privado.</p>
          <a href="https://github.com/estrelladgs/uPho" target="_blank" rel="noopener noreferrer">Ver código</a>
        </div>

        <div className="project-card">
          <h3>Assetify <span className="tag">En desarrollo</span></h3>
          <p>Web empresarial para subida de assets, desarrollada en React.</p>
        </div>

        <div className="project-card">
          <h3>LOVENDO <span className="tag">En desarrollo</span></h3>
          <p>Plataforma de compra-venta de bebidas saludables hecha en WordPress.</p>
        </div>

      </div>

      <div className="skills">
        <p><strong>Habilidades:</strong></p>
        <p><b>Frontend:</b> React, Angular, HTML, CSS</p>
        <p><b>Herramientas:</b> Git, Figma</p>
        <p><b>Edición de vídeos:</b> Adobe Premiere, Capcut, TikTok</p>
        <p><b>Otras:</b> UX/UI, responsive design, trabajo en equipo, liderazgo</p>
      </div>
    </section>
  );
}

export default Projects;
