import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [items, setItems] = useState([]);

  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      setItems([
        ["Login", "/login"],
        ["Sign up", "/signup"],
      ]);
    } else {
      setItems([
        ["Home", "/home"],
        ["Gallery", "/gallery"],
        ["Logout", ""],
      ]);
    }
  }, [user]);

  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-3 py-2 sm:px-6 sm:py-4">
        {/* LOGO / NAME */}
          <Link to="/">
        <div className="flex items-center gap-2 cursor-pointer">
          <img
            src="https://playground.com/logos/logo-icon.png"
            alt="logo"
            className="h-6 w-6 sm:h-7 sm:w-7"
          />
          <p className="font-bold text-[#1d1b1c] text-[16px] sm:text-[22px] tracking-wide">
            ARTIFY AI
          </p>
        </div>
          </Link>

        {/* BUTTONS */}
        <div className="flex items-center gap-2 sm:gap-4">
          {items.map((item, i) => (
            <Link to={item[1]}>
              <button
                key={i}
                className={`
                px-3 py-1.5 sm:px-5 sm:py-2
                text-[10px] sm:text-[14px]
                rounded-full font-medium
                transition-all duration-300
                focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer
                ${
                  item[0] === "Sign up"
                    ? "bg-gradient-to-r from-indigo-500 to-cyan-500 text-white hover:opacity-90"
                    : item === "Logout"
                    ? "bg-red-500 text-white hover:bg-red-600"
                    : "bg-[#1d1b1c] text-white hover:bg-black"
                }
              `}
              >
                {item[0]}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
