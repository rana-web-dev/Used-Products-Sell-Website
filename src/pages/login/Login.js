import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { authContext } from "../../context/AuthProvider";
import useTitle from "../../title/title";

const Login = () => {
  useTitle("Login");
  const { signIn, googleSignIn } = useContext(authContext);

  const location = useLocation();
  const navigate = useNavigate();
  const [logInError, setLogInError] = useState();

  const from = location.state?.from?.pathname || "/";

  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    // email signIn
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("User LogIn Successfully", {
          position: toast.POSITION.TOP_CENTER,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setLogInError(error.message);
      });
  };

  const googleLogin = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("User LogIn Successfully", {
          position: toast.POSITION.TOP_CENTER,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setLogInError(error.message);
      });
  };

  return (
    <div>
      <ToastContainer />
      <div className="hero max-w-6xl mx-auto md:min-h-screen">
        <div className="hero-content md:w-1/2 flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100 ">
            <form
              onSubmit={handleSignIn}
              className="card-body pb-0 w-96 md:w-full"
            >
              <div className="form-control">
                <label className="label">
                  <label className="label-text">Email</label>
                </label>
                <input
                  name="email"
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <label className="label-text">Password</label>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <span className="py-3 text-orange-500">{logInError}</span>
              <div className="form-control">
                <button className="btn btn-primary">Login</button>
                <p className="mt-5">
                  Don't have an account?{" "}
                  <Link to="/signup" className="text-orange-500">
                    Signup
                  </Link>
                </p>
              </div>
            </form>
            <div className="divider">OR</div>
            <button
              onClick={googleLogin}
              className="btn bg-purple-500 border-none btn-sm mb-5 w-1/2 mx-auto text-white"
            >
              SignIn With Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
