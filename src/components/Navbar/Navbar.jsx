import React from "react";
import "./navbar.css";
import Badge from "@mui/material/Badge";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";

function Navbar({ cartItemIds }) {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>
          <span className="logo-first">T</span>
          <span className="logo-second">ee</span>
          <span className="logo-first">R</span>
          <span className="logo-second">ex&nbsp;</span>
          <span className="logo-first">S</span>
          <span className="logo-second">tore</span>
        </h2>
      </div>

      <div className="navbar-links">
        <ul>
          <li>
            <a href="/#">Products</a>
          </li>
          <li>
            <a href="/#">
              <Badge badgeContent={cartItemIds.length} color="secondary">
                <ShoppingCartTwoToneIcon
                  sx={{ color: "#6e58ff", fontSize: 30 }}
                />
              </Badge>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
