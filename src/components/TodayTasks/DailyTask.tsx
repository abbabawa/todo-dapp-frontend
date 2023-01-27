import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import styled from "styled-components";

let taskStatus = false;
let taskColor = "";

const DailyTask = ({ title, color, status }: any) => {
  taskStatus = status;
  taskColor = color;
  return (
    <CategoryCardLayout>
      {status ? <BsCheckCircleFill color="#CFD1F0" /> : <StatusIndicator />}
      <Task>{title}</Task>
    </CategoryCardLayout>
  );
};

export default DailyTask;

const CategoryCardLayout = styled.div(({ theme }) => ({
  width: "100%",
  marginTop: theme.customSpacing.rem(1),
  display: "flex",
  alignItems: "center",
  backgroundColor: "#FFF",
  boxShadow: "2px 2px 5px 3px #F0F1F5",
  borderRadius: theme.customSpacing.rem(1.2),
  padding: theme.customSpacing.rem(1.5),
}));

const StatusIndicator = styled.div(({ theme }) => ({
  width: theme.customSpacing.rem(1.5),
  height: theme.customSpacing.rem(1.5),
  border: `3px solid ${taskColor}`,
  borderRadius: "50%",
}));

const Task = styled.span(({ theme }) => ({
  marginLeft: theme.customSpacing.rem(1),
  color: "#787881",
  fontWeight: 600,
  textDecoration: "line-through",
  textDecorationColor: "#787881",
}));
