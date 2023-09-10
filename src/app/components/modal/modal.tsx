import React, { useState } from "react";
import Image from "next/image";
import SearchBar from "../search-bar/search-bar";
import ItemCard from "../item-card/item-card";
import styles from "./modal.module.scss";
import { Item } from "@/app/api/api-service";
import closeIcon from "./../../assets/icons/close.svg";
import searchBarComponentStyles from "./../search-bar/search-bar.module.scss";
import NoResults from "../no-results/no-results";

type FavoriteModalProps = {
  isOpen: boolean;
  toggleModal: () => void;
  favorites: Item[];
  favoritesSearched: string;
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  updateFavorites: (itemList: any) => void;
  isFav: (title: string, favorites: Item[]) => boolean;
};

function FavoritesModal({
  isOpen,
  toggleModal,
  favorites,
  favoritesSearched,
  handleSearchChange,
  updateFavorites,
  isFav,
}: FavoriteModalProps) {
  const hasFavorites = favorites.length > 0;

  return (
    <div
      className={`${styles.FavoritesModal}${isOpen ? ` ${styles.open}` : ""}`}
    >
      <div className={styles.FavoritesModal__modal}>
        <Image
          className={styles.FavoritesModal__close}
          src={closeIcon}
          onClick={toggleModal}
          alt="closing icon"
        />
        <div className={styles.FavoritesModal__search}>
          {hasFavorites ? (
            <>
              <SearchBar
                className={`${searchBarComponentStyles.Searchbar__input} `}
                placeholder="Search your favorite item..."
                onChange={handleSearchChange}
                value={favoritesSearched}
              />
              <div className={styles.FavoritesModal__list}>
                {favorites
                  .filter((data: any) =>
                    data.title.toLowerCase().includes(favoritesSearched)
                  )
                  .map((filteredName: any) => (
                    <ItemCard
                      onClickFavorite={() => updateFavorites(filteredName)}
                      isFavorite={isFav(filteredName.title, favorites)}
                      data={filteredName}
                      key={filteredName.id}
                    />
                  ))}
              </div>
            </>
          ) : (
            <NoResults
              message="Create your favorite.
As you search, click the 🧡 icon to save your favorite item"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default FavoritesModal;
