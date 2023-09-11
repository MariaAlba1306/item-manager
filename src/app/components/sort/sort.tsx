import Image from "next/image";
import { ChangeEventHandler } from "react";
import styles from "./sort.module.scss";
import sortIconDesc from "./../../assets/icons/sorting-desc.svg";
import sortIconAsc from "./../../assets/icons/sorting-asc.svg";

interface Props {
  onChange: ChangeEventHandler;
  onClick: React.MouseEventHandler;
  value: string;
  isIconVisible: string;
  isIconAscendant: string;
}

export default function SortBar({
  onChange,
  onClick,
  value,
  isIconVisible,
  isIconAscendant,
}: Props) {
  return (
    <div className={styles.Sort}>
      <form className={styles.Sort__form}>
        <label className={styles.Sort__form__label}>Sort by:</label>
        <select
          className={styles.Sort__form__select}
          value={value}
          onChange={onChange}
        >
          <option value="none">None</option>
          <option value="title">Title</option>
          <option value="description">Description</option>
          <option value="price">Price</option>
          <option value="email">E-mail</option>
        </select>
      </form>
      {isIconVisible != "none" ? (
        <div className={styles.Sort__image}>
          <a onClick={onClick}>
            <Image
              src={isIconAscendant === "asc" ? sortIconDesc : sortIconAsc}
              alt="sort icon"
              className={styles.Sort__image__space}
            />
          </a>
        </div>
      ) : null}
    </div>
  );
}
