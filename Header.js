import React from 'react';

const Header = ({ onSearch }) => {
  return (
    <header>
      <h1>Recipe App</h1>
      <input type="text" placeholder="Search Recipes..." onChange={(e) => onSearch(e.target.value)} />
    </header>
  );
};

export default Header;