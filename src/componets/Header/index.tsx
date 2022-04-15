import React from 'react';

import ImgBrand from '../../app/assets/images/powered.png';

const Header: React.FC = () => {
  return (
    <div className="container-fluid bg-white">
      <div className="container">
        <nav className="navbar navbar-light">
          <a className="navbar-brand" href="#">
            <img src={ImgBrand} alt="IMC" width={150} />
          </a>
        </nav>
      </div>
    </div>
  );
};

export { Header };
