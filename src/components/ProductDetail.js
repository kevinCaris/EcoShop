import React from 'react';

const ProductDetail = ({ produit, ajouterAuPanier }) => {
  return (
    <div className="produit-details-container">
      <div className="produit-image-section">
        <img src={produit.image} alt={produit.nom} className="produit-image" />
      </div>
      <div className="produit-info-section">
        <h1 className="produit-nom">{produit.nom}</h1>
        <p className="produit-description">{produit.description}</p>
        <p className="produit-prix">{produit.prix} €</p>
        <button className="btn-panier" onClick={() => ajouterAuPanier(produit)}>
          Ajouter au panier
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
