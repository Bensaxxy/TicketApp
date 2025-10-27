import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { setSession } from "../../auth/session";
import { toast } from "react-toastify";

function fakeAuthApi(email, password) {
  // In real app you'd check; we accept any but produce token
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (!email || !password) return rej(new Error("Missing credentials"));
      if (password.length < 4) return rej(new Error("Invalid credentials"));
      res({ token: "mock-token-" + btoa(email), email });
    }, 500);
  });
}

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const e = {};
    if (!email) e.email = "Email is required";
    // simple pattern
    if (email && !/^\S+@\S+\.\S+$/.test(email)) e.email = "Enter a valid email";
    if (!password) e.password = "Password required";
    if (password && password.length < 4) e.password = "Password too short";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = async (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    try {
      const data = await fakeAuthApi(email, password);
      setSession({ token: data.token, email: data.email });
      toast.success("Logged in");
      navigate("/dashboard");
    } catch (err) {
      toast.error(err.message || "Login failed");
    }
  };

  return (
    <main className="page-container">
      <section className="auth-card">
        <h2>Login</h2>
        <form onSubmit={submit} noValidate>
          <label>
            Email<span aria-hidden>*</span>
          </label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
          {errors.email && <small className="error">{errors.email}</small>}

          <label>
            Password<span aria-hidden>*</span>
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && (
            <small className="error">{errors.password}</small>
          )}

          <button type="submit" className="btn">
            Login
          </button>
        </form>
        <p>
          Don't have an account? <Link to="/auth/signup">Sign up</Link>
        </p>
      </section>
    </main>
  );
}
