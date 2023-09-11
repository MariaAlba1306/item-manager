import styles from "./item-card.module.scss";
import Image from "next/image";
import favoriteIconUnmarked from "../../assets/icons/favorite-unmarked.svg";
import favoriteIconMarked from "../../assets/icons/favorite-marked.svg";
import { useState } from "react";

type ItemCardProps = {
  title: string;
  price: string;
  image: string;
  email: string;
  description: string;
};

interface CardElementProps {
  onClickFavorite: React.MouseEventHandler;
  isFavorite: boolean;
  data: any;
}
export function ItemCard({
  data,
  onClickFavorite,
  isFavorite,
}: CardElementProps) {
  const { title, price, image, email, description }: ItemCardProps = data;
  const [isClicked, setIsClicked] = useState(false);
  const handleFavoriteClick = () => {
    if (!isFavorite) {
      setIsClicked(true);

      setTimeout(() => {
        setIsClicked(false);
      }, 500);
    }
  };
  return (
    <div className={styles.ItemCard} key="">
      <div className={styles.ItemCard__image}>
        <Image
          fill={true}
          src={image}
          alt="image"
          className={styles.ItemCard__image__space}
        />
        <div
          onClick={onClickFavorite}
          className={`${styles.ItemCard__image__favorite} ${
            isClicked ? styles.clicked : ""
          }`}
        >
          <Image
            src={isFavorite ? favoriteIconMarked : favoriteIconUnmarked}
            alt="favorite icon"
            className={styles.ItemCard__image__favorite__space}
            onClick={handleFavoriteClick}
          />
        </div>
      </div>
      <div className={styles.ItemCard__info}>
        <p className={styles.ItemCard__info__title}>{title}</p>
        <p className={styles.ItemCard__info__price}>{price}€</p>
        <p className={styles.ItemCard__info__email}>
          <a
            className={styles.ItemCard__info__email__text}
            href={`mailto:${email}`}
          >
            {email}
          </a>
        </p>
        <p className={styles.ItemCard__info__description}>{description}</p>
      </div>
    </div>
  );
}
export default ItemCard;
