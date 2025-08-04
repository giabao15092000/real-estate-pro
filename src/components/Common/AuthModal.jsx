import React from "react";

const AuthModal = ({ show, onClose, mode }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-md rounded-lg shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-black text-xl"
        >
          ×
        </button>
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">
            {mode === "login"
              ? "Login to your account"
              : "Register a new account"}
          </h2>

          <input
            type="text"
            placeholder="Enter phone number"
            className="w-full border rounded px-3 py-2 mb-4"
          />

          <button className="bg-red-400 text-white w-full py-2 rounded mb-4">
            Continue
          </button>

          <div className="text-center text-gray-500 text-sm mb-2">Or</div>

          <button className="w-full border rounded py-2 mb-2 flex items-center justify-center gap-2">
            <span role="img" aria-label="Apple">
              🍎
            </span>
            Login with Apple
          </button>

          <button className="w-full border rounded py-2 flex items-center justify-center gap-2">
            <span role="img" aria-label="Google">
              🌐
            </span>
            Login with Google
          </button>

          <p className="text-xs text-gray-400 mt-4 text-center">
            By continuing, you agree to...{" "}
            <span className="text-blue-500 underline">
              Terms and Conditions
            </span>
            , <span className="text-blue-500 underline">Privacy Policy</span> of
            us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
