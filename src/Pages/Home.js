import React from 'react';
const Home = () => {
  return (
    <div className="home">

      {/* Section Hero */}
      <section className="hero-section text-center  py-5" >
        <div className="container">
          <h1 className="display-4">"Stay Healthy"</h1>
          <p className="lead">Des produits frais et bio pour une vie plus saine.</p>
          <button className="btn btn-primary">Shop Now</button>
        </div>
      </section>

      {/* Steps Section */}
      <section className="steps-section py-4 bg-light">
        <div className="container d-flex justify-content-around">
          <div className="text-center">
            <img src="images/step1-icon.png" alt="Step 1" />
            <p>Select Products</p>
          </div>
          <div className="text-center">
            <img src="images/step2-icon.png" alt="Step 2" />
            <p>Add to Cart</p>
          </div>
          <div className="text-center">
            <img src="images/step3-icon.png" alt="Step 3" />
            <p>Check Out</p>
          </div>
          <div className="text-center">
            <img src="images/step4-icon.png" alt="Step 4" />
            <p>Waiting for Delivery</p>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products-section py-5">
        <div className="container text-center">
          <h2>Featured Products</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="row">
            <div className="col-md-3">
              <div className="card">
                <img src="images/product1.jpg" className="card-img-top" alt="Product 1" />
                <div className="card-body">
                  <h5 className="card-title">Organic Meat</h5>
                  <p className="card-text">$69</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img src="images/product2.jpg" className="card-img-top" alt="Product 2" />
                <div className="card-body">
                  <h5 className="card-title">Fresh Broccoli</h5>
                  <p className="card-text">$190</p>
                </div>
              </div>
            </div>
            {/* Ajoutez d'autres produits ici */}
          </div>
        </div>
      </section>

      {/* Deal of the Day Section */}
      <section className="deal-of-the-day-section text-white py-5" style={{ backgroundColor: '#4CAF50' }}>
        <div className="container text-center">
          <h2>Deal of the Day</h2>
          <p>Only $48 for fresh lemons and mint.</p>
          <button className="btn btn-dark">Shop Now</button>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us-section py-5">
        <div className="container text-center">
          <h2>Why Choose Us?</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="row">
            <div className="col-md-4">
              <i className="fas fa-leaf"></i>
              <h5>100% Fresh Food</h5>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="col-md-4">
              <i className="fas fa-shipping-fast"></i>
              <h5>Fast Free Delivery</h5>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="col-md-4">
              <i className="fas fa-heart"></i>
              <h5>Good for Health</h5>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Blogs Section */}
      <section className="recent-blogs-section py-5 bg-light">
        <div className="container text-center">
          <h2>Recent Blogs</h2>
          <div className="row">
            <div className="col-md-4">
              <img src="images/blog1.jpg" alt="Blog 1" className="img-fluid" />
              <h5>Blog Post Title</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="col-md-4">
              <img src="images/blog2.jpg" alt="Blog 2" className="img-fluid" />
              <h5>Blog Post Title</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="col-md-4">
              <img src="images/blog3.jpg" alt="Blog 3" className="img-fluid" />
              <h5>Blog Post Title</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
