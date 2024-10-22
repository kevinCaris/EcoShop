import React, { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import ProductList from '../components/ProductList';
import axios from 'axios';
import { Pagination, Spinner } from 'react-bootstrap';

const Shop = () => {
  const [recherche, setRecherche] = useState('');
  const [panier, setPanier] = useState([]);
  const [tri, setTri] = useState(''); // État pour le critère de tri
  const [produits, setProduits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1); // Page actuelle
  const [productsPerPage] = useState(8); // Nombre de produits par page

  useEffect(() => {
    // Récupérer les produits depuis Fake Store API
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProduits(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Erreur lors de la récupération des produits :", error);
        setLoading(false);
      });
  }, []);

  // Pagination Logic
  const indexOfLastProduct = currentPage * productsPerPage; // Index du dernier produit
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage; // Index du premier produit

  // Fonction pour changer de page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return (
      <div className="text-center my-5"> {/* Centrer le spinner */}
        <Spinner animation="border" role="status">
          <span className="sr-only">Chargement des produits...</span>
        </Spinner>
        <p>Chargement des produits...</p>
      </div>
    );
  }

  // Filtrer les produits en fonction de la recherche
  const produitsFiltres = produits.filter((produit) =>
    produit.title.toLowerCase().includes(recherche.toLowerCase())
  );

  // Tri des produits filtrés
  const produitsTries = [...produitsFiltres].sort((a, b) => {
    if (tri === 'prix-asc') {
      return a.price - b.price; // Tri par prix croissant
    } else if (tri === 'prix-desc') {
      return b.price - a.price; // Tri par prix décroissant
    } else if (tri === 'nom') {
      return a.title.localeCompare(b.title); // Tri par nom (ordre alphabétique)
    }
    return 0; // Si aucun critère de tri n'est sélectionné
  });

  // Produits actuels après pagination
  const currentProducts = produitsTries.slice(indexOfFirstProduct, indexOfLastProduct);

  // Ajouter au panier
  const ajouterAuPanier = (produit) => {
    setPanier([...panier, produit]);
  };

  // Retirer du panier
  const retirerDuPanier = (index) => {
    const nouveauPanier = panier.filter((_, i) => i !== index);
    setPanier(nouveauPanier);
  };

  return (
    <div className="shop-container container mt-4">
      <div className='shop-hero'>
        <h1 className=''>Shop</h1>
      </div>

      {/* Row for SearchBar and Sort */}
      <div className="row mb-4">
        {/* SearchBar */}
        <div className="col-md-6 col-lg-5 col-12 mb-3 ">
          <SearchBar recherche={recherche} setRecherche={setRecherche} />
        </div>
        <div className='col-md-6 col-lg-2 col-12' ></div>
        {/* Dropdown for sorting */}
        <div className="col-md-6 col-lg-5 col-12 text-right" >
          <select
            className="form-control"
            onChange={(e) => setTri(e.target.value)}
            value={tri}
          >
            <option value="">Trier par</option>
            <option value="prix-asc">Prix croissant</option>
            <option value="prix-desc">Prix décroissant</option>
            <option value="nom">Nom (A-Z)</option>
          </select>
        </div>
      </div>

      {/* Affichage de la liste de produits */}
      <ProductList produitsFiltres={currentProducts} ajouterAuPanier={ajouterAuPanier} />

      {/* Pagination */}
      <div className='d-flex align-item-center justify-content-center my-5' >
        <Pagination className='text-center'>
            {[...Array(Math.ceil(produitsTries.length / productsPerPage))].map((_, index) => (
              <Pagination.Item
                key={index + 1}
                active={index + 1 === currentPage}
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </Pagination.Item>
            ))}
          </Pagination>
      </div>

    </div>
  );
};

export default Shop;
