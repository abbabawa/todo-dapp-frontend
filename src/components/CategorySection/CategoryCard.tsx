import React from 'react'
import styled from 'styled-components';
import ProgressBar from './ProgressBar';

const CategoryCard = ({totalTasks, completed, title }:any) => {
  return (
    <CategoryCardLayout>
        <NumOfTasks>{totalTasks} Tasks</NumOfTasks>
        <Title>{title}</Title>
        <ProgressBar width={((completed/totalTasks)*100)+"%"} />
    </CategoryCardLayout>
  )
}

export default CategoryCard


const CategoryCardLayout = styled.div(({ theme }) => ({
    width: theme.customSpacing.rem(21),
    height: theme.customSpacing.rem(8),
    // display: 'flex',
    // flexDirection: 'column',
    backgroundColor: "#FFF",
    boxShadow: "2px 2px 5px 3px #F0F1F5",
    borderRadius: theme.customSpacing.rem(1.2),
    padding: theme.customSpacing.rem(1.5),
  }));

const Title = styled.span(({theme})=>({
    color: "#51526D",
    fontSize: theme.customSpacing.rem(2.4),
    fontWeight: 'bold',
    display: 'block',
    marginBottom: theme.customSpacing.rem(1)
}))

const NumOfTasks = styled.span(({theme})=>({
    color: "#6A7699",
    display: 'block',
    fontWeight: 'bold',
    paddingTop: theme.customSpacing.rem(0.5),
}))