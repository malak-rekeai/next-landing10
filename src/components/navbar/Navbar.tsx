import Link from "next/link";
import React from "react";
import Style from "./navbar.module.css";
import { DarkLight } from "../DarkLight/DarkLight";
import Button from "../button/Button";

const Navbar = () => {
  const navs = [
    { id: 1, title: "Home", url: "/" },
    { id: 2, title: "About", url: "/about" },
    { id: 3, title: "Contact", url: "/contact" },
    { id: 3, title: "Portfolio", url: "/portfolio" },
    { id: 3, title: "Blog", url: "/blog" },
    { id: 3, title: "Dashboard", url: "/dashboard" },
  ];
  return (
    <div className={Style.container}>
      <Link href="/" className={Style.logo}>
        MALAK
      </Link>
      <div className={Style.link}>
        <DarkLight />
        {navs.map((nav) => {
          return (
              <Link key={nav.id} href={nav.url} >
                {" "}
                {nav.title}
              </Link>
          );
        })}
        <Button text="Login" url="/login" />
      </div>
    </div>
  );
};

export default Navbar;
