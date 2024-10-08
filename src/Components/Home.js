import React from 'react';

const Home = () => {
  return (
    <div>
      <div className="banner">
        <div className="hero-text">
          <div>
            <p className="floating-words">
              <li>ethically-sourced</li>
              <li>woman-owned</li>
              <li>luxurious quality</li>
              <li>sustainable</li>
              <li>made with love</li>
            </p>
          </div>
        </div>
        <img
          src={
            'https://media.architecturaldigest.com/photos/5eac5fa22105f13b72dede45/4:3/w_1420,h_1065,c_limit/111LexowAve_Aug18-1074.jpg'
          }
          alt="homepage_bed"
          width="100%"
        />
      </div>
    </div>
  );
};

export default Home;
