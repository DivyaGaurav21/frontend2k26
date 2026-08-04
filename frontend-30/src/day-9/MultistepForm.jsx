import React, { useState } from "react";
import "./day9.css";

const MultistepForm = () => {
  const [step, setStep] = useState(0);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    dob: "",
    gender: "",
    role: "",
    subject: [],
  });

  // console.log(formData, "formData");

  function formSubmitHandler() {
    console.log(formData, "form submitted!!!");
    setFormData({
      username: "",
      email: "",
      dob: "",
      gender: "",
      role: "",
      subject: [],
    });
  }

  function nextHandler() {
    // Step 0 validation
    if (step === 0) {
      if (!formData.username || !formData.email) {
        alert("Please fill username and email");
        return;
      }
    }

    // Step 1 validation
    if (step === 1) {
      if (!formData.dob || !formData.gender) {
        alert("Please fill date and gender");
        return;
      }
    }

    // Step 2 submit
    if (step === 2) {
      if (!formData.role || formData.subject.length === 0) {
        alert("Please select role and subject");
        return;
      }

      formSubmitHandler();
      return;
    }
    setStep((prev) => prev + 1);
  }

  function prevHandler() {
    setStep((prev) => prev - 1);
  }

  function formChangeHandler(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function checkboxHandler(e) {
    const { value, checked } = e.target;
    -setFormData((prev) => ({
      ...prev,
      subject: checked
        ? [...prev.subject, value]
        : prev.subject.filter((item) => item !== value),
    }));
  }

  return (
    <form>
      <h3>Multi Step Form</h3>
      <div className="form">
        {step === 0 && (
          <div className="form-inputs">
            <input
              type="text"
              name="username"
              placeholder="divya gaurav"
              value={formData.username}
              onChange={formChangeHandler}
            />
            <input
              type="email"
              name="email"
              placeholder="divyagaurav@gmail.com"
              value={formData.email}
              onChange={formChangeHandler}
            />
          </div>
        )}
        {step === 1 && (
          <div className="form-inputs">
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={formChangeHandler}
            />
            <span className="check">
              Gender :<span>Male : </span>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === "male"}
                onChange={formChangeHandler}
              />
              <span>FeMale : </span>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === "female"}
                onChange={formChangeHandler}
              />
              <span>Others : </span>
              <input
                type="radio"
                name="gender"
                value="others"
                checked={formData.gender === "others"}
                onChange={formChangeHandler}
              />
            </span>
          </div>
        )}
        {step === 2 && (
          <div className="form-inputs">
            <select
              name="role"
              value={formData.role}
              onChange={formChangeHandler}
            >
              <option value="">Select Role</option>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
              <option value="dean">Dean</option>
            </select>
            <span className="check">
              <strong>subjects</strong>
              <span>Maths</span>
              <input
                type="checkbox"
                name="subject"
                value="maths"
                checked={formData.subject.includes("maths")}
                onChange={checkboxHandler}
              />
              <span>Science</span>
              <input
                type="checkbox"
                name="subject"
                value="science"
                checked={formData.subject.includes("science")}
                onChange={checkboxHandler}
              />
              <span>Commerce</span>
              <input
                type="checkbox"
                name="subject"
                value="commerce"
                checked={formData.subject.includes("commerce")}
                onChange={checkboxHandler}
              />
            </span>
          </div>
        )}
      </div>
      <div>
        <button disabled={step === 0} type="button" onClick={prevHandler}>
          prev
        </button>
        <button type="button" onClick={nextHandler}>
          {step === 2 ? "submit" : "next"}
        </button>
      </div>
    </form>
  );
};

export default MultistepForm;
