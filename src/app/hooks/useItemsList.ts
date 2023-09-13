import { useEffect, useState } from "react";
import { Item, getItemsList } from "../api/api-service";

const useItemsList = () => {
  const [itemList, setItemList] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    getItemsList()
      .then((initialList) => {
        setItemList(initialList);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  return { itemList, setItemList, loading, error };
};
export default useItemsList;
