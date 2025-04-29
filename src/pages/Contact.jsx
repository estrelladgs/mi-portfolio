import './Contact.css';
import { useState } from 'react';
import { FaInstagram, FaTiktok, FaLinkedin } from 'react-icons/fa';


function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    try {
      const res = await fetch('https://formspree.io/f/xpwdqrlp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (res.ok) {
        setStatus({ msg: '¡Mensaje enviado con éxito!', type: 'success' });
      } else {
        setStatus({ msg: 'Error al enviar el mensaje.', type: 'error' });
      }      
    } catch (err) {
      setStatus('Error de conexión. Intenta más tarde.');
    }
  };

  return (
    <section id="contacto" className="contact">
      <h2>Contacto</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Tu nombre *" required />
        <input type="email" name="email" placeholder="Tu email *" required />
        <textarea name="message" placeholder="Tu mensaje *" rows="5" required></textarea>
        <button type="submit">Enviar</button>
      </form>
      {status && <p className="form-status">{status}</p>}

      <div className="contact-info">
        <p>Además, puedes seguirme en mis redes sociales o escribirme a mi email:</p>
        <p>
          <strong>Email: </strong>
          <a href="mailto:estrelladomsan@gmail.com" target='_blank'>estrelladomsan@gmail.com</a>
        </p>
        <div className="social-icons">
          <a href="https://www.instagram.com/estrelladgs" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://www.tiktok.com/@estrelladgs" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <FaTiktok />
          </a>
          <a href="https://www.linkedin.com/in/estrella-dom%C3%ADnguez/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
