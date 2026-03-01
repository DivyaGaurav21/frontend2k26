// import React, { useState } from "react";

// const FullyControlledForm = () => {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [confirmPassword, setConfirmPassword] = useState("");

//     const formSubmitHandler = (e) => {
//         e.preventDefault();
//         if (password !== confirmPassword) {
//             alert("password and confirmPassword is not same")
//             return;
//         }
//         console.log(name, email , password , "wwqwq")
//     }

//     return <section>
//         <form className="flex flex-col gap-2" onSubmit={formSubmitHandler}>
//             <input
//                 placeholder="Enter Your Name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 required
//             />
//             <input
//                 placeholder="Enter Your Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//             />
//             <input
//                 placeholder="Enter Your PassWord"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//             />
//             <input
//                 placeholder="Enter Your Name"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 required
//             />
//             <button className="btn max-w-40" type="submit">Register Now</button>
//         </form>
//     </section>;
// };

// export default FullyControlledForm;

// --------------------------------------------------

// import React, { useState } from "react";

// const FullyControlledForm = () => {
//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         password: "",
//         confirmPassword: ""
//     })

//     const onInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prev => (
//             {
//                 ...prev,
//                 [name]: value
//             }
//         ))
//     }

//     const formSubmitHandler = (e) => {
//         e.preventDefault();
//         if (formData.password != formData.confirmPassword) {
//             alert("password and confirm password is not matching");
//             return;
//         }
//         console.log(formData)
//     }

//     return <div className="border border-black p-5">
//         <form onSubmit={formSubmitHandler} className="flex flex-col gap-2 m-auto">
//             <input
//                 name="name"
//                 placeholder="Enter Your Name"
//                 value={formData.name}
//                 onChange={onInputChange}
//             />
//             <input
//                 name="email"
//                 placeholder="Enter Your Email"
//                 value={formData.email}
//                 onChange={onInputChange}
//             />
//             <input
//                 name="password"
//                 placeholder="Enter Password"
//                 value={formData.password}
//                 onChange={onInputChange}
//             />
//             <input
//                 name="confirmPassword"
//                 placeholder="Enter ConfirmPassword"
//                 value={formData.confirmPassword}
//                 onChange={onInputChange}
//             />
//             <button className="btn max-w-50">Register Now</button>
//         </form>
//     </div>;
// };

// export default FullyControlledForm;

// ---------------------

import React, { useState, useEffect } from "react";

const FullyControlledForm = () => {
  const [formData, setFormData] = useState({
    name: "",
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
        : prev.intrest.filter((val) => val != value),
    }));
  };

  const validate = () => {
    let err = {};
    if (!formData.name) {
      err.nameErr = "name is required";
    } else if (formData.name.length < 3) {
      err.nameErr = "enter valid name";
    }

    if (!formData.email) {
      err.emailErr = "email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      err.emailErr = "email is invalid";
    }

    if (!formData.dob) {
      err.dobErr = "write your date of birth";
    }

    if (!formData.gender) {
      err.genderErr = "mark your gender here";
    }

    if (!formData.role) {
      err.roleErr = "select your role";
    }

    if (formData.intrest.length == 0) {
      err.intrestErr = "mark atleast one intrest";
    }

    setError(err);
    return Object.keys(err).length > 0;
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (!validate()) {
      console.log(formData, "qq");
    }
  };


  //good for begginers
  useEffect(() => {
    validate()
  }, [formData])

  return (
    <section className="max-w-xl">
      <form className="flex flex-col gap-2" onSubmit={formSubmitHandler}>
        <input
          name="name"
          type="text"
          value={formData.name}
          onChange={formChangeHandler}
          placeholder="Enter your name"
          className="input"
        />
        {error.nameErr && <span>{error.nameErr}</span>}
        <input
          name="email"
          type="text"
          value={formData.email}
          onChange={formChangeHandler}
          placeholder="Enter your mail"
          className="input"
        />
        {error.emailErr && <span>{error.emailErr}</span>}
        <input
          name="dob"
          type="date"
          value={formData.dob}
          onChange={formChangeHandler}
          className="input"
        />
        {error.dobErr && <span>{error.dobErr}</span>}
        <div className="flex p-4 gap-2">
          <p>Select Gender</p>
          <label>Male</label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={formData.gender === "male"}
            onChange={formChangeHandler}
          />
          <br />
          <label>Female</label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={formData.gender === "female"}
            onChange={formChangeHandler}
          />
          <br />
          <label>Other</label>
          <input
            type="radio"
            name="gender"
            value="other"
            checked={formData.gender === "other"}
            onChange={formChangeHandler}
          />
          {error.genderErr && <span>{error.genderErr}</span>}
        </div>
        <select onChange={formChangeHandler} name="role">
          <option value="">Select Role</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
          <option value="none">None</option>
        </select>
        {error.roleErr && <span>{error.roleErr}</span>}
        <hr />
        <div className="flex gap-3 justify-center items-center">
          <p>Intrests</p>
          <label>cricket</label>
          <input
            type="checkbox"
            value="cricket"
            checked={formData.intrest.includes("cricket")}
            onChange={checkBoxHandler}
          />
          <label>Football</label>
          <input
            type="checkbox"
            value="football"
            checked={formData.intrest.includes("football")}
            onChange={checkBoxHandler}
          />
          <label>Chess</label>
          <input
            className="checkbox"
            type="checkbox"
            value="chess"
            checked={formData.intrest.includes("chess")}
            onChange={checkBoxHandler}
          />
          {error.intrestErr && <span>{error.intrestErr}</span>}
        </div>
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
};

export default FullyControlledForm;
