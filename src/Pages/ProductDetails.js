import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Pour obtenir l'ID du produit depuis l'URL
import axios from 'axios';
import { Spinner, Tab, Tabs } from 'react-bootstrap'; // Utilisation du spinner pour le chargement

const ProductDetail = ({ ajouterAuPanier }) => {
  const { id } = useParams(); // Récupérer l'ID du produit depuis l'URL
  const [produit, setProduit] = useState(null); // État pour stocker les détails du produit
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Récupérer les détails du produit depuis Fake Store API
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(response => {
        setProduit(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Erreur lors de la récupération du produit :", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="text-center my-5">
        <Spinner animation="border" role="status">
          <span className="sr-only">Chargement...</span>
        </Spinner>
        <p>Chargement des détails du produit...</p>
      </div>
    );
  }

  if (!produit) {
    return <p>Produit non trouvé</p>;
  }

  return (
    <div className="container product-detail mt-8">
      <div className="row">
        {/* Section pour l'image du produit */}
        <div className="col-md-6">
          <img
            src={produit.image}
            alt={produit.title}
            className="img-fluid"
            style={{ maxHeight: '400px', objectFit: 'cover' }}
          />
        </div>

        {/* Section pour les informations sur le produit */}
        <div className="col-md-6 text-start">
          <h2>{produit.title}</h2>
          <p className="product-price"><strong>Prix : </strong>{produit.price} €</p>
          <div className="product-rating my-3">
            <span>⭐⭐⭐⭐☆</span> <span>({produit.rating.count} avis)</span>
          </div>
          <p className="product-category fw-bold fs-5">Cartégorie :{produit.category}</p>
          <p className="product-description">{produit.description}</p>


          {/* Boutons d'action */}
          <div className="product-actions gap-5">
            <button className="btn1  btn-lg me-3" onClick={() => ajouterAuPanier(produit)}>Acheter maintenant</button>
            <button className="btn2  btn-lg me-3" onClick={() => ajouterAuPanier(produit)}>Ajouter au panier</button>
          </div>
        </div>
      </div>
      {/* Onglets pour plus d'informations */}
      <div className=" onglet row mt-5">
        <div className="col-md-12">
          <Tabs defaultActiveKey="details" id="product-tabs" className="custom-tabs">
            {/* Onglet Détails */}
            <Tab eventKey="details" title="Détails"  className="custom-tab-content">
              <div className="mt-3">
                <h4>Détails du produit</h4>
                <p>{produit.description}</p>
                <ul>
                  <li><strong>Catégorie : </strong>{produit.category}</li>
                </ul>
              </div>
            </Tab>

            {/* Onglet Spécifications */}
            <Tab eventKey="specifications" title="Spécifications"  className="custom-tab-content">
              <div className="mt-3">
                <h4 className='text-black'>Spécifications techniques</h4>
                <ul>
                  <li><strong>Prix : </strong>{produit.price} €</li>
                  <li><strong>Catégorie : </strong>{produit.category}</li>
                  {/* Tu peux ajouter plus de spécifications si disponible */}
                </ul>
              </div>
            </Tab>

            {/* Onglet Avis */}
            <Tab eventKey="reviews" title="Avis"  className="custom-tab-content">
              <div className="mt-3">
                <h4>Avis des utilisateurs</h4>
                <p>Ce produit n'a pas encore d'avis. Sois le premier à en laisser un !</p>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
