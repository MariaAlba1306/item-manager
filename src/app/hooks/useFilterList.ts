import { useState, useEffect } from "react";

function useSortAndSearch(items: any) {
  const [itemsSearched, setItemsSearched] = useState<string>("");
  const [orderValue, setOrderValue] = useState<string>("asc");
  const [sortValue, setSortValue] = useState<string>("");
  useEffect(() => {
    if (sortValue === "title") {
     items.sort((a: any, b: any) => {
        if (orderValue === "asc") {
          return a.title.localeCompare(b.title);
        }
        return b.title.localeCompare(a.title);
      });
    } else if (sortValue === "description") {
      items.sort((a: any, b: any) => {
        if (orderValue === "asc") {
          return a.description.localeCompare(b.description);
        }
        return b.description.localeCompare(a.description);
      });
    } else if (sortValue === "price") {
      items.sort((a: any, b: any) => {
        if (orderValue === "asc") {
          return a.price - b.price;
        }
        return b.price - a.price;
      });
    } else if (sortValue === "email") {
      items.sort((a: any, b: any) => {
        if (orderValue === "asc") {
          return a.email.localeCompare(b.email);
        }
        return b.email.localeCompare(a.email);
      });
    }
  }, [sortValue, orderValue, items]);

  const filteredItems = items.filter((data: any) =>
    data.title.toLowerCase().includes(itemsSearched)
  );

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
