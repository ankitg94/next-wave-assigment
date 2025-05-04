import { useState } from "react";
import axios from "axios";
import { handleLogin } from "../Api/AllApi";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [responseMsg, setResponseMsg] = useState("");

  const login = async () => {
    // Call the handleLogin function from the API file
    await handleLogin(username, password, setResponseMsg);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="bg-white shadow-2xl rounded-xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-black">Sign In</h2>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={login}
            className="w-full bg-black hover:bg-gray-700 text-white font-semibold py-2 rounded-lg transition"
          >
            Sign In
          </button>

          {responseMsg && (
            <div className="text-center text-sm mt-3 text-gray-700">{responseMsg}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
