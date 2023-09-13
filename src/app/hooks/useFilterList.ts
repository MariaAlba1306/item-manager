import { useState, useEffect } from "react";
import { Item } from "../api/api-service";

const useSortAndSearch = (
  items: Item[],
  setCurrentPage: React.Dispatch<React.SetStateAction<any>>
) => {
  const [itemsSearched, setItemsSearched] = useState<string>("");
  const [orderValue, setOrderValue] = useState<string>("asc");
  const [sortValue, setSortValue] = useState<string>("none");
  const [filteredItems, setFilteredItems] = useState<Item[]>([]);

  useEffect(() => {
    const sortedItems = [...items];

    if (sortValue !== "none") {
      sortedItems.sort((a: any, b: any) => {
        const compareResult =
          sortValue === "title"
            ? a.title.localeCompare(b.title)
            : sortValue === "description"
            ? a.description.localeCompare(b.description)
            : sortValue === "price"
            ? a.price - b.price
            : sortValue === "email"
            ? a.email.localeCompare(b.email)
            : 0;

        return orderValue === "asc" ? compareResult : -compareResult;
      });
    }

    const filteredItems = sortedItems.filter(
      (data: Item) =>
        data.title.toLowerCase().includes(itemsSearched) ||
        data.email.toLowerCase().includes(itemsSearched) ||
        data.description.toLowerCase().includes(itemsSearched) ||
        data.price.toString().includes(itemsSearched.toLowerCase())
    );
    setCurrentPage(1);

    setFilteredItems(filteredItems);
  }, [sortValue, orderValue, items, itemsSearched]);

  return {
    itemsSearched,
    setItemsSearched,
    orderValue,
    setOrderValue,
    sortValue,
    setSortValue,
    filteredItems,
  };
};

export default useSortAndSearch;
