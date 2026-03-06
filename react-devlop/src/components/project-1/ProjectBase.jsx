import React from "react";
import { useState } from "react";
import ProgressBar from "./ProgressBar";

const ProjectBase = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    dob: "",
    gender: "",
    address: "",
  });

  console.log(formData);

  const formChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitHandler = () => {
    console.log(formData , 'submit action')
  }

  return (
    <section className="min-h-125">
        <div>
            <ProgressBar step={step} totalStep = {3} />
        </div>
      <div>
        <form>
          {step == 1 && (
            <div className="flex flex-col gap-2">
              <p>Form 1</p>
              <input
                name="name"
                type="text"
                value={formData.name}
                onChange={formChangeHandler}
                placeholder="Enter Name"
                className="border p-2"
              />
              <input
                name="email"
                type="text"
                value={formData.email}
                onChange={formChangeHandler}
                placeholder="Enter Email"
                className="border p-2"
              />
            </div>
          )}
          {step == 2 && (
            <div className="flex flex-col gap-2">
              <p>Form 2</p>
              <input
                name="age"
                type="text"
                value={formData.age}
                onChange={formChangeHandler}
                placeholder="Enter Age"
                className="border max-w-50 p-2"
              />
              <input
                name="dob"
                type="date"
                value={formData.dob}
                onChange={formChangeHandler}
                className="border p-2 max-w-50"
              />
            </div>
          )}
          {step == 3 && (
            <div className="flex flex-col gap-2">
              <p>Form 3</p>
              <p>Gender</p>
              <div className="flex flex-row gap-2">
                <span>Male</span>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === "male"}
                  onChange={formChangeHandler}
                />
                <span>FeMale</span>
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
                  value="others"
                  checked={formData.gender === "others"}
                  onChange={formChangeHandler}
                />
              </div>
              <textarea
                type="text"
                name="address"
                value={formData.address}
                onChange={formChangeHandler}
                placeholder="write your address"
              />
            </div>
          )}
        </form>
      </div>
      <div>
        {step !== 1 && (
          <button className="btn" onClick={() => setStep((curr) => curr - 1)}>
            Prev
          </button>
        )}
        <button className="btn" onClick={step === 3 ? submitHandler : () => setStep((curr) => curr + 1)}>
          {step === 3 ? "Submit" : "Next"}
        </button>
      </div>
    </section>
  );
};

export default ProjectBase;
