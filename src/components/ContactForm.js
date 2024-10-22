import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    sujet: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  // Fonction pour mettre à jour l'état lorsqu'un champ est modifié
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous pouvez ajouter la logique pour envoyer les données (API, etc.)
    console.log('Formulaire soumis:', formData);
    setFormSubmitted(true);
  };

  return (
    <div className="contact-form-container text-start ">
      <h2>Contactez-nous</h2>
      {formSubmitted ? (
        <div className="success-message">
          Merci de nous avoir contactés, nous reviendrons vers vous sous peu.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="nom">Nom</label>
            <input
              type="text"
              id="nom"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="sujet">Sujet</label>
            <input
              type="text"
              id="sujet"
              name="sujet"
              value={formData.sujet}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn-submit">Envoyer</button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
