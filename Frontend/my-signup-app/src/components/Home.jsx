import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Home = () => {
  const googleLogin = () => {
    window.location.href = "http://localhost:8080/oauth2/authorization/google";
  };

  const githubLogin = () => {
    window.location.href = "http://localhost:8080/oauth2/authorization/github";
  };

  return (
    <div>
      <h2>Welcome to OAuth </h2>
      <button
        onClick={googleLogin}
        style={{ margin: "10px", fontSize: "16px", padding: "10px" }}
      >
        <FcGoogle />
        Login With Google
      </button>
      <button
        onClick={githubLogin}
        style={{ margin: "10px", fontSize: "16px", padding: "10px" }}
      >
        <FaGithub />
        Login With GitHub
      </button>
    </div>
  );
};

export default Home;
