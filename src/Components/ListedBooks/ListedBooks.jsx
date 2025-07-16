import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useLoaderData } from "react-router-dom";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList } from "../../Utility/adToDb";

const ListedBooks = () => {
  const allBooks = useLoaderData();
  const [readBooks, setReadBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedReadList = getStoredReadList();
    const storedReadListInt = storedReadList.map((id) => parseInt(id, 10));
    const booksRead = allBooks.filter((book) =>
      storedReadList.includes(book.bookId)
    );
    setReadBooks(booksRead);
    setLoading(false);
  }, [allBooks]);

  if (loading) return <div className="text-center py-8">Loading...</div>;

  return (
    <div className="max-w-6xl mx-auto px-4">
      <h3 className="text-3xl font-bold text-center my-8">Listed Books</h3>

      <Tabs className="mt-8">
        <TabList className="flex gap-4 border-b border-gray-200 mb-4">
          <Tab className="px-4 py-2 cursor-pointer border-b-2 border-transparent hover:text-green-600 hover:border-green-600">
            Read List
          </Tab>
          <Tab className="px-4 py-2 cursor-pointer border-b-2 border-transparent hover:text-green-600 hover:border-green-600">
            Wish List
          </Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-2xl font-semibold mb-4">Books I've Read</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {readBooks.length > 0 ? (
              readBooks.map((book) => (
                <div
                  key={book.bookId}
                  className="card bg-base-100 shadow-sm p-4"
                >
                  <img
                    src={book.image}
                    alt={book.bookName}
                    className="h-40 object-contain mx-auto"
                  />
                  <div className="mt-4">
                    <h3 className="font-semibold">{book.bookName}</h3>
                    <p className="text-gray-600">By: {book.author}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500">
                No books in your read list yet.
              </p>
            )}
          </div>
        </TabPanel>
        <TabPanel>
          <h2 className="text-2xl font-semibold mb-4">My Wish List</h2>
          <p className="text-center text-gray-500">
            Wishlist feature coming soon...
          </p>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
