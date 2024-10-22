import React from 'react';
import { Form, FormControl, Button, NavItem } from 'react-bootstrap';
import Navigation from './Navigation';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header'>
        <nav className="navbar navbar-expand-lg  d-flex  align-items-center px-3 py-3">
                <NavLink Item className="navbar-brand fw-bold fs-2 ms-3" to="/"><span>Eco</span>Shop</NavLink>
                <button className="navbar-toggler  "  type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon navbar-toggler-icon-white  "></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <Navigation></Navigation>
                    {/* Barre de recherche */}
                    <div className=" icone me-4">
                        <a href="#" className="search">
                             <i className="fas fa-search"style={{ fontSize: '1.1em' }}></i>
                            </a>
                    </div>

                    {/* Icône de Panier */}
                   <div className="icone me-4">
                            <Link to="/cart" className="panier">
                                <i className="fas fa-shopping-cart" style={{ fontSize: '1.1em' }}></i>
                            </Link>
                  </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
