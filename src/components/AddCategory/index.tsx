import React from "react";
import styled from "styled-components";
import SectionTitle from "../Common/SectionTitle";

const AddCategory = () => {
  return (
    <AddCategoryLayout>
      <SectionTitle>Add Category</SectionTitle>
      <FormLayout>
        <TaskInput placeholder="Enter category" />
        <Button>Save</Button>
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
  marginLeft: 'auto',
  marginRight: 'auto',
  border: "0px solid white",
  borderRadius: theme.customSpacing.rem(1),
  color: "#6A7699",
}));
