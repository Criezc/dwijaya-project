import React from "react";
import {
  LogoWrapper,
  NavbarWrapper,
  NavItemList,
  NavItemWrapper,
} from "./Navbar.styled";
import NextLink from "next/link";
import Image from "next/image";
import logo from "../../public/vercel.svg";

const index = () => {
  return (
    <NavbarWrapper>
      <LogoWrapper>
        <NextLink href={"/"} passHref>
          <Image
            className="svg"
            src={logo}
            alt="app-logo"
            unoptimized
            height={100}
            width={100}
          />
        </NextLink>
      </LogoWrapper>

      <NavItemWrapper>
        <NavItemList>
          <a href="">Home</a>
        </NavItemList>
        <NavItemList>
          <a href="">About</a>
        </NavItemList>
        <NavItemList>
          <a href="">Product</a>
        </NavItemList>
        <NavItemList>
          <a href="">Contact</a>
        </NavItemList>
      </NavItemWrapper>
    </NavbarWrapper>
  );
};

export default index;
