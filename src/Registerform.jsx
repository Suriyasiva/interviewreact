import React from "react";
import "./App.css";
import { useFormik } from "formik";

function Registerform() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      country: "",
      state: "",
      city: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    validate: (values) => {
      const errors = {};
      if (!values.name) {
        errors.name = "Required";
      }
      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "invalid mail id";
      }
      return errors;
    },
  });
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12 center-card">
          <div className="bg-container">
            <div className="head-content">
              <div className="mt-4 h5">Register Form</div>
            </div>
            <div className="form-container">
              <form onSubmit={formik.handleSubmit}>
                <div className="name">
                  <label className="form-label">Name</label>
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                  ></input>
                  {formik.errors.name ? (
                    <span className="name-icon" style={{ color: "red" }}>
                      {formik.errors.name}
                    </span>
                  ) : null}
                </div>
                <div className="email">
                  <label className="form-label">email</label>
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  ></input>
                  {formik.errors.email ? (
                    <span className="email-icon" style={{ color: "red" }}>
                      {formik.errors.email}
                    </span>
                  ) : null}
                </div>
                <div className="mobile">
                  <label className="form-label">mobile</label>
                  <input
                    className="form-control"
                    type="number"
                    name="mobile"
                    onChange={formik.handleChange}
                    value={formik.values.mobile}
                  ></input>
                </div>
                <div className="country">
                  <label className="form-label">country</label>
                  <select
                    id="country"
                    name="country"
                    onChange={formik.handleChange}
                    value={formik.values.country}
                    className="form-control"
                  >
                    <option selected>Choose...</option>
                    <option>INDIA</option>
                    <option>UAE</option>
                    <option>USA</option>
                    <option>SINGAPORE</option>
                    <option>CHINA</option>
                  </select>
                </div>
                <div className="state">
                  <label className="form-label">state</label>
                  <select
                    id="state"
                    name="state"
                    onChange={formik.handleChange}
                    value={formik.values.state}
                    className="form-control"
                  >
                    <option selected>Choose...</option>
                    <option>DELHI</option>
                    <option>ABU DHABI</option>
                    <option>VIRGINIA</option>
                    <option>WOODLANDS</option>
                    <option>ZHEJIANG</option>
                  </select>
                </div>
                <div className="city">
                  <label className="form-label">city</label>
                  <select
                    id="city"
                    name="city"
                    onChange={formik.handleChange}
                    value={formik.values.city}
                    className="form-control"
                  >
                    <option selected>Choose...</option>
                    <option>NEW DELHI</option>
                    <option> LIWA</option>
                    <option>LOS ANGELES</option>
                    <option> BISHAN</option>
                    <option>BEIJING</option>
                  </select>
                </div>
                <div className="message">
                  {" "}
                  <label className="form-label">message</label>
                  <textarea
                    className="form-control"
                    placeholder="Leave a comment here"
                    name="message"
                    onChange={formik.handleChange}
                    value={formik.values.message}
                    id="floatingTextarea2"
                    style={{ height: "100px" }}
                  ></textarea>
                </div>
                <div className="d-grid mt-2">
                  <input
                    className="btn btn-primary"
                    value="Submit"
                    type="submit"
                  ></input>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registerform;
{
  /* <div class="form-floating">
  
  <label for="floatingTextarea2">Comments</label>
</div> */
}
