import ItemCard from "../item-card/item-card";
import styles from "./item-list.module.scss";

import { cardInfo } from "../item-card/card.info";

export function ItemList() {
  let keyCard = 0;
  return (
    <div className={styles.ItemList}>
      {
        cardInfo.map(({ title, price, image, email, description }) => (
          <ItemCard
            key={keyCard++}
            title={title}
            image={image}
            price={price}
            email={email}
            description={description}
          />
        ))}
    </div>
  );
}
export default ItemList;
