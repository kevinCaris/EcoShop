import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ produitsFiltres, ajouterAuPanier }) => {
    return (
        <div className="row">
            {produitsFiltres.length > 0 ? (
                produitsFiltres.map((produit) => (
                    <div key={produit.id} className="col-12 col-md-4 col-lg-3 mb-4 mb-4">
                        <ProductCard produit={produit} ajouterAuPanier={ajouterAuPanier} />
                    </div>
                ))
            ) : (
                <p className='fs-5 my-5 fw-bold'>Aucun produit trouvé !</p>
            )}
        </div>
    );
};

export default ProductList;
