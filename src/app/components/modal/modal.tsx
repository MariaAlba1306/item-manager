import React from "react";
import Image from "next/image";
import { Item } from "@/app/api/api-service";
import SearchBar from "../search-bar/search-bar";
import ItemCard from "../item-card/item-card";
import NoResults from "../no-results/no-results";
import styles from "./modal.module.scss";
import searchBarComponentStyles from "./../search-bar/search-bar.module.scss";
import closeIcon from "./../../assets/icons/close.svg";

type FavoriteModalProps = {
  isOpen: boolean;
  toggleModal: () => void;
  favorites: Item[];
  favoritesSearched: string;
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  updateFavorites: (itemList: Item) => void;
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
  const filteredFavorites = favorites.filter((data) =>
    data.title.toLowerCase().includes(favoritesSearched)
  );
  return (
    <div
      className={`${styles.FavoritesModal}${isOpen ? ` ${styles.open}` : ""}`}
      data-testid="favorites-modal"
    >
      <div className={styles.FavoritesModal__modal}>
        <Image
          className={styles.FavoritesModal__close}
          src={closeIcon}
          onClick={toggleModal}
          alt="closing icon"
          data-testid="modal-close"
        />
        {hasFavorites ? (
          <p className={styles.FavoritesModal__title}>Your favorites</p>
        ) : null}
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
                {filteredFavorites.length === 0 ? (
                  <NoResults message="No favorites match your search" />
                ) : (
                  filteredFavorites.map((filteredName) => (
                    <ItemCard
                      isModal={true}
                      onClickFavorite={() => updateFavorites(filteredName)}
                      isFavorite={isFav(filteredName.title, favorites)}
                      data={filteredName}
                      key={filteredName.title}
                    />
                  ))
                )}
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
