import { ethers } from "ethers";
import React, { useState } from "react";
import styled from "styled-components";
import SectionTitle from "../Common/SectionTitle";

import abi from "../../utils/SolidityTodoApp.json";

const AddCategory = () => {
  const [categoryValue, setCategoryValue] = useState("");
  const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS || "";
  const contractABI = abi.abi;
  const { ethereum } = window;
  
  const addCategory = async () => {
    console.log("called");
    if (categoryValue === "") return;
    try {
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();console.log(signer, contractAddress, "signer")
        const todoContract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );

        const category = await todoContract.addCategory(categoryValue);
        await category.wait();
          console.log(category);
        return category;
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <AddCategoryLayout>
      <SectionTitle>Add Category</SectionTitle>
      <FormLayout>
        <TaskInput
          value={categoryValue}
          onChange={(e) => setCategoryValue(e.target.value)}
          placeholder="Enter category"
        />
        <Button onClick={addCategory}>Save</Button>
      </FormLayout>
    </AddCategoryLayout>
  );
};

export default AddCategory;

const AddCategoryLayout = styled.div(({ theme }) => ({
  flexGrowl: 1,
  marginTop: theme.customSpacing.rem(3),
  paddingLeft: theme.customSpacing.rem(3),
  // flexGrow: 1,
}));

const FormLayout = styled.div(({ theme }) => ({
  // width: "100%",
  flexGrow: 1,
  display: "flex",
  flexWrap: "wrap",
  //   flexDirection: "column",
  paddingRight: theme.customSpacing.rem(1),
  justifyContent: "space-between",
  //   border: "1px solid red",
}));

const TaskInput = styled.input(({ theme }) => ({
  width: "100%",
  flexGrow: 1,
  height: theme.customSpacing.rem(4),
  border: "1px solid #FFF",
  borderRadius: theme.customSpacing.rem(2),
  padding: theme.customSpacing.rem(1),
  fontSize: theme.customSpacing.rem(1.8),
  color: "#6A7699",
}));

const TaskCategoryInput = styled.select(({ theme }) => ({
  width: "100%",
  height: theme.customSpacing.rem(4.5),
  border: "1px solid #FFF",
  borderRadius: theme.customSpacing.rem(1),
  padding: theme.customSpacing.rem(1),
  paddingRight: theme.customSpacing.rem(2),
  fontSize: theme.customSpacing.rem(1.8),
  color: "#6A7699",
  marginTop: theme.customSpacing.rem(1),
}));

const SelectOption = styled.option(({ theme }) => ({
  height: theme.customSpacing.rem(4.5),
  padding: theme.customSpacing.rem(2),
  marginTop: theme.customSpacing.rem(1),
  color: "#6A7699",
}));

const Button = styled.button(({ theme }) => ({
  width: "48%",
  height: theme.customSpacing.rem(4.5),
  padding: theme.customSpacing.rem(1),
  marginTop: theme.customSpacing.rem(1),
  marginLeft: "auto",
  marginRight: "auto",
  border: "0px solid white",
  borderRadius: theme.customSpacing.rem(1),
  color: "#6A7699",
}));
