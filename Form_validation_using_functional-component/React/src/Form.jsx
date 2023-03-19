import React, { useState } from "react";
import validation from "./Validation";
function LoginForm() {
  const [values, setValues] = useState({
    name: "",
    password: "",
  });
  const [errors, setError] = useState({});

  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    setError(validation(values));
  }
  return (
    <div className="wrap">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            placeholder="enter username"
            value={values.name}
            name="name"
            onChange={handleChange}
          />
        </div>

        {errors.name && <p>{errors.name}</p>}

        <div>
          <label>Password</label>
          <input
            type="password"
            placeholder="enter password"
            value={values.password}
            name="password"
            onChange={handleChange}
          />
        </div>
        {errors.password && <p>{errors.password}</p>}
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
export default LoginForm;
