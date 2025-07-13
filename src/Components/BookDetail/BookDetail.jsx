import { useParams, useLoaderData } from "react-router-dom";

const BookDetail = () => {
  const { bookId } = useParams();

  const data = useLoaderData();

  const id = parseInt(bookId);

  //   console.log(typeof bookId, typeof id, typeof data[0].bookId);

  const book = data.find((book) => book.bookId === id);
  //   console.log(book);

  const { bookId: currentBookId, image } = book;

  const handleMarkAsRead = () => {};

  return (
    <div className="m-10 ">
      <h2>Book details :</h2>
      <img className="w-36" src={image} alt="" />
      <br />
      <button onClick={handleMarkAsRead} className=" btn btn-outline m-2">
        Read
      </button>
      <button className="btn btn-accent m-2">Add to Wishlist</button>
    </div>
  );
};

export default BookDetail;
