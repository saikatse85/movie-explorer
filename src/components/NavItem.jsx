import { NavLink } from "react-router";

const NavItem = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "font-bold text-red-600 underline" : "hover:underline"
      }
    >
      {children}
    </NavLink>
  );
};

export default NavItem;
