import { useState } from "react";
import { Item } from "../api/api-service";

const useFavorites = () => {
  const [favorites, setFavorites] = useState<Item[]>([]);

  const updateFavorites = (itemInfo: Item) => {
    if (isFav(itemInfo.title, favorites)) {
      setFavorites(
        favorites.filter((favorite) => favorite.title !== itemInfo.title)
      );
    } else {
      setFavorites([...favorites, ...[itemInfo]]);
    }
  };

  const isFav = (title: string, favorites: Item[]): boolean => {
    const favIds = favorites.map((favorite) => favorite.title);
    return favIds.includes(title);
  };

  return {
    favorites,
    updateFavorites,
    isFav,
  };
}
export default useFavorites;