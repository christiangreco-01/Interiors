import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");

  return (
    <div>
      <form action="" className="max-w-md m-auto pt-24">
        <h2 className="font-bold pb-2"> Sign up today! </h2>
        <p>
          Already have an account?
          <Link to="/LoginPage">Sign in!</Link>
        </p>
        <div className="flex flex-col py-4">
          <input
            placeholder="email"
            className="p-3 mt-6"
            type="email"
            name=""
            id=""
          />
          <input
            placeholder="password"
            className="p-3 mt-6"
            type="password"
            name=""
            id=""
          />
          <button type="submit" disabled={loading} className="mt-4 w-full">
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};
