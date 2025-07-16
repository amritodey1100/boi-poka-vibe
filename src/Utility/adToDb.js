import { toast } from "react-toastify";

const getStoredReadList = () => {
  try {
    const storedListStr = localStorage.getItem("readList");
    if (storedListStr) {
      return JSON.parse(storedListStr);
    }
    return [];
  } catch (error) {
    console.error("Error reading from localStorage:", error);
    return [];
  }
};

const addToStoreReadList = (id) => {
  if (id === undefined || id === null) {
    console.error("Invalid id provided to addToStoreReadList");
    return;
  }

  try {
    const storedList = getStoredReadList();
    if (storedList.includes(id)) {
      console.log(`Book ${id} already exists in read list`);
      return;
    }

    storedList.push(id);
    localStorage.setItem("readList", JSON.stringify(storedList));
    toast("This book has been added to your read list");
    console.log(`Book ${id} added to read list`);
  } catch (error) {
    console.error("Error updating localStorage:", error);
  }
};

export { addToStoreReadList, getStoredReadList };
