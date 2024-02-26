import React from "react";
import loginData from "../api";
import { useLocation, useNavigate } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = React.useState({ email: "", password: "" });
  const [status, setStatus] = React.useState("idle");
  const [error, setError] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    loginData(formData)
      .then((data) => {
        let from = location.state?.from?.pathname;
        console.log(from);
        navigate(from || "/host", { replace: true });
        localStorage.setItem("logged", true);
      })
      .catch((err) => setError(err))
      .finally(() => setStatus("idle"));
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prvData) => ({ ...prvData, [name]: value }));
  }

  return (
    <div className="login-form">
      {location.state?.message && (
        <h3 style={{ textAlign: "center", color: "red" }}>
          {location.state.message}
        </h3>
      )}
      <h1>Sign in to your account</h1>
      {error?.message && (
        <h3 style={{ textAlign: "center", color: "red" }}>{error.message}</h3>
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          id="form-email"
          placeholder="Email address"
          onChange={handleChange}
          value={formData.email}
        />
        <input
          type="password"
          name="password"
          id="form-password"
          placeholder="Password"
          onChange={handleChange}
          value={formData.password}
        />
        <button className="btn-og" disabled={status === "loading"}>
          {status === "loading" ? "Logging In..." : "Log in"}
        </button>
      </form>
    </div>
  );
}
