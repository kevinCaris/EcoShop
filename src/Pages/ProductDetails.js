
import React from 'react';
import { useParams } from 'react-router-dom';

const produits = [
  { id: 1, nom: 'Chaussures de course', description: 'Chaussures légères et confortables.', prix: 79.99 },
  { id: 2, nom: 'T-shirt de sport', description: 'T-shirt respirant pour le sport.', prix: 29.99 },
];

const ProductDetail = () => {
  const { id } = useParams();
  const produit = produits.find((p) => p.id === parseInt(id));

  return (
    <div>
      {produit ? (
        <>
          <h1>{produit.nom}</h1>
          <p>{produit.description}</p>
          <p>Prix : {produit.prix} €</p>
        </>
      ) : (
        <p>Produit non trouvé</p>
      )}
    </div>
  );
};

export default ProductDetail;
