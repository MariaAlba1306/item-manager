import Image from "next/image";
import styles from "./page.module.scss";
import Header from "./components/header/header";
import ItemList from "./components/item-list/item-list";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <ItemList/>
    </main>
  );
}
