import styled from "styled-components";
import React, { useEffect, useState } from "react";
import ThemeLayout from "./containers/ThemeLayout/ThemeLayout";
import { Provider } from "react-redux";

import { store } from "./redux/store/store";
import Layout from "./containers/Layout";

import abi from "./utils/SolidityTodoApp.json";
import { ethers } from "ethers";

function App() {
  const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS || "";
  const contractABI = abi.abi;
  const [currentAccount, setCurrentAccount] = useState("");

  
  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log("Make sure you have metamask!");
        return;
      } else {
        console.log("We have the ethereum object", ethereum);
      }

      /*
       * Check if we're authorized to access the user's wallet
       */
      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Found an authorized account:", account);
        setCurrentAccount(account);
        // getTodos();
      } else {
        console.log("No authorized account found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
    connectWallet();
    // getWaves()
  }, []);

  return (
    <Provider store={store}>
      <ThemeLayout>
        <Layout account={currentAccount}></Layout>
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
  color: "#101E52",
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
