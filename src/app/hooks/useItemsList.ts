import { useEffect, useState } from "react";
import { getItemsList } from "../api/api-service";

export default function useItemsList() {
  const [itemList, setItemList] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getItemsList()
      .then((initialList) => {
        setItemList(initialList);
        setLoading(false);
      })
      .catch((error) => {
        setError(true);
      });
  }, []);

  return { itemList, setItemList, loading, error };
}
