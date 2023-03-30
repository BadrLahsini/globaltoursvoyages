import { Link } from "react-router-dom";
const Dropdown = ({ submenus, dropdown, navHander }) => {
  return (
    <ul className={`dropdown ${dropdown ? "show" : ""}`}>
      {submenus.map((submenu, index) => (
        <li key={index} className="menu-item">
          <Link onClick={navHander} to={submenu.url} className="main-nav-link">
            {submenu.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
