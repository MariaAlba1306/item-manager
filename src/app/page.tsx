"use client";
import { ChangeEvent, useEffect, useState } from "react";
import Header from "./components/header/header";
import ItemCard from "./components/item-card/item-card";
import ItemList from "./components/item-list/item-list";
import SearchBar from "./components/search-bar/search-bar";
import SortBar from "./components/sort/sort";
import { Item } from "./api/api-service";
import useItemsList from "./hooks/useItemsList";
import useSortAndSearch from "./hooks/useFilterList";

import styles from "./page.module.scss";
import searchBarComponentStyles from "./components/search-bar/search-bar.module.scss";

export default function Home() {
  const { itemList, loading } = useItemsList();
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
    {sortValue != 'none' ? (setTypeSelected(true)): null};
    setOrderValue("asc");
  };

  const toggleOrder = () => {
    setOrderValue(orderValue === "asc" ? "desc" : "asc");
  };
  let keyCard = 0;

  return (
    <main className={styles.main}>
      <Header />
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
