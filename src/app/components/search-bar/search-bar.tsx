import styles from "./search-bar.module.scss";

import { ChangeEventHandler, FC } from "react";
interface Props {
  placeholder: string;
  onChange: ChangeEventHandler;
  className: string;
  value: any;
}
const SearchBar: FC<Props> = ({ placeholder, onChange, className, value }) => {
  return (
    <input
      placeholder={placeholder}
      inputMode="search"
      onChange={onChange}
      className={className}
      value={value}
    />
  );
};
export default SearchBar;
