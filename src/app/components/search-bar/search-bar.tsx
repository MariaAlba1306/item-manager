import styles from "./search-bar.module.scss";

import { ChangeEventHandler, FC } from "react";
interface Props {
  placeholder: string;
  onChange: ChangeEventHandler;
  className: string;
}
const SearchBar: FC<Props> = ({ placeholder, onChange, className }) => {
  return (
      <input
        placeholder={placeholder}
        inputMode="search"
        onChange={onChange}
        className={className}
      />
  );
};
export default SearchBar;
