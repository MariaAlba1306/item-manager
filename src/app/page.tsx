"use client";
import { ChangeEvent, useState } from "react";
import { Item } from "./api/api-service";

import Header from "./components/header/header";
import ItemCard from "./components/item-card/item-card";
import ItemList from "./components/item-list/item-list";
import SearchBar from "./components/search-bar/search-bar";
import SortBar from "./components/sort/sort";
import FavoritesModal from "./components/modal/modal";
import NoResults from "./components/no-results/no-results";
import ErrorPage from "./components/error-page/error-page";

import searchBarComponentStyles from "./components/search-bar/search-bar.module.scss";
import buttonStyles from "./components/button/button.module.scss";
import styles from "./page.module.scss";

import useFavoritesSearch from "./hooks/useFavModalSearch";
import useFavorites from "./hooks/useFavorites";
import usePagination from "./hooks/usePagination";
import useItemsList from "./hooks/useItemsList";
import useSortAndSearch from "./hooks/useFilterList";

export default function Home() {
  const { itemList, loading, error } = useItemsList();
  const { favorites, updateFavorites, isFav } = useFavorites();
  const { favoritesSearched, handleSearchChange } = useFavoritesSearch();
  const {
    itemsSearched,
    setItemsSearched,
    orderValue,
    setOrderValue,
    sortValue,
    setSortValue,
    filteredItems,
  } = useSortAndSearch(itemList);

  const { currentPage, nextPage, prevPage, getPageRange } = usePagination();
  const { startIndex, endIndex } = getPageRange(filteredItems.length);

  const [shouldShowModal, setShouldShowModal] = useState<boolean>(false);

  const handleSortChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSortValue(event.target.value);
    setOrderValue("asc");
  };

  const toggleOrder = () => {
    setOrderValue(orderValue === "asc" ? "desc" : "asc");
  };
  function toggleModal(): void {
    {
      !shouldShowModal
        ? (document.body.style.overflow = "hidden")
        : (document.body.style.overflow = "auto");
    }
    setShouldShowModal(!shouldShowModal);
  }

  let keyCard = 0;

  return (
    <main className={styles.main}>
      <Header toggleModal={toggleModal}>
        <SearchBar
          className={`${searchBarComponentStyles.Searchbar__input} `}
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
      {error ? (
        <ErrorPage error={error} />
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <SortBar
            value={sortValue}
            onChange={handleSortChange}
            onClick={toggleOrder}
            isIconVisible={sortValue}
            isIconAscendant={orderValue}
          />
          <ItemList>
            {!loading && filteredItems.length === 0 ? (
              <NoResults message="No results. Try another search." />
            ) : (
              filteredItems
                .slice(startIndex, endIndex)
                .map((itemInfo: Item) => (
                  <ItemCard
                    key={keyCard++}
                    data={itemInfo}
                    onClickFavorite={() => updateFavorites(itemInfo)}
                    isFavorite={isFav(itemInfo.title, favorites)}
                  />
                ))
            )}
          </ItemList>
          {filteredItems.length > 5 && (
            <div className={buttonStyles.Pagination}>
              <button
                className={buttonStyles.Pagination__button}
                onClick={prevPage}
                disabled={currentPage === 1}
              >
                Previous Page
              </button>
              <div>{currentPage}</div>
              <button
                className={buttonStyles.Pagination__button}
                onClick={nextPage}
                disabled={currentPage * 5 >= filteredItems.length}
              >
                Next Page
              </button>
            </div>
          )}
        </>
      )}
    </main>
  );
}
