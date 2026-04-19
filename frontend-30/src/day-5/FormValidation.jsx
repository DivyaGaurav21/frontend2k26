import React from 'react'

const FormValidation = () => {
    const [formData, setFormData] = React.useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [error, setError] = React.useState({});

        const onFormSubmit = (e) => {
            e.preventDefault();
            // Simple validation logic (replace with your actual validation logic)
            const newError = {};
            if (!formData.name) {
                newError.name = "Name is required";
            }
            if (!formData.email) {
                newError.email = "Email is required";
            } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
                newError.email = "Email is invalid";
            }
            if (!formData.password) {
                newError.password = "Password is required";
            } else if (formData.password.length < 6) {
                newError.password = "Password must be at least 6 characters";
            }
            if (formData.password !== formData.confirmPassword) {
                newError.confirmPassword = "Passwords do not match";
            }
            setError(newError);
        };


  return (
    <div>
        <h1>Form Validation</h1>
        <form onSubmit={onFormSubmit}>
             <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
            {error.name && <span>{error.name}</span>}
            <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
            {error.email && <span>{error.email}</span>}
            <input
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
            />
            {error.password && <span>{error.password}</span>}
            <input
                type="password"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
            />
            {error.confirmPassword && <span>{error.confirmPassword}</span>}
            <button type="submit">Submit</button>
        </form>

    </div>
  )
}

export default FormValidation;


// real time validation

import React, { useState } from "react";

const ControlledForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({});

  const validateField = (name, value) => {
    let err = "";
    let regEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "username") {
      if (!value.trim()) err = "name is required";
    }

    if (name === "email") {
      if (!value) err = "email is required";
      else if (!regEx.test(value)) err = "invalid email";
    }

    if (name === "password") {
      if (!value) err = "password is required";
      else if (value.length < 5)
        err = "password should be at least 5 characters";
    }

    if (name === "confirmPassword") {
      if (!value) err = "confirm password is required";
      else if (value !== formData.password)
        err = "passwords do not match";
    }

    setError((prev) => ({
      ...prev,
      [name]: err,
    }));
  };

  const formHandler = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // 🔥 real-time validation
    validateField(name, value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    // final check
    Object.keys(formData).forEach((key) => {
      validateField(key, formData[key]);
    });

      console.log("submit", formData);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <input
        type="text"
        name="username"
        placeholder="enter user name"
        value={formData.username}
        onChange={formHandler}
      />
      {error.username && <span>{error.username}</span>}

      <input
        type="email"
        name="email"
        placeholder="example@gmail.com"
        value={formData.email}
        onChange={formHandler}
      />
      {error.email && <span>{error.email}</span>}

      <input
        type="password"
        name="password"
        placeholder="password"
        value={formData.password}
        onChange={formHandler}
      />
      {error.password && <span>{error.password}</span>}

      <input
        type="password"
        name="confirmPassword"
        placeholder="confirm password"
        value={formData.confirmPassword}
        onChange={formHandler}
      />
      {error.confirmPassword && <span>{error.confirmPassword}</span>}

      <button type="submit">Submit</button>
    </form>
  );
};

export default ControlledForm;