import React, { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await fetch("/booksData.json");
        if (!res.ok) throw new Error("Failed to fetch books");
        const data = await res.json();
        setBooks(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) return <div className="text-center py-8">Loading books...</div>;
  if (error)
    return <div className="text-center py-8 text-red-500">{error}</div>;
  if (!books.length)
    return <div className="text-center py-8">No books found.</div>;

  return (
    <div className="py-8">
      <h2 className="text-4xl font-bold text-center mb-8">Books</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-4">
        {books.map((book) => (
          <Book book={book} key={book.bookId} />
        ))}
      </div>
    </div>
  );
};

export default Books;
