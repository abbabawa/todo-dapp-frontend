import React from 'react'
import styled from 'styled-components';

const SectionTitle = ({children}:any) => {
  return (
    <SectionTitleWrapper>{children}</SectionTitleWrapper>
  )
}

export default SectionTitle

const SectionTitleWrapper = styled.h3(({ theme }) => ({
    color: "#6A7699",
  }));
  