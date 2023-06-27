import { useFormik } from "formik";
import { FunctionComponent, useEffect } from "react";
import * as yup from "yup";
import { addBook } from "../services/booksService";
import { successMsg } from "../services/feedbacksService";

interface NewBookProps {
  booksChanged: boolean;
  setBooksChanged: Function;
}

const NewBook: FunctionComponent<NewBookProps> = ({
  booksChanged,
  setBooksChanged,
}) => {
  let formik = useFormik({
    initialValues: { name: "", author: "", genre: "", price: 0 },
    validationSchema: yup.object({
      name: yup.string().required().min(2),
      author: yup.string().required().min(2),
      genre: yup.string().required().min(2),
      price: yup.number().required().min(0),
    }),
    onSubmit: (values, { resetForm }) => {
      addBook(values)
        .then((res) => {
          setBooksChanged(!booksChanged);
          resetForm();
          formik.setFieldValue("price", "");
          successMsg("Book was added!");
        })
        .catch((err) => console.log(err));
    },
  });

  useEffect(() => {
    formik.setFieldValue("price", "");
  }, []);

  return (
    <>
      <form className="mb-3" onSubmit={formik.handleSubmit}>
        <h6 className="display-6">New Book</h6>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Harry Potter"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
          />
          <label htmlFor="name">Name</label>
          {formik.touched.name && formik.errors.name && (
            <p className="text-danger">{formik.errors.name}</p>
          )}
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="author"
            placeholder="JK Rolling"
            name="author"
            onChange={formik.handleChange}
            value={formik.values.author}
            onBlur={formik.handleBlur}
          />
          <label htmlFor="author">Author</label>
          {formik.touched.author && formik.errors.author && (
            <p className="text-danger">{formik.errors.author}</p>
          )}
        </div>
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="genre"
            placeholder="Novel"
            name="genre"
            onChange={formik.handleChange}
            value={formik.values.genre}
            onBlur={formik.handleBlur}
          />
          <label htmlFor="genre">Genre</label>
          {formik.touched.genre && formik.errors.genre && (
            <p className="text-danger">{formik.errors.genre}</p>
          )}
        </div>
        <div className="form-floating mt-3">
          <input
            type="number"
            className="form-control"
            id="price"
            placeholder="Novel"
            name="price"
            onChange={formik.handleChange}
            value={formik.values.price}
            onBlur={formik.handleBlur}
          />
          <label htmlFor="price">Price</label>
          {formik.touched.price && formik.errors.price && (
            <p className="text-danger">{formik.errors.price}</p>
          )}
        </div>
        <button
          disabled={!formik.isValid || !formik.dirty}
          type="submit"
          className="btn btn-success w-100 mt-3"
        >
          Add
        </button>
      </form>
    </>
  );
};

export default NewBook;
