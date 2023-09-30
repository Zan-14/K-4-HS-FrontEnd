import React from "react";
import { Link } from "react-router-dom";

const NavAuth = ({ to }) => {
  return (
    <div className="p-5 shadow">
      <Link
        to={to}
        className="text-3xl font-bold text-blue-900 container mx-auto"
      >
        JobStreet
      </Link>
    </div>
  );
};

export default NavAuth;
