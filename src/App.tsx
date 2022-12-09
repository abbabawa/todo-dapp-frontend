import styled from "styled-components";
import React from "react";
import ThemeLayout from "./containers/ThemeLayout/ThemeLayout";
import { Provider } from "react-redux";

import { store } from "./redux/store/store";

function App() {
  return (
    <Provider store={store}>
    <ThemeLayout>
      <Container>show</Container>
      <UserAvatarLayout>
        <MyText>this is me</MyText>
      </UserAvatarLayout>
    </ThemeLayout>
    </Provider>
  );
}

export default App;

const UserAvatarLayout = styled.div(({ theme }) => ({
  postion: "relative",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: theme.customSpacing.rem(1),
  padding: theme.customSpacing.rem(1),
  zIndex: -1,
  // border: "1px solid red"
}));

const MyText = styled.p(({ theme }) => ({
  color: "red"
}));


const Container = styled.div`
  width: 100%;
  height: 100%;
  background: "red";
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
