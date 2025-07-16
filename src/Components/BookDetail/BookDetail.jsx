import React from "react";
import { useParams, useLoaderData } from "react-router-dom";
import { addToStoreReadList } from "../../Utility/adToDb";

const BookDetail = () => {
  const { bookId } = useParams();
  const data = useLoaderData();

  if (!data) {
    return <div className="m-10">Loading...</div>;
  }

  const id = parseInt(bookId);
  const book = data.find((book) => book.bookId === id);

  if (!book) {
    return <div className="m-10">Book not found</div>;
  }

  const { image, bookName, author, description } = book;

  const handleMarkAsRead = () => {
    try {
      addToStoreReadList(id);
    } catch (error) {
      console.error("Error marking book as read:", error);
    }
  };

  return (
    <div className="m-10">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <img
            className="w-full rounded-lg shadow-lg"
            src={image}
            alt={bookName}
          />
        </div>
        <div className="md:w-2/3">
          <h2 className="text-3xl font-bold mb-4">{bookName}</h2>
          <p className="text-xl mb-4">By: {author}</p>
          {description && <p className="mb-6">{description}</p>}
          <div className="flex gap-4">
            <button onClick={handleMarkAsRead} className="btn btn-outline">
              Mark as Read
            </button>
            <button className="btn btn-accent">Add to Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
