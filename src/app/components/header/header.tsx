import Image from "next/image";
import styles from "./header.module.scss";
import logo from "../../assets/images/logo.png";
import favoriteIcon from "../../assets/icons/favorite-unmarked.svg";
import SearchBar from "../search-bar/search-bar";
import { ChangeEvent } from "react";
interface Props {
  toggleModal: () => void;
  children: any;
}
export default function Header({ toggleModal, children }: Props) {
  return (
    <div className={styles.Header}>
      <a href="#default">
        <Image src={logo} className={styles.Header__logo} alt="logo" />
      </a>
      <div>{children}</div>
      <div className={`${styles["Header-button"]}`}>
        <a className={`${styles["Header-button__link"]}`} onClick={toggleModal}>
          <div className={`${styles["Header-button__text"]}`}>
            <p>Favorites</p>
          </div>
          <div className={`${styles["Header-button__text__icon"]}`}>
            <Image
              src={favoriteIcon}
              alt="favorite icon"
              className={`${styles["Header-button__text__image"]}`}
            />
          </div>
        </a>
      </div>
    </div>
  );
}
