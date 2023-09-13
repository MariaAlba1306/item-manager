import { FC, ReactNode } from "react";
import styles from "./item-list.module.scss";

interface ItemProps {
  children: ReactNode;
}

const ItemList: FC<ItemProps> = ({ children }) => {
  return <div className={styles.ItemList}>{children}</div>;
};
export default ItemList;
