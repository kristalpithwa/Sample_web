import React from "react";

interface SidebarProps {
  onPressLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onPressLogout }) => {
  return (
    <div
      className={`fixed inset-y-0 left-0 bg-gray-800 text-white w-64 transition-transform transform `}
    >
      <nav className="p-4">
        <ul>
          <li className="py-2">
            <a href="#">Dashboard</a>
          </li>
          <li className="py-2">
            <a href="#">Settings</a>
          </li>
          <li className="py-2">
            <a href="#">Profile</a>
          </li>
          <li onClick={() => onPressLogout()} className="py-2">
            <a href="#">Logout</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
