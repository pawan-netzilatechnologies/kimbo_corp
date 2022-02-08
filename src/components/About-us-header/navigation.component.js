import React from "react";
import { Link } from "react-router-dom";

import { Links } from "./links";

import "./navigation.styles.scss";

export const Nav = () => {
  const style = {
    color: "#fff",
    width: "auto",
    fontFamily: "Ubuntu",
    fontSize: "18px",
  };

  return (
    <nav className="navigation py-3">
      <div className="container">
        <div className="row gap-3 gap-md-5 ps-md-5">
          {Links.map(({ id, text, url }) => (
            <Link
              className={
                window.location.pathname === url ? "active" : "not-active"
              }
              style={style}
              to={url}
              key={id}
            >
              {text}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};
