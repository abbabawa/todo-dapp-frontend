import React from "react";
import styled from "styled-components";
import SectionTitle from "../Common/SectionTitle";
import CategoryCard from "./CategoryCard";

const categoryList = [
  {
    id: 1,
    title: "Business",
    totalTasks: 40,
    completed: 30,
    color: "#FF5DFF"
  },
  {
    id: 2,
    title: "Personal",
    totalTasks: 20,
    completed: 6,
    color: "#86C0FF"
  },
  {
    id: 3,
    title: "Well Being",
    totalTasks: 10,
    completed: 3,
    color: "#6277AC"
  },
  {
    id: 4,
    title: "Chores",
    totalTasks: 15,
    completed: 5,
    color: "#1269FB"
  },
]

const Categories = () => {
  return (
    <CategoryLayout>
      <SectionTitle>Categories</SectionTitle>
      <CategoryCardsLayout>
        {categoryList.map(cat=><CategoryCard key={cat.id} title={cat.title} totalTasks={cat.totalTasks} completed={cat.completed} color={cat.color} />)}
        
      </CategoryCardsLayout>
    </CategoryLayout>
  );
};

export default Categories;

const CategoryLayout = styled.div(({ theme }) => ({
  // width: "100%",
  flexGrow: 1,
  // padding: "10px",
  // display: "flex",
  // border: "1px solid yellow",
}));

const CategoryCardsLayout = styled.div(({ theme }) => ({
  // width: "100%",
  flexGrow: 1,
  display: "flex",
  paddingRight: theme.customSpacing.rem(1),
  justifyContent: "space-between",
  // border: "1px solid red"
}));