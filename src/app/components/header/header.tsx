import Image from "next/image";
import styles from "./header.module.scss";
import logo from "../../assets/images/logo.png";
import favoriteIcon from "../../assets/icons/favorite.svg";

export default function Header() {
  return (
    <div className={styles.Header}>
      <a href="#default">
        <Image src={logo} className={styles.Header__logo} alt="logo" />
      </a>
      <div className={`${styles["Header-button"]}`}>
        <a href="" className={`${styles["Header-button__link"]}`}>
          <div className={`${styles["Header-button__text"]}`}>
            <p>FAVORITES</p>
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
