import React from 'react'
import styled from 'styled-components'

let val = '30%';
let indicatorColor = "#FF5DFF"
const ProgressBar = ({width, color}:any) => {
    val = width
    indicatorColor = color
  return (
    <ProgressBarWrapper>
        <ProgressIndicator />
    </ProgressBarWrapper>
  )
}

export default ProgressBar

const ProgressBarWrapper = styled.div(({ theme }) => ({
    width: '100%',
    backgroundColor: "#F3F0F8",
    // border: '1px solid #FF5DFF',
}))

const ProgressIndicator = styled.div(({ theme }) => ({
    width: val ? val : '50%',
    border: `1px solid ${indicatorColor}`
}))
