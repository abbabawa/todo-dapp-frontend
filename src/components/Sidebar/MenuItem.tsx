import React from "react";
import { BsFillBookmarkFill } from "react-icons/bs";
import styled from "styled-components";

const MenuItem = ({ icon, title }: any) => {
  return (
    <MenuItemLayout>
      {icon}
      <MenuText>{title}</MenuText>
    </MenuItemLayout>
  );
};

export default MenuItem;

const MenuItemLayout = styled.div(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  paddingLeft: theme.customSpacing.rem(1.9),
//   border: "1px solid yellow",
}));

const MenuText = styled.p(({ theme }) => ({
    marginLeft: theme.customSpacing.rem(1),
    color: "#6A7699",
    fontSize: theme.customSpacing.rem(1.6),
    // border: "1px solid red",
}));
