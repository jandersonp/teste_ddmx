import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './styles.css';

const Header: React.FC = () => {
  return (
    <div id="page-home">
      <div className="content">
        <main>
          <h1>DDMX coleta de resíduos.</h1>
          <p>
            Uma plataforma para ajudar as pessoas a encontrarem pontos de
            coletas de resíduos.
          </p>

          <Link to="/create-point">
            <span>
              <FiLogIn />
            </span>
            <strong>Cadastre um ponto de coleta</strong>
          </Link>
        </main>
      </div>
    </div>
  );
};

export default Header;
