import { FunctionComponent, useEffect, useState } from "react";
import Book from "../interfaces/Book";
import { getBooks } from "../services/booksService";
import DeleteModal from "./DeleteModal";
import UpdateModal from "./UpdateModal";

interface BooksTableProps {
  booksChanged: boolean;
  setBooksChanged: Function;
}

const BooksTable: FunctionComponent<BooksTableProps> = ({
  booksChanged,
  setBooksChanged,
}) => {
  let [books, setBooks] = useState<Book[]>([]);
  let [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  let [openUpdateModal, setOpenUpdateModal] = useState<boolean>(false);
  let [id, setId] = useState<number>(0);

  useEffect(() => {
    getBooks()
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  }, [booksChanged]);

  let render = () => setBooksChanged(!booksChanged);

  return (
    <>
      <h6 className="display-6">Books</h6>
      {books.length ? (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Author</th>
              <th>Genre</th>
              <th>Price</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book: Book) => (
              <tr key={book.id}>
                <td>{book.id}</td>
                <td>{book.name}</td>
                <td>{book.author}</td>
                <td>{book.genre}</td>
                <td>{book.price}</td>
                <td>
                  <i
                    className="fa-solid fa-pen text-success"
                    onClick={() => {
                      setId(book.id as number);
                      setOpenUpdateModal(true);
                    }}
                  ></i>
                </td>
                <td>
                  <i
                    className="fa-solid fa-trash text-danger"
                    onClick={() => {
                      setId(book.id as number);
                      setOpenDeleteModal(true);
                    }}
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No books yet</p>
      )}
      <DeleteModal
        show={openDeleteModal}
        onHide={() => setOpenDeleteModal(false)}
        render={render}
        bookId={id}
      />
      <UpdateModal
        show={openUpdateModal}
        onHide={() => setOpenUpdateModal(false)}
        render={render}
        bookId={id}
      />
    </>
  );
};

export default BooksTable;
