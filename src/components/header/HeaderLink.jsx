import Link from "next/link";
import React from "react";

function HeaderLink({ children, href }) {
  return (
    <Link
      href={href ? href : "/"}
      className="hover:text-primary hover:drop-shadow-md hover:rounded-md py-1 px-2"
    >
      {children}
    </Link>
  );
}

export default HeaderLink;
