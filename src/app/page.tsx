"use client";
import styles from "./page.module.scss";
import Header from "./components/header/header";
import ItemList from "./components/item-list/item-list";
import useItemsList from "./hooks/useItemsList";
import ItemCard from "./components/item-card/item-card";
import { Item } from "./api/api-service";
import SearchBar from "./components/search-bar/search-bar";
import { ChangeEvent, useState } from "react";
import styles2 from "./components/search-bar/search-bar.module.scss";
export default function Home() {
  const { itemList, loading } = useItemsList();
  const [itemsSearched, setItemsSearched] = useState<string>("");
  let keyCard = 0;
  return (
    <main className={styles.main}>
      <Header />
      <SearchBar
        className={`${styles2.Searchbox__input} ${styles2.light} ${styles2.medium}`}
        placeholder="Type your item..."
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setItemsSearched(event.target.value.toLowerCase())
        }
      ></SearchBar>
      <ItemList>
        {!loading
          ? itemList
              .filter((data) =>
                data.title.toLowerCase().includes(itemsSearched)
              )
              .map((itemInfo: Item) => {
                return <ItemCard key={keyCard++} data={itemInfo} />;
              })
          : null}
      </ItemList>
    </main>
  );
}
