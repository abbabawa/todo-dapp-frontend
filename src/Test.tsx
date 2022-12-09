import React, { useState, useEffect } from "react";
import { ethers } from "ethers";

declare let window: any;

const Test = () => {
  const [balance, setBalance] = useState<string | undefined>();
  const [currentAccount, setCurrentAccount] = useState<string | undefined>();
  const [chainId, setChainId] = useState<number | undefined>();
  const [chainname, setChainName] = useState<string | undefined>();

  useEffect(() => {
    if (!currentAccount || !ethers.utils.isAddress(currentAccount)) return;
    //client side code
    if (!window.ethereum) return;
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    provider.getBalance(currentAccount).then((result) => {
      setBalance(ethers.utils.formatEther(result));
    });
    provider.getNetwork().then((result) => {
      setChainId(result.chainId);
      setChainName(result.name);
    });
    provider.getBlockNumber().then((result) => {console.log(result)})
  }, [currentAccount]);

  const onClickConnect = () => {
    //client side code
    if (!window.ethereum) {
      console.log("please install MetaMask");
      return;
    }
    /*
    //change from window.ethereum.enable() which is deprecated
    //see docs: https://docs.metamask.io/guide/ethereum-provider.html#legacy-methods
    window.ethereum.request({ method: 'eth_requestAccounts' })
    .then((accounts:any)=>{
      if(accounts.length>0) setCurrentAccount(accounts[0])
    })
    .catch('error',console.error)
    */

    //we can do it using ethers.js
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    // MetaMask requires requesting permission to connect users accounts
    provider
      .send("eth_requestAccounts", [])
      .then((accounts) => {
        if (accounts.length > 0) setCurrentAccount(accounts[0]);
      })
      .catch((e) => console.log(e));
  };

  const onClickDisconnect = () => {
    console.log("onClickDisConnect");
    setBalance(undefined);
    setCurrentAccount(undefined);
  };

  return (
    <>
      <div>
        <title>My DAPP</title>
      </div>

      <h3>Explore Web3</h3>
      <div>
        <div style={{ width: "100%", marginTop: "4px", marginBottom: "4px" }}>
          {currentAccount ? (
            <button type="button" style={{ width: "100%" }} onClick={onClickDisconnect}>
              Account:{currentAccount}
            </button>
          ) : (
            <button type="button" style={{ width: "100%" }} onClick={onClickConnect}>
              Connect MetaMask
            </button>
          )}
        </div>
        {currentAccount ? (
          <div style={{ width: "100%", padding: "4px", marginBottom: "0", borderWidth: "1px", borderRadius:"20%" }} >
            <h3 style={{ marginTop: "4px", marginBottom: "4px" }}>
              Account info
            </h3>
            <p>ETH Balance of current account: {balance}</p>
            <p>
              Chain Info: ChainId {chainId} name {chainname}
            </p>
          </div>
        ) : (
          <></>
        )}
        ...
      </div>
    </>
  );
};

export default Test;
