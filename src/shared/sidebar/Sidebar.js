import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth/AuthContext";

export const Sidebar = () => {
  const navigate = useNavigate();
  const {logout} = useAuth()
  const logoutHandler = () =>  {
   logout();
   navigate("/")
  }
  return (
    <div className="sidebar ml-2 p-2">
      <ul className="sidebar-unorderd-list">
        <li className="list-style-none">
          <button className="active sidebar-list-item font-semibold text-xs p-2 mb-2">
            Dashboard
          </button>
        </li>
        <li className="list-style-none">
          <button className="sidebar-list-item font-semibold text-xs p-2 mb-2">
            Support
          </button>
        </li>
        <li className="list-style-none">
          <button className="sidebar-list-item font-semibold text-xs p-2">
            Notification
          </button>
        </li>
      </ul>

      <button className="logout font-semibold text-xs" onClick={logoutHandler}>
        Logout
      </button>
    </div>
  );
};
