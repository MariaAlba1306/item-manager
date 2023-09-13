import { FC, ReactNode } from "react";
import Image from "next/image";
import styles from "./header.module.scss";
import logo from "../../assets/images/logo.png";
import favoriteIcon from "../../assets/icons/favorite-unmarked.svg";

interface HeaderProps {
  toggleModal: () => void;
  children: ReactNode;
}

const Header: FC<HeaderProps> = ({ toggleModal, children }) => {
  return (
    <div className={styles.Header}>
      <a href="#default">
        <Image src={logo} className={styles.Header__logo} alt="logo" />
      </a>
      <div>{children}</div>
      <div className={`${styles["Header-button"]}`}>
        <a
          className={`${styles["Header-button__link"]}`}
          onClick={toggleModal}
          data-testid="favorites-button-modal"
        >
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
};
export default Header;
