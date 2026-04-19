import React, { useState } from "react";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    dob: "",
    gender: "",
    intrest: [],
    role: "",
  });
  const [error, setError] = useState({});

  const formChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const checkBoxHandler = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      intrest: checked
        ? [...prev.intrest, value]
        : prev.intrest.filter((val) => val !== value),
    }));
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const validateStep = () => {
    let err = {};

    // Step 1 validation
    if (step === 1) {
      if (!formData.username.trim()) {
        err.username = "name is required";
      }
      if (!formData.email) {
        err.email = "email is required";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        err.email = "invalid email";
      }
    }
    // Step 2 validation
    if (step === 2) {
      if (!formData.dob) {
        err.dob = "dob is required";
      }
      if (!formData.gender) {
        err.gender = "gender is required";
      }
    }
    // Step 3 validation
    if (step === 3) {
      if (!formData.role) {
        err.role = "role is required";
      }
      if (formData.intrest.length === 0) {
        err.intrest = "select at least one interest";
      }
    }

    setError(err);
    return Object.keys(err).length === 0;
  };

  const nextStepHandler = () => {
    if (validateStep()) {
      setStep(step + 1);
    }
  };

  return (
    <div>
      <h1>Multi Step Form</h1>
      <form onSubmit={formSubmitHandler}>
        {step === 1 && (
          <div className="form-field">
            <input
              type="text"
              name="username"
              placeholder="enter name"
              value={formData.username}
              onChange={formChangeHandler}
            />
            {error.username && <span className="error">{error.username}</span>}
            <input
              type="email"
              name="email"
              placeholder="enter email"
              value={formData.email}
              onChange={formChangeHandler}
            />
            {error.email && <span className="error">{error.email}</span>}
          </div>
        )}
        {step === 2 && (
          <div>
            <span>DOB : </span>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={formChangeHandler}
            />
            {error.dob && <span className="error">{error.dob}</span>}
            <div>
              <p>Gender</p>
              <span>Male</span>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === "male"}
                onChange={formChangeHandler}
              />
              <span>Female</span>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === "female"}
                onChange={formChangeHandler}
              />
              <span>Others</span>
              <input
                type="radio"
                name="gender"
                value="other"
                checked={formData.gender === "other"}
                onChange={formChangeHandler}
              />
              {error.gender && <span className="error">{error.gender}</span>}
            </div>
          </div>
        )}
        {step === 3 && (
          <div>
            <div>
              <label htmlFor="role">ROLE : </label>
              <select
                name="role"
                value={formData.role}
                onChange={formChangeHandler}
              >
                <option value="">select role</option>
                <option value="admin">Admin</option>
                <option value="dean">dean</option>
                <option value="professor">professor</option>
              </select>
              {error.role && <span className="error">{error.role}</span>}
            </div>
            <div>
              <p>Intrests</p>
              <span>Cricket</span>
              <input
                type="checkbox"
                value="cricket"
                checked={formData.intrest.includes("cricket")}
                onChange={checkBoxHandler}
              />
              <span>Hockey</span>
              <input
                type="checkbox"
                value="hockey"
                checked={formData.intrest.includes("hockey")}
                onChange={checkBoxHandler}
              />
              <span>Football</span>
              <input
                type="checkbox"
                value="football"
                checked={formData.intrest.includes("football")}
                onChange={checkBoxHandler}
              />
            </div>
            {error.intrest && <span className="error">{error.intrest}</span>}
          </div>
        )}
        {step === 3 && <button type="submit">submit</button>}
      </form>
      <div>
        <button disabled={step === 1} onClick={() => setStep(step - 1)}>
          Prev
        </button>
        <button disabled={step === 3} onClick={nextStepHandler}>
          Next
        </button>
      </div>
    </div>
  );
};

export default MultiStepForm;
