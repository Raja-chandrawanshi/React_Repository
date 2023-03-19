import React, { useState } from "react";
import validation from "./Validation";
function LoginForm1() {
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
        <div class="username">
          <label>Username</label>
          <input
            type="text"
            placeholder="enter username"
            value={values.name}
            name="name"
            onChange={handleChange}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div class="password">
          <label>Password</label>
          <input
            type="password"
            placeholder="enter password"
            value={values.password}
            name="password"
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
export default LoginForm1;
