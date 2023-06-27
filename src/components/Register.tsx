import { useFormik } from "formik";
import { FunctionComponent } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { addUser } from "../services/usersService";

interface RegisterProps {}

const Register: FunctionComponent<RegisterProps> = () => {
  let navigate = useNavigate();
  let formik = useFormik({
    initialValues: { name: "", email: "", password: "" },
    validationSchema: yup.object({
      name: yup.string().required().min(2),
      email: yup.string().required().email(),
      password: yup.string().required().min(8),
    }),
    onSubmit: (values) => {
      addUser(values)
        .then((res) => navigate("/home"))
        .catch((err) => console.log(err));
    },
  });
  return (
    <>
      <div className="container col-md-3">
        <form className="mb-3" onSubmit={formik.handleSubmit}>
          <h3 className="display-3">REGISTER</h3>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingName"
              placeholder="John Doe"
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="floatingName">Name</label>
            {formik.touched.name && formik.errors.name && (
              <p className="text-danger">{formik.errors.name}</p>
            )}
          </div>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="floatingInput">Email address</label>
            {formik.touched.email && formik.errors.email && (
              <p className="text-danger">{formik.errors.email}</p>
            )}
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="floatingPassword">Password</label>
            {formik.touched.password && formik.errors.password && (
              <p className="text-danger">{formik.errors.password}</p>
            )}
          </div>
          <button
            disabled={!formik.isValid || !formik.dirty}
            type="submit"
            className="btn btn-success w-100 mt-3"
          >
            Register
          </button>
        </form>
        <Link to="/">Already have user? Login here</Link>
      </div>
    </>
  );
};

export default Register;
