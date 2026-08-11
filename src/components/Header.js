import { LOGO_URL } from "../utils/constants.js";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus.js";
export const Header = () => {
    const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={ LOGO_URL }
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Status{onlineStatus?"🟢":"🔴"} </li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/grocery">Grocery</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
      </div>
    </div>
  );
};