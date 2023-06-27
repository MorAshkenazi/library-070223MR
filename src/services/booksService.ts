import axios from "axios";
import Book from "../interfaces/Book";

let api: string = `${process.env.REACT_APP_API}/books`;

// GET all books
export function getBooks() {
  return axios.get(api);
}

// GET specific book by id
export function getBookById(id: number) {
  return axios.get(`${api}/${id}`);
}

// POST new book
export function addBook(newBook: Book) {
  return axios.post(api, newBook);
}

// PUT book by id
export function updateBook(updatedBook: Book, id: number) {
  return axios.put(`${api}/${id}`, updatedBook);
}

// DELETE book by id
export function deleteBook(id: number) {
  return axios.delete(`${api}/${id}`);
}
