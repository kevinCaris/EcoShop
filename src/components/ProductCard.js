import React from 'react';


const ProductCard = ({ produit, ajouterAuPanier }) => {
  return (
    <div className="produit-card">
      <img src={produit.image} alt={produit.titre} className="produit-image" />
      <h3 className="produit-titre">{produit.titre}</h3>
      <p className="produit-prix">{produit.prix} €</p>
      <button className="btn-panier" onClick={() => ajouterAuPanier(produit)}>
        Ajouter au panier
      </button>
    </div>
  );
};

export default ProductCard;
