import Image from "next/image";
import { ChangeEventHandler } from "react";
import styles from "./sort.module.scss";
import sortIcon from "./../../assets/icons/sorting.svg";
interface Props {
  onChange: ChangeEventHandler;
  onClick: React.MouseEventHandler;
  value: string;
  isSorted: boolean;
}

export default function SortBar({ onChange, onClick, value, isSorted }: Props) {
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
      {isSorted ? (
        <div className={styles.Sort__image}>
          <a onClick={onClick}>
            <Image
              src={sortIcon}
              alt="sort icon"
              className={styles.Sort__image__space}
            />
          </a>
        </div>
      ) : null}
    </div>
  );
}
