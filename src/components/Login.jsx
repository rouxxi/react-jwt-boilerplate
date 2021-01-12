import axios from "axios";
import React from "react";

const Login = () => {
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please specify both email and password");
    } else {
      console.log("email:", email, "password :", password);

      const REACT_APP = process.env.REACT_APP_SERVER_ADDRESS;
      axios
        .post(`${REACT_APP}/login/`, {
          email,
          password,
        })
        .then((res) => {
          localStorage.setItem("token", res.data.token);
          alert(" Logged succcessfuly !");
          console.log(res.data);
        })
        .catch((error) => {
          alert(error);
        });
    }
  };
  return (
    <form>
      <label htmlFor="name">
        Name:
        <input
          name="name"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label htmlFor="pw">
        Password:
        <input
          name="pw"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <input type="submit" onClick={(e) => handleSubmit(e)} value="Send" />
    </form>
  );
};

export default Login;
