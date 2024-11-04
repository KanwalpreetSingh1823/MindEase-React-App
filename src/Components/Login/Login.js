import React, { useState } from "react";

const LoginComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpFormVisible, setIsOtpFormVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [otpLoading, setOtpLoading] = useState(false);

  const BACKEND_URL = "https://mindease-j25b.onrender.com";

  const submitLogin = async () => {
    if (!name || !email || !password) {
      alert("Please fill all fields!");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`${BACKEND_URL}/send-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();
      if (result.success) {
        alert(`OTP sent to ${email}`);
        setIsOtpFormVisible(true);
      } else {
        alert("Error sending OTP. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const verifyOTP = async () => {
    if (!otp) {
      alert("Please enter the OTP.");
      return;
    }

    setOtpLoading(true);
    try {
      const response = await fetch(`${BACKEND_URL}/verify-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });

      const result = await response.json();
      if (result.success) {
        alert("OTP Verified! Redirecting to Home Page...");
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        window.location.href = "https://mind-ease-react-app.vercel.app/";
      } else {
        alert("Incorrect OTP. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Server error. Please try again later.");
    } finally {
      setOtpLoading(false);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow" style={{ width: "300px" }}>
        {!isOtpFormVisible ? (
          <div id="login-form">
            <div className="text-center mb-4">
              <img
                src="/Frontend/assets/login-admin-new.png"
                alt="Login"
                className="img-fluid"
                style={{ maxWidth: "60%", marginLeft: "50px" }}
              />
            </div>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Enter your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              className="form-control mb-3"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="form-control mb-3"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="btn btn-success w-100"
              onClick={submitLogin}
              disabled={loading}
            >
              {loading ? (
                <span className="spinner-border spinner-border-sm"></span>
              ) : (
                "Send OTP"
              )}
            </button>
          </div>
        ) : (
          // OTP Form
          <div id="otp-form">
            <h5 className="text-center mb-3">Enter OTP</h5>
            <p className="text-center text-muted mb-4">
              An OTP has been sent to your registered email ID.
            </p>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <button
              className="btn btn-primary w-100"
              onClick={verifyOTP}
              disabled={otpLoading}
            >
              {otpLoading ? (
                <span className="spinner-border spinner-border-sm"></span>
              ) : (
                "Verify OTP"
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginComponent;
