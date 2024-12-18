import React, { useEffect, useState } from "react";
import "./Navbar.css";
import drop_down_img from "../../assets/images/down-arrow.png";
import { useNavigate } from "react-router-dom";
import Login from "../../Pages/Login/Login";
import { useUser } from "../../UserContext";

const Navbar = () => {
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { user, logoutUser } = useUser(); 

  const handleLoginClick = () => {
    setIsModalVisible(true);
  };
  const handleSellClick = () => {
    navigate("/post");
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  useEffect(()=>{
    setIsModalVisible(false);
  },[user])

  return (
    <div className="navbar">
      <div className="navbar-left">
        <svg
          width="48px"
          height="48px"
          viewBox="0 0 1024 1024"
          data-aut-id="icon"
          fillRule="evenodd"
        >
          <path d="..."></path>
        </svg>
        <div className="left-input">
          <input type="text" placeholder="india" />
          <button>
            <img
              src={drop_down_img}
              alt=""
              style={{ width: "16px", height: "16px" }}
            />
          </button>
        </div>
      </div>

      <div className="navbar-middle">
        <input type="text" placeholder="Find Cars, Mobile Phones and more" />
        <span>
          <svg width="25px" height="25px" viewBox="0 0 1024 1024">
            <path d="..."></path>
          </svg>
        </span>
      </div>

      <div className="navbar-right">
        <span>English&#9660;</span>
        <div>
          {user ? (
            <div className="profile-section">
              <img
                src="https://via.placeholder.com/30"
                alt="profile"
                className="profile-icon"
              />
              <button onClick={logoutUser} className="logout-button">
                Logout
              </button>
            </div>
          ) : (
            <button onClick={handleLoginClick}>Login</button>
          )}
        </div>
        <div>
          <button onClick={() => {if (!user) {
          handleLoginClick();
        } else {
          handleSellClick(); 
        }
      }}>Sell</button>
        </div>
      </div>

      <Login show={isModalVisible} onClose={handleCloseModal} />
    </div>
  );
};

export default Navbar;
