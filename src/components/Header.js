import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants.js";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus.js";
import  UserContext  from "../utils/UserContext.js";

export const Header = (props) => {
const [btn, setBtn] = useState('Login')
const onlineStatus = useOnlineStatus();
const {loggedInUser} = useContext(UserContext);
const handleClick=()=>{
    btn ==='Login' ? setBtn('LogOut') :setBtn('Login')
}
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg m-2 mb-2">
      <div className="logo-container">
        <img
          className="w-40"
          src={ LOGO_URL }
          alt="logo"
        />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-3">Status{onlineStatus?"🟢":"🔴"} </li>
          <li className="px-3"><Link to="/">Home</Link></li>
          <li className="px-3"><Link to="/about">About Us</Link></li>
          <li className="px-3"><Link to="/contact">Contact Us</Link></li>
          <li className="px-3"><Link to="/grocery">Grocery</Link></li>
          <li className="px-3"><Link to="/cart">Cart</Link></li>
          <li className="px-3"><button onClick={handleClick}>{btn}</button></li>
          <li className="px-3 font-bold">{loggedInUser}</li>
          {/* <li className="px-3">{props.user ? props.user :"Default User"}</li> */}

        </ul>
      </div>
    </div>
  );
};