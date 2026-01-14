import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="border border-gray-800 p-6 rounded w-96">
        <p className="exit w-full text-right"><Link to="/">x</Link></p>
        <h2 className="text-xl font-semibold mb-4">Login</h2>

        <input
          className="w-full mb-3 p-2 bg-gray-900 border border-gray-700 rounded"
          placeholder="Email"
        />
        <input
          type="password"
          className="w-full mb-4 p-2 bg-gray-900 border border-gray-700 rounded"
          placeholder="Password"
        />

        <button className="w-full bg-green-500 text-black py-2 rounded">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
