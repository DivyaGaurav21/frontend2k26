import React, { useState } from "react";
import { useAuth } from "../hooks/useAuth";

const Home = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const { user, singUp, logIn, logOut } = useAuth();
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setUserInput((prev) => ({ ...prev, [name]: value }));
  };

  const singUpHandler = (e) => {
    e.preventDefault();
    const { name, email, password } = userInput;
    singUp(name, email, password);
    setIsUserLoggedIn(true);
  };

    const logInHandler = (e) => {
    e.preventDefault();
    const { email, password } = userInput;
    logIn(email, password);
    console.log(user , "redirect to home page");
  }

  return (
    <div className="p-8">
      <h1>Login/Signup Page</h1>
      <span>have an account? </span>
      <button onClick={logOut}>Logout</button>
      {!isUserLoggedIn && (
        <button onClick={() => setIsUserLoggedIn(true)} className="btn">
          Click for Login
        </button>
      )}
      <div>
        {isUserLoggedIn ? (
          <div>
            <h2>Welcome back, User!</h2>
            <form className="flex flex-col gap-2" onSubmit={logInHandler}>
              <label htmlFor="email">Email:</label>
              <input type="email" name="email" onChange={inputChangeHandler}/>
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" onChange={inputChangeHandler}/>
              <button type="submit">Log In</button>
            </form>
          </div>
        ) : (
          <div>
            <h2>Create a new account</h2>
            <form className="flex flex-col gap-2" onSubmit={singUpHandler}>
              <label htmlFor="name">Name:</label>
              <input type="text" name="name" onChange={inputChangeHandler} />
              <label htmlFor="email">Email:</label>
              <input type="email" name="email" onChange={inputChangeHandler} />
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                onChange={inputChangeHandler}
              />
              <button type="submit">Sign Up</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
