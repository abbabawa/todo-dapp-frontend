import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import MenuIcon from "../components/svgs/MenuIcon";
// import MenuIcon  from "../../components/svgs/MenuIcon"

function Layout({children}:any) {
  return (
    <AppContainer>
      <SideBarWrapper>
        <Sidebar />
      </SideBarWrapper>
      <MainContent>
        <Header />
      </MainContent>
    </AppContainer>
  );
}

export default Layout;

const AppContainer = styled.div(({ theme }) => ({
  maxWidth: "100%",
  minHeight: "100vh",
  maxHeight: "100vh",
  display: "flex",
  //   border: "1px solid red",
}));


const SideBarWrapper = styled.div(({ theme }) => ({
  width: "20%",
  minHeight: "100%",
  // display: "flex",
  border: "1px solid green",
  backgroundColor: "#101E52"
}));

const MainContent = styled.div(({ theme }) => ({
  width: "80%",
  minHeight: "100%",
  border: "1px solid yellow",

}));
