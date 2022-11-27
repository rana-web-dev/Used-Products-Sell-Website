import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { authContext } from "../../context/AuthProvider";
import useTitle from "../../title/title";

const SignUp = () => {

  const navigate = useNavigate();


  useTitle('SignUp');
  const [select, setSelect] = useState("buyer");
  const [error, setError] = useState();

  const { user, createUser, updateUser } = useContext(authContext);
  console.log(user);

  // signup form handle
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const userType = select;
    console.log(name, email, password, userType);

    const userInfo = { name, email, userType };

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    // create user with email and password
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate('/')
        toast.success("User Create Successfully.", {
          position: toast.POSITION.TOP_CENTER,
        });

        // user && (
        //   <Navigate to="/" replace={true} />
        // )

        // set user name that come from input name field
        const userInfo = {
          displayName: name,
        };
        updateUser(userInfo).then().catch();
      })
      .catch(error => {
        console.log(error);
        setError(error.message);
      })

    // Navigate root after create user
    // window.location.replace("/");



  };

  return (
    <div>
      <div className="hero max-w-6xl mx-auto md:min-h-screen">
        <div className="hero-content md:w-1/2 flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
            <form onSubmit={handleSignUp} className="card-body w-96 md:w-full">
              <div className="form-control">
                <label className="label">
                  <label className="label-text">Name</label>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <label className="label-text">Email</label>
                </label>
                <input
                  name="email"
                  type="email"
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
              <div className="form-control">
                <select
                  onChange={(event) => setSelect(event.target.value)}
                  className="select select-bordered w-full"
                >
                  <option value="buyer" selected>
                    Buyer
                  </option>
                  <option value="seller">Seller</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
              <span className="text-orange-500">{error}</span>
              <div className="form-control mt-3">
                <button className="btn btn-primary">Sign Up</button>
                <p className="mt-5">
                  have an account? <Link to="/login" className="text-orange-500">Login</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
