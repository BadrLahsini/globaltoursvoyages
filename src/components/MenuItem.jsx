import Dropdown from "./Dropdown";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function MenuItem({ item, navHander }) {
  const [dropdown, setDropdown] = useState(false);
  let ref = useRef();
  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);
  const closeDropdown = () => {
    dropdown && setDropdown(false);
  };

  return (
    <li className="menu-item" ref={ref} onClick={closeDropdown}>
      {item.submenu ? (
        <>
          <a
            className="main-nav-link"
            onClick={() => setDropdown((prev) => !prev)}
          >
            {item.title}
            <span className="arrow" />
          </a>
          <Dropdown
            submenus={item.submenu}
            dropdown={dropdown}
            navHander={navHander}
          />
        </>
      ) : (
        <Link className="main-nav-link" to={item.url} onClick={navHander}>
          {item.title}
        </Link>
      )}
    </li>
  );
}

export default MenuItem;
