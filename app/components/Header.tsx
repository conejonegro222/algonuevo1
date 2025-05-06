import { Link, NavLink } from "@remix-run/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "How It Works", href: "/#how-it-works" }, // Anchor link
    { name: "Pricing", href: "/pricing" },
    // { name: "Blog", href: "/blog" }, // Placeholder if blog is added
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-brand-secondary-dark/80 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="text-3xl font-bold text-brand-purple">
              Kick<span className="text-brand-text-primary">Booster</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                onClick={(e) => {
                  if (link.href.includes("#")) {
                    setIsOpen(false); // Close mobile menu if open
                    // Smooth scroll for anchor links
                    const targetId = link.href.split("#")[1];
                    const targetElement = document.getElementById(targetId);
                    if (targetElement) {
                      e.preventDefault();
                      targetElement.scrollIntoView({ behavior: "smooth" });
                    }
                  }
                }}
                className={({ isActive }) =>
                  `text-sm font-medium pb-1 border-b-2 transition-colors duration-300 ${
                    isActive && !link.href.includes("#")
                      ? "text-brand-purple border-brand-purple"
                      : "text-brand-text-light border-transparent hover:text-brand-purple hover:border-brand-purple"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            {/* Placeholder for Login/Signup */}
            <Link to="/login" className="btn btn-secondary text-sm px-4 py-2">Login</Link>
            <Link to="/signup" className="btn btn-primary text-sm px-4 py-2">Sign Up</Link>
          </nav>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-brand-card inline-flex items-center justify-center p-2 rounded-md text-brand-text-secondary hover:text-brand-text-primary hover:bg-brand-secondary-dark focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-purple"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-brand-secondary-dark shadow-xl" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                onClick={(e) => {
                  setIsOpen(false);
                  if (link.href.includes("#")) {
                    const targetId = link.href.split("#")[1];
                    const targetElement = document.getElementById(targetId);
                    if (targetElement) {
                       e.preventDefault();
                      targetElement.scrollIntoView({ behavior: "smooth" });
                    }
                  }
                }}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive && !link.href.includes("#")
                      ? "bg-brand-purple text-white"
                      : "text-brand-text-light hover:bg-brand-card hover:text-white"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <div className="border-t border-brand-card pt-4 mt-4 space-y-2">
                <Link to="/login" onClick={() => setIsOpen(false)} className="block w-full text-center btn btn-secondary">Login</Link>
                <Link to="/signup" onClick={() => setIsOpen(false)} className="block w-full text-center btn btn-primary">Sign Up</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
