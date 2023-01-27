import React from "react";
import styled from "styled-components";
import CategoryCard from "./CategoryCard";

const categoryList = [
  {
    id: 1,
    title: "Business",
    totalTasks: 40,
    completed: 30
  },
  {
    id: 2,
    title: "Personal",
    totalTasks: 20,
    completed: 6
  },
  {
    id: 3,
    title: "Well Being",
    totalTasks: 10,
    completed: 3
  },
  {
    id: 4,
    title: "Chores",
    totalTasks: 15,
    completed: 5
  },
]

const Categories = () => {
  return (
    <CategoryLayout>
      <CategoryTitle>Categories</CategoryTitle>
      <CategoryCardsLayout>
        {categoryList.map(cat=><CategoryCard title={cat.title} totalTasks={cat.totalTasks} completed={cat.completed} />)}
        
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

const CategoryTitle = styled.h3(({ theme }) => ({
  color: "#6A7699",
}));
