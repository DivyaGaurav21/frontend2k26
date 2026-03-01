//CREATE FORM VALIDATION DURING SUBMIT FORM

// import React, { useState } from "react";

// const FormValidation = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword:""
//   });

//   const [error, setError] = useState({});

//   const formDataHandler = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const validate = () => {
//     const err = {};
//     if (!formData.name) {
//       err.nameError = "name is required";
//     } else if (formData.name.length < 3) {
//       err.nameError = "name is invalid";
//     }
//     if (!formData.email) {
//       err.emailError = "email is required";
//     }
//     if (!formData.password) {
//       err.passwordError = "password is required";
//     }else if(formData.password.length < 8){
//       err.passwordError = "password must be atleast 8 character"
//     }
//     if(!formData.confirmPassword){
//       err.confirmPasswordError = "Confirm Password is Required"
//     }else if(formData.password !== formData.confirmPassword){
//       err.confirmPasswordError = "password and confirm password is not matching"
//     }
//     setError(err);
//     return Object.keys(err).length > 0;
//   };

//   const formSubmitHandler = (e) => {
//     e.preventDefault();
//     if (!validate()) {
//       console.log(formData, "fff");
//       setFormData({
//         name: "",
//         email: "",
//         password: "",
//         confirmPassword:""
//       });
//     }
//   };
//   return (
//     <section>
//       <form className="flex flex-col gap-2" onSubmit={formSubmitHandler}>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={formDataHandler}
//           placeholder="Enter your name"
//           className="input"
//         />
//         {error.nameError && <span>{error.nameError}</span>}
//         <input
//           type="text"
//           name="email"
//           value={formData.email}
//           onChange={formDataHandler}
//           placeholder="Enter your email"
//           className="input"
//         />
//         {error.emailError && <span>{error.emailError}</span>}
//         <input
//           type="text"
//           name="password"
//           value={formData.password}
//           onChange={formDataHandler}
//           placeholder="Enter your password"
//           className="input"
//         />
//         {error.passwordError && <span>{error.passwordError}</span>}
//         <input
//           type="text"
//           name="confirmPassword"
//           value={formData.confirmPassword}
//           onChange={formDataHandler}
//           placeholder="Enter your password"
//           className="input"
//         />
//         {error.confirmPasswordError && <span>{error.confirmPasswordError}</span>}
//         <button className="btn" type="submit">
//           Submit
//         </button>
//       </form>
//     </section>
//   );
// };

// export default FormValidation;
//CREATE FORM VALIDATION DURING TYPING FORM FIELD

import React, { useState } from "react";

const FormValidation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({});

  const formDataHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    const validateErrorMessage = validate(name, value);
    setError((prev) => ({
      ...prev,
      [`${name}Error`]: validateErrorMessage,
    }));
  };

  const validate = (name, value) => {
    let message = "";
    if (name == "name") {
      if (!value) message = "name is required";
    }
    if (name == "email") {
      if (!value) message = "email is required";
    }
    return message;
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (!validate()) {
      console.log(formData, "fff");
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    }
  };
  return (
    <section>
      <form className="flex flex-col gap-2" onSubmit={formSubmitHandler}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={formDataHandler}
          placeholder="Enter your name"
          className="input"
        />
        {error.nameError && <span>{error.nameError}</span>}
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={formDataHandler}
          placeholder="Enter your email"
          className="input"
        />
        {error.emailError && <span>{error.emailError}</span>}
        <input
          type="text"
          name="password"
          value={formData.password}
          onChange={formDataHandler}
          placeholder="Enter your password"
          className="input"
        />
        {error.passwordError && <span>{error.passwordError}</span>}
        <input
          type="text"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={formDataHandler}
          placeholder="Enter your password"
          className="input"
        />
        {error.confirmPasswordError && (
          <span>{error.confirmPasswordError}</span>
        )}
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
};

export default FormValidation;
