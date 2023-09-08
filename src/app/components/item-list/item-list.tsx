import ItemCard from "../item-card/item-card";
import styles from "./item-list.module.scss";

import { cardInfo } from "../item-card/card.info";

export function ItemList({ children }: any) {
  return <div className={styles.ItemList}>{children}</div>;
}
export default ItemList;
