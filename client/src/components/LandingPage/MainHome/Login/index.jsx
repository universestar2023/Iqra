import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Use useNavigate for redirection

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Ensure both email and password fields are filled
    if (!data.email || !data.password) {
      setError("Both fields are required");
      return;
    }

    try {
      const url = "http://localhost:8080/api/auth"; // Ensure this is correct
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data); // Correctly storing the token
      navigate("/home"); // Use navigate for redirection
    } catch (error) {
      if (error.response && error.response.status >= 400 && error.response.status <= 500) {
        setError(error.response.data.message); // Show the error message from the server
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-semibold text-center mb-6">Login to Your Account</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            value={data.email}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={data.password}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {error && <div className="text-red-500 text-sm">{error}</div>}
          <Link to='/home'><button
            type="submit"
            disabled={!data.email || !data.password} // Disable if either field is empty
            className={`w-full mt-3 py-2 rounded-md transition duration-300 ${
              !data.email || !data.password
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-500 text-white hover:bg-green-600"
            }`}
          >
            Sign in
          </button></Link>
        </form>
        <div className="mt-4 text-center">
          <h2 className="text-gray-600">New Here?</h2>
          <Link to="/signup">
            <button className="mt-2 w-full bg-white border border-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-100 transition duration-300">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
