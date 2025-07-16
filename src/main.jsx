import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root";
import "./index.css";
import Errorpage from "./Components/ErrorPage/Errorpage";
import Home from "./Components/Home/Home";
import Dashboard from "./Components/Dashboard/Dashboard";
import BookDetail from "./Components/BookDetail/BookDetail";
import ListedBooks from "./Components/ListedBooks/ListedBooks";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Errorpage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "books/:bookId",
        element: <BookDetail />,
        loader: async ({ params }) => {
          try {
            const res = await fetch("/booksData.json");
            if (!res.ok) throw new Error("Failed to fetch book data");
            return res.json();
          } catch (error) {
            throw new Error("Error loading book data. Please try again later.");
          }
        },
        errorElement: <Errorpage />,
      },
      {
        path: "listedBooks",
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch("/booksData.json"),
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
