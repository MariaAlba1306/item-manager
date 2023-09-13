import { FC, useState } from "react";
import { Item } from "@/app/api/api-service";
import styles from "./item-card.module.scss";
import Image from "next/image";
import favoriteIconUnmarked from "../../assets/icons/favorite-unmarked.svg";
import favoriteIconMarked from "../../assets/icons/favorite-marked.svg";

interface CardElementProps {
  onClickFavorite: React.MouseEventHandler;
  isFavorite: boolean;
  data: Item;
  isModal: boolean;
}

const ItemCard: FC<CardElementProps> = ({
  data,
  onClickFavorite,
  isFavorite,
  isModal,
}) => {
  const { title, price, image, email, description }: Item = data;
  const [isClicked, setIsClicked] = useState(false);
  const handleFavoriteClick = () => {
    if (!isFavorite) {
      setIsClicked(true);

      setTimeout(() => {
        setIsClicked(false);
      }, 500);
    }
  };
  const cardClass = isModal ? styles.ItemCard__small : styles.ItemCard;

  return (
    <div className={cardClass} key="" data-testid="item-element">
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
        <h1 data-testid="card-title" className={styles.ItemCard__info__title}>
          {title}
        </h1>
        {!isModal ? (
          <>
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
          </>
        ) : null}
      </div>
    </div>
  );
};
export default ItemCard;
