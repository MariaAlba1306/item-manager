"use client";
import Image from "next/image";
import styles from "./page.module.scss";
import Header from "./components/header/header";
import ItemList from "./components/item-list/item-list";
import useItemsList from "./hooks/useItemsList";
import ItemCard from "./components/item-card/item-card";
import { Item } from "./api/api-service";

export default function Home() {
  const { itemList, setItemList, loading, error } = useItemsList();
  let keyCard = 0;
  return (
    <main className={styles.main}>
      <Header />
      <ItemList>
        {!loading
          ? itemList.map((itemInfo: Item) => {
              return <ItemCard key={keyCard++} data={itemInfo} />;
            })
          : null}
      </ItemList>
    </main>
  );
}
