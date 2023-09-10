"use client";
import { ChangeEvent, useState } from "react";
import Header from "./components/header/header";
import ItemCard from "./components/item-card/item-card";
import ItemList from "./components/item-list/item-list";
import SearchBar from "./components/search-bar/search-bar";
import SortBar from "./components/sort/sort";
import FavoritesModal from "./components/modal/modal";
import NoResults from "./components/no-results/no-results";

import useFavoritesSearch from "./hooks/useFavModalSearch";
import { useFavorites } from "./hooks/useFavorites";
import useItemsList from "./hooks/useItemsList";
import useSortAndSearch from "./hooks/useFilterList";

import styles from "./page.module.scss";
import searchBarComponentStyles from "./components/search-bar/search-bar.module.scss";


export default function Home() {
  const { itemList, loading, error } = useItemsList();
  const { favorites, updateFavorites, isFav } = useFavorites();
  const { favoritesSearched, handleSearchChange } = useFavoritesSearch();
  const [shouldShowModal, setShouldShowModal] = useState<boolean>(false);
  const [isTypeSelected, setTypeSelected] = useState<boolean>(false);

  const {
    itemsSearched,
    setItemsSearched,
    orderValue,
    setOrderValue,
    sortValue,
    setSortValue,
    filteredItems,
  } = useSortAndSearch(itemList);

  const handleSortChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSortValue(event.target.value);
    {
      sortValue != "none" ? setTypeSelected(true) : null;
    }
    setOrderValue("asc");
  };

  const toggleOrder = () => {
    setOrderValue(orderValue === "asc" ? "desc" : "asc");
  };
  function toggleModal(): void {
    setShouldShowModal(!shouldShowModal);
  }

  let keyCard = 0;

  return (
    <main className={styles.main}>
      <Header toggleModal={toggleModal}>
        <SearchBar
          className={`${searchBarComponentStyles.Searchbox__input} `}
          placeholder="Type your item..."
          value={itemsSearched}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setItemsSearched(event.target.value.toLowerCase())
          }
        ></SearchBar>
      </Header>
      {shouldShowModal ? (
        <FavoritesModal
          isOpen={shouldShowModal}
          toggleModal={toggleModal}
          favorites={favorites}
          favoritesSearched={favoritesSearched}
          handleSearchChange={handleSearchChange}
          updateFavorites={updateFavorites}
          isFav={isFav}
        />
      ) : null}

      <SortBar
        value={sortValue}
        onChange={handleSortChange}
        onClick={toggleOrder}
        isSorted={isTypeSelected}
      />

      <ItemList>
        {!loading && filteredItems.length === 0 ? (
          <NoResults message="No results. Try another search." />
        ) : (
          filteredItems.map((itemInfo: any) => (
            <ItemCard
              key={keyCard++}
              data={itemInfo}
              onClickFavorite={() => updateFavorites(itemInfo)}
              isFavorite={isFav(itemInfo.title, favorites)}
            />
          ))
        )}
      </ItemList>
    </main>
  );
}
