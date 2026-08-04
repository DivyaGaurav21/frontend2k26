import React, { useState } from "react";
import "./day9.css";

const ControlledForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    dob: "",
    gender: "",
    role: "",
    course: [],
  });

  function formHandler(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function checkboxHandler(e) {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      course: checked
        ? [...prev.course, value]
        : prev.course.filter((item) => item != value),
    }));
  }

  function formSubmitHandler(e) {
    e.preventDefault();
    console.log(formData);
    setFormData({
      username: "",
      email: "",
      dob: "",
      gender: "",
      role: "",
      course: [],
    });
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <p className="title">ControlledForm</p>
      <div className="form-input">
        <input
          type="text"
          name="username"
          placeholder="divya gaurav"
          value={formData.username}
          onChange={formHandler}
        />
        <input
          type="email"
          name="email"
          placeholder="abc@gmail.com"
          value={formData.email}
          onChange={formHandler}
        />
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={formHandler}
        />
        <div className="box">
          <span>Date of Birth:</span>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === "male"}
              onChange={formHandler}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === "female"}
              onChange={formHandler}
            />
            Female
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="others"
              checked={formData.gender === "others"}
              onChange={formHandler}
            />
            Others
          </label>
        </div>
        <div>
          <select name="role" value={formData.role} onChange={formHandler}>
            <option value="">select role</option>
            <option value="admin">Admin</option>
            <option value="professor">Professor</option>
            <option value="dean">Dean</option>
          </select>
        </div>
        <div className="box">
          <span>Course</span>
          <label>
            <input
              type="checkbox"
              name="course"
              value="Javascript"
              checked={formData.course.includes("Javascript")}
              onChange={checkboxHandler}
            />
            Javascript
          </label>
          <label>
            <input
              type="checkbox"
              name="course"
              value="frontend"
              checked={formData.course.includes("frontend")}
              onChange={checkboxHandler}
            />
            Frontend
          </label>
          <label>
            <input
              type="checkbox"
              name="course"
              value="backend"
              checked={formData.course.includes("backend")}
              onChange={checkboxHandler}
            />
            Backend
          </label>
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ControlledForm;
