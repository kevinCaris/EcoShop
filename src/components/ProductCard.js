import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';


const ProductCard = ({ produit}) => {

  const { ajouterAuPanier } = useCart();

  return (
    <div className="card h-100 d-flex flex-column">
      <Link to={`/productDetail/${produit.id}`} className="card-link">

          <img src={produit.image} alt={produit.title} className="card-img-top" />
          <p className="cad-category py-2">{produit.category}</p>
          <h3 className="cad-title">{produit.title}</h3>
          <p className="cad-price">{produit.price} €</p>

      </Link>

      <button className="btn-panier" onClick={() => ajouterAuPanier(produit)}>
        Ajouter au panier
      </button>
      {/* <Link to={`/produit/${produit.id}`} className="icon-detail">
        🛈 Détails
      </Link> */}
    </div>
  );
};

export default ProductCard;
