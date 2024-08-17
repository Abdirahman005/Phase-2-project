import React, { useState } from 'react';
import Header from './components/Header';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import FavoriteRecipes from './components/FavoriteRecipes';
import AuthForm from './components/AuthForm';

const App = () => {
  const [user, setUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAuthSuccess = (userData) => {
    setUser(userData);
  };

  return (
    <div>
      <Header onSearch={setSearchTerm} />
      {!user ? (
        <AuthForm onAuthSuccess={handleAuthSuccess} />
      ) : (
        <>
          <RecipeList searchTerm={searchTerm} />
          <FavoriteRecipes userId={user.id} />
        </>
      )}
    </div>
  );
};

export default App;