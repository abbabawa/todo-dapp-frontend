import React from "react";
import styled from "styled-components";
import { FaUserAlt } from "react-icons/fa";
import MenuItem from "./MenuItem";
import { BsFillBookmarkFill, BsGear, BsGrid } from "react-icons/bs";
import { HiOutlineChartPie } from "react-icons/hi";

const menuItems = [
  {
    id: 1,
    title: "Templates",
    icon: <BsFillBookmarkFill color="#314074" />
  },
  {
    id: 2,
    title: "Categories",
    icon: <BsGrid color="#314074" />
  },
  {
    id: 3,
    title: "Analytics",
    icon: <HiOutlineChartPie size={32} color="#314074" />
  },
  {
    id: 4,
    title: "Settings",
    icon: <BsGear size={32} color="#314074" />
  },
]

const Sidebar = () => {
  return (
    <SideBarLayout>
      <AppTitle>
        <AppTitleText>Todo App</AppTitleText>
      </AppTitle>
      <SidebarMain>
        <Gradient></Gradient>
        <ProfileWrapper>
          <FaUserAlt color="#314074" size={50} />
        </ProfileWrapper>
        <Username>Joy Mitchell</Username>
        <MenuItemsWrapper>
          {menuItems.map(item=>{return <MenuItem key={item.id} icon={item.icon} title={item.title} />})}
        </MenuItemsWrapper>
      </SidebarMain>
    </SideBarLayout>
  );
};

export default Sidebar;

const SideBarLayout = styled.div(({ theme }) => ({
  maxWidth: "100%",
  display: "flex",
  flexWrap: "wrap",
  // border: "1px solid yellow",
  backgroundColor: "#101E52"
}));

const AppTitle = styled.div(({ theme }) => ({
  flex: 1,
  minWidth: "100%",
  visibility: 'hidden',
  // border: "1px solid red",
}));

const AppTitleText = styled.h2(({ theme }) => ({display: 'hidden'}));

const SidebarMain = styled.div(({ theme }) => ({
  minWidth: "100%",
}));

const Gradient = styled.div(({ theme }) => ({
  width: "100px",
  height: "100px",
  marginLeft: "auto",
  marginRight: "auto",
  borderRadius: "50%",
  background: "linear-gradient(45deg, #394278, #B100D5)"
}))

const ProfileWrapper = styled.div(({ theme }) => ({
  position: "absolute",
  top: "12.0%",
  left: "6.7%",
  width: "85px",
  height: "85px",
  marginLeft: "auto",
  marginRight: "auto",
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  alignItems: "center",
  border: "2px solid #314074",
  borderRadius: "50%",
  backgroundColor: "#1182E3"
}));

const Username = styled.h2(({ theme }) => ({
  color: "#F9FFFF",
  textAlign: "center",
}))

const MenuItemsWrapper = styled.h2(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: theme.customSpacing.rem(2),
  paddingLeft: theme.customSpacing.rem(4),
  // border: "1px solid red",
}))