import React, { useState } from 'react';
import ProductCard from './ProductCard';


const Produits = () => {
  const [panier, setPanier] = useState([]);

  const produits = [
    {
      id: 0,
      titre: 'Produit 1',
      prix: 19.99,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 1,
      titre: 'Produit 2',
      prix: 29.99,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      titre: 'Produit 3',
      prix: 39.99,
      image: 'https://via.placeholder.com/150',
      },
    {
      id: 3,
      titre: 'Produit 3',
      prix: 39.99,
      image: 'https://via.placeholder.com/150',
    },
  ];

  const ajouterAuPanier = (produit) => {
    setPanier([...panier, produit]);
    console.log('Produit ajouté au panier :', produit);
  };

  return (
    <div className="page-produits">
          {produits.map((produit) => (
          <ProductCard key={produit.id} produit={produit} ajouterAuPanier={ajouterAuPanier}/>
      ))}
    </div>
  );
};

export default Produits;
