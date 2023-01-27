import React from "react";
import styled from "styled-components";
import AddTask from "../components/AddTask";
import Categories from "../components/CategorySection/Categories";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import MenuIcon from "../components/svgs/MenuIcon";
import TodayTasks from "../components/TodayTasks";
// import MenuIcon  from "../../components/svgs/MenuIcon"

function Layout({children}:any) {
  return (
    <AppContainer>
      <SideBarWrapper>
        <Sidebar />
      </SideBarWrapper>
      <MainContent>
        <Header />
        <Section>
          <PageTitle>What's up, Joy</PageTitle>
        </Section>
        <Section>
          <Categories />
        </Section>
        <Section>
          <TodayTasks />
          <AddTask />
        </Section>
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
  // border: "1px solid green",
  backgroundColor: "#101E52"
}));

const MainContent = styled.div(({ theme }) => ({
  width: "80%",
  minHeight: "100%",
  border: "1px solid yellow",
  backgroundColor: "#F9FAFF",
  overflowX: "hidden"
}));

const Section = styled.div(({ theme }) => ({
  maxWidth: "100%",
  display: "flex",
  // marginLeft: theme.customSpacing.rem(0.5),
  paddingLeft: theme.customSpacing.rem(1.5),
  // border: "1px solid red",
}));

const PageTitle = styled.h1(({ theme }) => ({
  color: "#51526D"
}));
