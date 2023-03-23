import React from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { Formik, ErrorMessage } from "formik";
import axios from 'axios';
import swal from 'sweetalert';
import { Link } from "react-router-dom";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isError: false,
      errors: "",
      isSuccess: false,
      successMsg: "",
      email: "",
      password: "",
      user_captcha_input: "",
    };
  }

  componentDidMount() {
    loadCaptchaEnginge(5);
  }

  onChange = (e) => {
    this.setState({ isError: false, errors: "" });
    this.setState({ isSuccess: false, successMsg: "" });
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = async (values) => {
    if (validateCaptcha(values.user_captcha_input) === true) {
      console.log(values.email);
      console.log(values.password);

      let formData = new FormData();
      formData.append("email", values.email);
      formData.append("password", values.password);
      formData.append("user_captcha_input", values.user_captcha_input);

      axios
        .post("http://localhost/api/login", formData)
        .then((res) => {
          console.log(res.data.data.role);
          this.setState({
            email: "",
            password: "",
          });
          if (res.data.code == 200) {
            if (res.data.data.role == "Admin") {
              window.location = "http://localhost:3000/Dashboard";
            }
            if (res.data.data.role == "academics") {
              window.location = "http://localhost:3003/Dashboard";
            }
            if (res.data.data.role == "accounts") {
              window.location = "http://localhost:3004/Dashboard";
            }
            swal({
              title: "Login SuccessFully!",
              text: "Thank you!",
              icon: "success",
            });
          } else {
            swal({
              title: "Wrong Detail!",
              text: "Please Check!",
              icon: "error",
            });
          }
        })
        .catch((err) => {
          alert(err);
          swal("Something Wrong!!!", {
            buttons: false,
            timer: 3000,
          });
          this.setState({ isError: true, errors: err.message });
        });
    } else {
      swal({
        title: "Wrong Capcha!",
        text: "Check!",
        icon: "error",
      });
    }
    
  };

  

  render() {
    return (
      <div>
        <section id="shadow">
          <div className="container">
            <div class="forms-container">
              <div class="signin-signup">
                <Formik
                  initialValues={{
                    email: "",
                    password: "",
                    user_captcha_input: "",
                  }}
                  validate={(values) => {
                    const errors = {};

                    if (!values.email.trim()) {
                      errors.email = "Email Required";
                    } else if (
                      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                        values.email
                      )
                    ) {
                      errors.email = "Invalid email address...";
                    }

                    if (!values.password.trim()) {
                      errors.password = "Password is required...";
                    }

                    if (!values.user_captcha_input.trim()) {
                      errors.user_captcha_input = "Capcha is required...";
                    }

                    return errors;
                  }}
                  onSubmit={(values, actions) => {
                    this.onSubmit(values).then(() => {
                      actions.setSubmitting(false);
                      actions.resetForm({
                        values: {
                          email: "",
                          password: "",
                          user_captcha_input: "",
                        },
                      });
                    });
                  }}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    handleReset,
                    /* and other goodies */
                  }) => (
                    <form onSubmit={handleSubmit} class="sign-in-form">
                      <h2 class="title">Sign in</h2>
                      <div class="input-field">
                        <i class="fas fa-user"></i>
                        <input
                          id="email"
                          type="text"
                          placeholder="Username"
                          value={values.email}
                          onBlur={handleBlur}
                          onChange={handleChange}
                        />
                        <ErrorMessage
                          className="error"
                          name="email"
                          component="div"
                        />
                      </div>
                      <div class="input-field">
                        <i class="fas fa-lock"></i>
                        <input
                          id="password"
                          type="password"
                          placeholder="Password"
                          value={values.password}
                          onBlur={handleBlur}
                          onChange={handleChange}
                        />
                        <ErrorMessage
                          className="error ru"
                          name="password"
                          component="div"
                        />
                      </div>

                      <div className="captcha-name  im">
                        <input
                          className="captcha-section input-fild "
                          type="text"
                          placeholder="Captcha"
                          id="user_captcha_input"
                          name="user_captcha_input"
                          value={values.user_captcha_input}
                          onBlur={handleBlur}
                          onChange={handleChange}
                        />

                        <LoadCanvasTemplate className="im" />
                      </div>
                      <ErrorMessage
                        className="errorr pr"
                        name="user_captcha_input"
                        component="div"
                      />
                      <input
                        id="capcha"
                        type="submit"
                        value="Login"
                        class="b login solid"
                      />

                      <a
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#myModal"
                        className="forgot"
                      >
                        Forgot Password?
                      </a>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </section>

        <div class="modal" id="myModal">
          <div class="modal-dialog modal-fullscreen-lg-down">
            <div class="modal-content">
              {/* <!-- Modal Header --> */}
              <div class="modal-header">
                <h4 class="modal-title">Reset Password</h4>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                ></button>
              </div>

              {/* <!-- Modal body --> */}
              <Formik
                initialValues={{
                  user_email: "",
                }}
                validate={(values) => {
                  const errors = {};

                  if (!values.user_email.trim()) {
                    errors.user_email = "Email Required";
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                      values.user_email
                    )
                  ) {
                    errors.user_email = "Invalid email address...";
                  }

                  return errors;
                }}
                onSubmit={(values, actions) => {
                  this.onSubmit(values).then(() => {
                    actions.setSubmitting(false);
                    actions.resetForm({
                      values: {
                        user_email: "",
                      },
                    });
                  });
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  handleReset,
                  /* and other goodies */
                }) => (
                  <form onSubmit={handleSubmit}>
                    <div class="modal-body">
                      <div class="row" id="rap">
                        <h6 class="information-text">
                          Enter your registered email to reset your password.
                        </h6>

                        <div class="form-group">
                          <input
                            type="email"
                            name="user_email"
                            id="user_email "
                            placeholder="Enter Your Email "
                            value={values.user_email}
                            onBlur={handleBlur}
                            onChange={handleChange}
                          />
                          {/* <p><label for="username">Email</label></p> */}
                          <button>Reset Password</button>
                        </div>
                      </div>
                    </div>
                  </form>
                )}
              </Formik>

              {/* <!-- Modal footer --> */}
              {/* <div class="modal-footer">
                     <button
                      type="button"
                      class="btn btn-danger"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button> 
                    <button type="button" class="btn btn-primary">
                      Save changes
                    </button>
                  </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Index;