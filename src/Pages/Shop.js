import React from 'react';
import { Link } from 'react-router-dom';

const produits = [
  { id: 1, nom: 'Chaussures de course', prix: 79.99 },
  { id: 2, nom: 'T-shirt de sport', prix: 29.99 },
];

const Shop = () => {
  return (
    <div>
      <h1>Nos Produits</h1>
      <ul>
        {produits.map((produit) => (
          <li key={produit.id}>
            <Link to={`/produit/${produit.id}`}>{produit.nom}</Link> - {produit.prix} €
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Shop;
