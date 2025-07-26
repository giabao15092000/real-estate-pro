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
            {mode === "login" ? "Đăng nhập tài khoản" : "Đăng ký tài khoản mới"}
          </h2>

          <input
            type="text"
            placeholder="Nhập số điện thoại"
            className="w-full border rounded px-3 py-2 mb-4"
          />

          <button className="bg-red-400 text-white w-full py-2 rounded mb-4">
            Tiếp tục
          </button>

          <div className="text-center text-gray-500 text-sm mb-2">Hoặc</div>

          <button className="w-full border rounded py-2 mb-2 flex items-center justify-center gap-2">
            <span role="img" aria-label="Apple">
              🍎
            </span>
            Đăng nhập với Apple
          </button>

          <button className="w-full border rounded py-2 flex items-center justify-center gap-2">
            <span role="img" aria-label="Google">
              🌐
            </span>
            Đăng nhập với Google
          </button>

          <p className="text-xs text-gray-400 mt-4 text-center">
            Bằng việc tiếp tục, bạn đồng ý với{" "}
            <span className="text-blue-500 underline">Điều khoản sử dụng</span>,{" "}
            <span className="text-blue-500 underline">Chính sách bảo mật</span>{" "}
            của chúng tôi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
