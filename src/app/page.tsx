"use client";
import { ChangeEvent, useEffect, useState } from "react";
import Header from "./components/header/header";
import ItemCard from "./components/item-card/item-card";
import ItemList from "./components/item-list/item-list";
import SearchBar from "./components/search-bar/search-bar";
import SortBar from "./components/sort/sort";
import FavoritesModal from "./components/modal/modal";
import { Item } from "./api/api-service";
import useItemsList from "./hooks/useItemsList";
import useSortAndSearch from "./hooks/useFilterList";

import styles from "./page.module.scss";
import searchBarComponentStyles from "./components/search-bar/search-bar.module.scss";

export default function Home() {
  const { itemList, loading } = useItemsList();
  const [isTypeSelected, setTypeSelected] = useState<boolean>(false);
  const [shouldShowModal, setShouldShowModal] = useState<boolean>(false);

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

  const favorites = [
    {
      title: "iPhone 6S Oro",
      description:
        "Vendo un iPhone 6 S color Oro nuevo y sin estrenar. Me han dado uno en el trabajo y no necesito el que me compré. En tienda lo encuentras por 749 euros y yo lo vendo por 740. Las descripciones las puedes encontrar en la web de apple. Esta libre.",
      price: "740",
      email: "iphonemail@wallapop.com",
      image:
        "https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/iphone.png",
    },
  ];
  return (
    <main className={styles.main}>
      <Header toggleModal={toggleModal} />
      {shouldShowModal ? (
        <FavoritesModal
          isOpen={shouldShowModal}
          toggleModal={toggleModal}
          favorites={favorites}
        />
      ) : null}
      <SearchBar
        className={`${searchBarComponentStyles.Searchbox__input} `}
        placeholder="Type your item..."
        value={itemsSearched}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setItemsSearched(event.target.value.toLowerCase())
        }
      ></SearchBar>
      <SortBar
        value={sortValue}
        onChange={handleSortChange}
        onClick={toggleOrder}
        isSorted={isTypeSelected}
      />
      <ItemList>
        {!loading
          ? filteredItems.map((itemInfo: Item) => {
              return <ItemCard key={keyCard++} data={itemInfo} />;
            })
          : null}
      </ItemList>
    </main>
  );
}
