import styled from "styled-components";
import { media } from "../../utils/media";

export const NavbarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem 2rem;
  justify-content: flex-end;
  width: 100%;
  align-items: center;
  ${media("<=tablet")} {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export const LogoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  ${media("<=tablet")} {
    justify-content: center;
  }

  .svg {
    fill: white;
    filter: invert();
  }
`;

export const NavItemWrapper = styled.ul`
  display: flex;
  justify-content: end;
  flex-direction: row;
  width: 100%;
  max-width: calc(${LogoWrapper} - 50%);
  font-size: 1.2rem;
  &:not(:last-child) {
    margin-right: 2rem;
  }
  ${media("<=tablet")} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 50%;
    z-index: 100000;
    top: 40px;
    left: 0;
    position: fixed;
    background: rgba(0, 0, 0, 0.6);
    overflow: hidden;
    transition: ease-in-out 0.2s;
    border-radius: 2rem;
    width: 100%;
  }
`;

export const NavItemList = styled.li`
  list-style: none;
  margin-right: auto;
  margin-left: auto;
  display: inline-block;
  position: relative;
  a {
    text-decoration: none;
    color: white;
  }
  a:hover {
    width: 100%;
    transition: all 0.4s;
  }
  a:after {
    content: "";
    display: block;
    margin-top: 5px;
    margin-left: auto;
    margin-right: auto;
    height: 2px;
    width: 0px;
    background-color: gray;
  }
  a:hover::after {
    width: 100%;
    transition: all 0.4s;
  }
  ${media("<=tablet")} {
    margin-right: 0;
    margin-left: 0;
    a {
      display: block;
      position: relative;
      padding: 10px 20px;
      font-weight: 500;
      outline: none;
    }
  }
`;
