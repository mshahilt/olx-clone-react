import React, { useState } from "react";
import { toast } from "react-toastify";
import { useUser } from "../../UserContext";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = ({ show, onClose }) => {
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);

  const {loginUser} = useUser();
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(value));
  };

  const handleSendOtp = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success(data.message || "OTP sent successfully!");
        setShowOtpInput(true); 
      } else {
        toast.error(data.message || "Failed to send OTP. Try again.");
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      toast.error("An error occurred. Please try again.");
    }
  };

  const handleVerifyOtp = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/user/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, otp }),
      });

      const data = await response.json();
      if (response.ok) {        
        loginUser(email);
        toast.success("Login successful!");
        setShowOtpInput(false);
        setShowEmailInput(false)
        navigate("/");
      } else {
        toast.error(data.message || "Invalid OTP. Please try again.");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      toast.error("An error occurred. Please try again.");
    }
  };

  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <button onClick={onClose} className="close-button">
            ×
          </button>
        </div>
        <div className="modal-carousel">
          {!showEmailInput && !showOtpInput && (
            <>
              <div className="carousel-item">🎸</div>
              <div className="carousel-text">
                Help us become one of the safest places to buy and sell
              </div>
              <div className="carousel-indicator">
                <span className="dot active"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
            </>
          )}
        </div>
        <div className="modal-body">
          {!showEmailInput && !showOtpInput && (
            <>
              <button className="login-button phone">Continue with phone</button>
              <button className="login-button google">
                <span className="google-icon">G</span> Continue as mshahil
              </button>
              <div className="separator">OR</div>
              <button
                className="login-button email"
                onClick={() => setShowEmailInput(true)}
              >
                Login with Email
              </button>
            </>
          )}
          {showEmailInput && !showOtpInput && (
            <>
              <button
                className="back-button"
                onClick={() => setShowEmailInput(false)}
              >
                &larr;
              </button>
              <div className="login-header">
                <div className="logo">
                  OL<span>x</span>
                </div>
                <h2>Enter your email to login</h2>
              </div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
                className="email-input"
              />
              <div className="info-text">
                If you are a new user, please select any other login option from
                the previous page.
              </div>
              <button
                className={`login-button next ${isEmailValid ? "active" : ""}`}
                disabled={!isEmailValid}
                onClick={handleSendOtp}
              >
                Send OTP
              </button>
              <div className="footer-text">
                Your email is never shared with external parties nor do we use
                it to spam you in any way.
              </div>
            </>
          )}

          {showOtpInput && (
            <>
              <button
                className="back-button"
                onClick={() => setShowOtpInput(false)}
              >
                &larr;
              </button>
              <div className="login-header">
                <div className="logo">
                  OL<span>x</span>
                </div>
                <h2>Enter the OTP sent to your email</h2>
              </div>
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="otp-input"
              />
              <button
                className={`login-button next ${otp.length === 6 ? "active" : ""}`}
                disabled={otp.length !== 6}
                onClick={handleVerifyOtp}
              >
                Verify OTP
              </button>
              <div className="footer-text">
                Didn't receive the OTP? Check your spam folder or try again.
              </div>
            </>
          )}
        </div>
        {!showEmailInput && !showOtpInput && (
          <div className="modal-footer">
            <p>All your personal details are safe with us.</p>
            <p>
              If you continue, you are accepting OLX Terms and Conditions and
              Privacy Policy.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
