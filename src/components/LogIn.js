import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

const LogIn = (props) => {
    const [credentials, setCredentials] = useState({email: "", password: "",})
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:8000/api/auth/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              },
              body: JSON.stringify({email: credentials.email, password: credentials.password}),
          });

          const json = await response.json();
          console.log(json);
          if(json.success){
            //save the authtoken & redirect
            localStorage.setItem('token', json.authtoken);
            props.showAlert("Logged In successfully", "success");
            navigate("/");
          }
          else{
            props.showAlert("Invalid credentials", "danger");
          }
        };

    const onChange = (e) => {
        setCredentials({...credentials,[e.target.name]:e.target.value});
      };

  return (
    <div className="mt-3">
      <h2>Login to continue to iNotebook</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            value={credentials.email}
            onChange={onChange}
            id="email"
            name="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            value={credentials.password}
            onChange={onChange}
            name="password"
            id="password"
            placeholder="Password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LogIn;
