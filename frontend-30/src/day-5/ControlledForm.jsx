import React from "react";

const ControlledForm = () => {
  const [formData, setFormData] = React.useState({
    username: "",
    email: "",
    dob: "",
    gender: "",
    intrest: [],
    role: "",
  });

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onChangeCheckBox = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      intrest: checked
        ? [...prev.intrest, value]
        : prev.intrest.filter((v) => v !== value),
    }));
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h1>Controlled Form</h1>
      <form onSubmit={onFormSubmit}>
        <div>
          <span>Name:</span>
          <input
            name="username"
            type="text"
            placeholder="Enter Your Name"
            value={formData.name}
            onChange={onInputChange}
          />
        </div>
        <div>
          <span>Name:</span>
          <input
            name="email"
            type="email"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={onInputChange}
          />
        </div>
        <div>
          <span>DOB:</span>
          <input
            name="dob"
            type="date"
            placeholder="Enter Your DOB"
            value={formData.dob}
            onChange={onInputChange}
          />
        </div>
        <div>
          <span>Gender:</span>
          <div>
            <span>Male</span>
            <input
              name="gender"
              type="radio"
              value="male"
              checked={formData.gender === "male"}
              onChange={onInputChange}
            />
          </div>
          <div>
            <span>Female</span>
            <input
              name="gender"
              type="radio"
              value="female"
              checked={formData.gender === "female"}
              onChange={onInputChange}
            />
          </div>
          <div>
            <span>Other</span>
            <input
              type="radio"
              name="gender"
              value="other"
              checked={formData.gender === "other"}
              onChange={onInputChange}
            />
          </div>
        </div>
        <div>
          <span>role:</span>
          <select name="role" value={formData.role} onChange={onInputChange}>
            <option value="">Select a role</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <div>
          <span>Intrest:</span>
          <div>
            <span>Football</span>
            <input
              type="checkbox"
              name="intrest"
              value="football"
              checked={formData.intrest.includes("football")}
              onChange={onChangeCheckBox}
            />
          </div>
          <div>
            <span>Cricket</span>
            <input
              type="checkbox"
              name="intrest"
              value="cricket"
              checked={formData.intrest.includes("cricket")}
              onChange={onChangeCheckBox}
            />
          </div>
          <div>
            <span>Chess</span>
            <input
              type="checkbox"
              name="intrest"
              value="chess"
              checked={formData.intrest.includes("chess")}
              onChange={onChangeCheckBox}
            />
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ControlledForm;
