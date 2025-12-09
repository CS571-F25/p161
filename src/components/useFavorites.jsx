import { useState, useEffect } from "react";

export default function useFavorites() {
  const [favorites, setFavorites] = useState([]);

  // Storing favorites in local storage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(stored);
  }, []);

  // Updating local storage when favorites change
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Function to toggle favorite status
  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  // Checking to see if a destination is favorited
  const isFavorite = (id) => favorites.includes(id);

  return { favorites, toggleFavorite, isFavorite };
}
