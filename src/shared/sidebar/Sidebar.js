import React from "react";
import { Link } from "react-router-dom";

export const Sidebar = () => {
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

      <Link to="/" className="logout font-semibold text-xs">
        Logout
      </Link>
    </div>
  );
};
