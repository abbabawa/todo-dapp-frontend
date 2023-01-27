import React from "react";
import styled from "styled-components";
import MenuIcon from "./svgs/MenuIcon";

import { FiSearch } from "react-icons/fi";
import { BsBellFill } from "react-icons/bs";
import { HiMenuAlt4 } from "react-icons/hi";

const Header = () => {
  return (
    <HeaderLayout>
      <HiMenuAlt4 size={32} color={"#9799A5"} />
      <HeaderRight>
        <IconWrapper>
          <FiSearch size={32} color={"#9799A5"} />
        </IconWrapper>
        <IconWrapper>
          <BsBellFill size={32} color={"#9799A5"} />
        </IconWrapper>
      </HeaderRight>
    </HeaderLayout>
  );
};

export default Header;

const HeaderLayout = styled.div(({ theme }) => ({
  padding: "10px",
  display: "flex",
  justifyContent: "space-between",
}));

const HeaderRight = styled.div(({ theme }) => ({
    display: "flex",
}));

const IconWrapper = styled.div(({ theme }) => ({
    marginLeft: "1em",
}));
