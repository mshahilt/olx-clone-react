import React, { useState } from "react";
import "./Login.css";

const Login = ({ show, onClose }) => {
  const [showEmailInput, setShowEmailInput] = useState(false); 
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false); 

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(value));
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
          {!showEmailInput && (
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
          {!showEmailInput ? (
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
          ) : (
            <>
            <button
              className="back-button"
              onClick={() => {
                setShowEmailInput(false);
              }}
            >
              &larr;
            </button>
            <div className="login-header">
              <div className="logo">OL<span>x</span></div>
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
              If you are a new user please select any other login option from the previous page.
            </div>
            <button
              className={`login-button next ${isEmailValid ? "active" : ""}`}
              disabled={!isEmailValid}
            >
              Next
            </button>
            <div className="footer-text">
              Your email is never shared with external parties nor do we use it to spam you in any way.
            </div>
          </>
          )}
        </div>
        {!showEmailInput && (
          <div className="modal-footer">
            <p>All your personal details are safe with us.</p>
            <p>
              If you continue, you are accepting OLX Terms and Conditions and
              Privacy Policy
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
