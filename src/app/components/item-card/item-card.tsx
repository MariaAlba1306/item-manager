import styles from "./item-card.module.scss";
import Image from "next/image";
import favoriteIcon from "../../assets/icons/favorite.svg";

type ItemCardProps = {
  title: string;
  price: string;
  image: string;
  email: string;
  description: string;
};
export function ItemCard({
  title,
  price,
  image,
  email,
  description,
}: ItemCardProps) {
  return (
    <div className={styles.ItemCard} key="">
      <div className={styles.ItemCard__image}>
        <Image
          fill={true}
          src={image}
          alt="image"
          className={styles.ItemCard__image__space}
        />
        <div className={styles.ItemCard__image__favorite}>
          <Image
            src={favoriteIcon}
            alt="favorite icon"
            className={styles.ItemCard__image__favorite__space}
          />
        </div>
      </div>
      <div className={styles.ItemCard__info}>
        <p className={styles.ItemCard__info__title}>{title}</p>
        <p className={styles.ItemCard__info__price}>{price}€</p>
        <p className={styles.ItemCard__info__email}>
          <a className={styles.ItemCard__info__email__text} href={`mailto:${email}`}>
            {email}
          </a>
        </p>
        <p className={styles.ItemCard__info__description}>{description}</p>
      </div>
    </div>
  );
}
export default ItemCard;
