import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookId, image, bookName, author, tags = [], category = "" } = book;

  const handleRatingChange = (rating) => {
    console.log(`Book ${bookId} rated ${rating} stars`);
    // TODO: Implement rating functionality
  };

  return (
    <div className="card bg-base-100 w-full shadow-sm p-6 hover:shadow-md transition-shadow">
      <Link
        to={`/books/${bookId}`}
        className="block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded-lg"
        aria-label={`View details for ${bookName}`}
      >
        <figure className="bg-blue-200 py-8 rounded-2xl">
          <img
            src={image}
            className="h-[166px] w-auto object-contain"
            alt={bookName}
            loading="lazy"
          />
        </figure>
        <h2 className="card-title mt-4 mb-2">
          {bookName}
          <div className="badge badge-secondary">NEW</div>
        </h2>
      </Link>
      <div className="card-body p-0 mt-4">
        <div className="flex flex-wrap justify-center gap-2 mb-2">
          {tags?.length > 0 &&
            tags.map((tag, idx) => (
              <span
                key={`${bookId}-tag-${idx}`}
                className="badge badge-outline bg-green-200 text-green-700 px-2 py-1 text-sm"
              >
                {tag}
              </span>
            ))}
        </div>
        <p className="text-gray-600">By: {author}</p>
        <div className="border-t-2 border-dashed my-4"></div>
        <div className="card-actions justify-between items-center">
          <div className="badge badge-outline">{category}</div>
          <div className="rating rating-sm">
            {[1, 2, 3, 4, 5].map((star) => (
              <input
                key={`${bookId}-star-${star}`}
                type="radio"
                name={`rating-${bookId}`}
                className={`mask mask-star-2 ${
                  star < 5 ? "bg-green-500" : "bg-green-100"
                }`}
                onClick={() => handleRatingChange(star)}
                aria-label={`${star} star${star !== 1 ? "s" : ""}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
