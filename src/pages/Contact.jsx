import './Contact.css';
import { useState } from 'react';

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
        setStatus('¡Mensaje enviado con éxito!');
        form.reset();
      } else {
        setStatus('Error al enviar el mensaje. Intenta más tarde.');
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
    </section>
  );
}

export default Contact;
