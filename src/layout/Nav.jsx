import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavData } from "../data/Nav/data";

const WHATSAPP_URL =
  "https://api.whatsapp.com/message/P2LICPEUG3BYK1?autoload=1&app_absent=0";

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <Link to="/">
          <video
            src="/Untitled design.mp4"
            autoPlay
            loop
            muted
            className=" h-16 cursor-pointer"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          {NavData.map((item) => {
            const isB2B = (item.title || "").toLowerCase() === "b2b";
            return (
              <li key={item.id}>
                {isB2B ? (
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-md px-3 py-2 transition-colors duration-200 bg-blue-600 text-white hover:bg-blue-700"
                  >
                    <span className="inline-flex items-center gap-2 align-middle">
                      {(item.icon || item.image) && (
                        <img
                          src={item.icon || item.image}
                          alt={`${item.title} icon`}
                          className="h-6 w-6"
                        />
                      )}
                      {item.title}
                    </span>
                  </a>
                ) : (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `text-lg font-medium transition-colors duration-200 ${
                        isActive
                          ? "text-blue-600"
                          : "text-gray-700 hover:text-blue-500"
                      }`
                    }
                  >
                    <span className="inline-flex items-center gap-2 align-middle">
                      {(item.icon || item.image) && (
                        <img
                          src={item.icon || item.image}
                          alt={`${item.title} icon`}
                          className="h-5 w-5"
                        />
                      )}
                      {item.title}
                    </span>
                  </NavLink>
                )}
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-md transition-all duration-300 overflow-hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col px-6 py-4 gap-4">
          {NavData.map((item) => {
            const isB2B = (item.title || "").toLowerCase() === "b2b";
            return (
              <li key={item.id}>
                {isB2B ? (
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center gap-2 rounded-md px-3 py-2 w-fit transition-colors duration-200 bg-blue-600 text-white hover:bg-blue-700"
                  >
                    <span className="inline-flex items-center gap-2 align-middle">
                      {(item.icon || item.image) && (
                        <img
                          src={item.icon || item.image}
                          alt={`${item.title} icon`}
                          className="h-6 w-6"
                        />
                      )}
                      {item.title}
                    </span>
                  </a>
                ) : (
                  <NavLink
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block text-lg font-medium ${
                        isActive
                          ? "text-blue-600"
                          : "text-gray-700 hover:text-blue-500"
                      }`
                    }
                  >
                    <span className="inline-flex items-center gap-2 align-middle">
                      {(item.icon || item.image) && (
                        <img
                          src={item.icon || item.image}
                          alt={`${item.title} icon`}
                          className="h-5 w-5"
                        />
                      )}
                      {item.title}
                    </span>
                  </NavLink>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
