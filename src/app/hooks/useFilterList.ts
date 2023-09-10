
import { useState, useEffect } from "react";
import { Item } from "../api/api-service";

function useSortAndSearch(items: Item[]) {
  const [itemsSearched, setItemsSearched] = useState<string>("");
  const [orderValue, setOrderValue] = useState<string>("asc");
  const [sortValue, setSortValue] = useState<string>("none"); 

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

    const filteredItems = sortedItems.filter((data: any) =>
      data.title.toLowerCase().includes(itemsSearched.toLowerCase())
    );

    setFilteredItems(filteredItems);
  }, [sortValue, orderValue, items, itemsSearched]);

  const [filteredItems, setFilteredItems] = useState<any[]>([]);

  return {
    itemsSearched,
    setItemsSearched,
    orderValue,
    setOrderValue,
    sortValue,
    setSortValue,
    filteredItems,
  };
}

export default useSortAndSearch;
