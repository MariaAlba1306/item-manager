import React from "react";
import Image from "next/image";
import SearchBar from "../search-bar/search-bar";
import ItemCard from "../item-card/item-card";
import styles from "./modal.module.scss";
import useFavoritesSearch from "./../../hooks/useFavorites";
import searchBarComponentStyles from "./../search-bar/search-bar.module.scss";
import { Item } from "@/app/api/api-service";
import closeIcon from "./../../assets/icons/close.svg";

type FavoriteModalProps = {
  isOpen: boolean;
  toggleModal: () => void;
  favorites: Item[];
};

function FavoritesModal({
  isOpen,
  toggleModal,
  favorites,
}: FavoriteModalProps) {
  const { favoritesSearched, handleSearchChange } = useFavoritesSearch();
let keyCard = 0;
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
          <SearchBar
            className={`${searchBarComponentStyles.Searchbox__input} `}
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
                <ItemCard data={filteredName} key={keyCard++} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FavoritesModal;
