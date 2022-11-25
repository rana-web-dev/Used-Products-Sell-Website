import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../../context/AuthProvider";

const Login = () => {
  const { signIn, googleSignIn } = useContext(authContext);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";
  console.log(location.state);

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
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };

  const googleLogin = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="hero max-w-6xl mx-auto min-h-screen">
        <div className="hero-content w-1/2 flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
            <form onSubmit={handleSignIn} className="card-body">
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
                <label className="label"></label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
                <p className="mt-5">
                  Don't have an account? <Link to="/signup">Signup</Link>
                </p>
              </div>
            </form>
            <button
              onClick={googleLogin}
              className="btn bg-purple-500 border-none btn-sm mt-5 mb-5 w-1/2 mx-auto text-white"
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
