import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <header className="Menu">
        <ul className="pages-list">
          <Link to="/" className="underline">Home</Link>
          <Link to="/produtos" className="underline">Adicionar Produtos</Link>
        </ul>
      </header>
    </div>
  );
};
export default Header;