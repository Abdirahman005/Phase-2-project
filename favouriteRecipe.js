import React, { useEffect, useState } from 'react';
import { getFavorites } from '../services/api';

const FavoriteRecipes = ({ userId }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      const response = await getFavorites(userId);
      setFavorites(response.data);
    };

    fetchFavorites();
  }, [userId]);

  return (
    <div>
      <h2>My Favorite Recipes</h2>
      <ul>
        {favorites.map(favorite => (
          <li key={favorite.id}>{favorite.recipeTitle}</li>
        ))}
      </ul>
    </div>
  );
};

export default FavoriteRecipes;