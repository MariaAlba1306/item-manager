import { useState, ChangeEvent } from "react";

const useFavoritesSearch = (initialValue = "") => {
  const [favoritesSearched, setSearchFavorites] = useState(initialValue);
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchFavorites(event.target.value.toLowerCase());
  };

  return {
    favoritesSearched,
    handleSearchChange,
  };
};

export default useFavoritesSearch;
