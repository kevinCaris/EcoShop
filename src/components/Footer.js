import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section logo">
        <h1 className="footer-logo"><span>Eco</span>Shop</h1>
        <div className="social-icons">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
        <p className="designer-credit">Designed by @amod khan</p>
      </div>

      <div className="footer-section shop">
        <h2>Shop</h2>
        <ul>
          <li><a href="#">About us</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">FAQ</a></li>
        </ul>
      </div>

      <div className="footer-section contact">
        <h2>Contact</h2>
        <ul>
          <li>+229 62 59 07 75</li>
          <li>ecoshop@gmail.com</li>
          <li>123 Benin, Agbomey-Calavi</li>
        </ul>
          </div>

          <div className="footer-section legal">
        <h2>Mentions légales</h2>
        <ul>
          <li><a href="#">Mentions légales</a></li>
          <li><a href="#">Politique de confidentialité</a></li>
          <li><a href="#">Conditions générales de vente</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
