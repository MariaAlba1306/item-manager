export interface Item {
  title: string;
  price: number;
  description: string;
  image: string;
  email: string;
}
export const getItemsList = async (): Promise<Item[]> => {
  const API_URL =
    "https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/items.json";
  const result = await fetch(API_URL);
  const json = await result.json();
  const itemList = json.items;
  console.log(itemList);

  return itemList;
};
