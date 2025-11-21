import { useState } from "react";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar bg-base-100 shadow fixed top-0 left-0 w-full z-50">
      {/* LOGO */}
      <div className="flex-1 px-4">
        <a className="text-xl font-bold normal-case">ndik</a>
      </div>

      {/* DESKTOP MENU */}
      <div className="hidden md:flex flex-none space-x-4">
        <a className="btn btn-ghost normal-case" href="#home">
          Home
        </a>
        <a className="btn btn-ghost normal-case" href="#my-projects">
          My Projects
        </a>
        <a className="btn btn-ghost normal-case" href="#">
          Contact
        </a>
      </div>

      {/* MOBILE MENU BUTTON */}
      <div className="md:hidden flex-none">
        <button className="btn btn-square btn-ghost" onClick={() => setOpen(!open)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-base-100 shadow-lg flex flex-col px-4 py-2 space-y-2">
          <a className="btn btn-ghost w-full normal-case" href="#">
            Home
          </a>
          <a className="btn btn-ghost w-full normal-case" href="#">
            My Projects
          </a>
          <a className="btn btn-ghost w-full normal-case" href="#">
            Contact
          </a>
        </div>
      )}
    </div>
  );
};
