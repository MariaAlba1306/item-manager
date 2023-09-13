
import { ChangeEventHandler, FC } from "react";

interface SearchBarProps {
  placeholder: string;
  onChange: ChangeEventHandler;
  className: string;
  value: string;
}

const SearchBar: FC<SearchBarProps> = ({ placeholder, onChange, className, value }) => {
  return (
    <input data-testid="search-home"
      placeholder={placeholder}
      inputMode="search"
      onChange={onChange}
      className={className}
      value={value}
    />
  );
};
export default SearchBar;
