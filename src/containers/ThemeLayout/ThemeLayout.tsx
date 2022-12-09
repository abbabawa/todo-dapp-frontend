import React from 'react'

import { lightMode, darkMode } from "./theme";
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../redux/reducers/theme/theme';

const ThemeLayout = ({children}: any)=>{
    const { theme } = useSelector(selectTheme);
    return (
        <ThemeProvider theme={theme === 'light' ? lightMode : darkMode}>
            {children}
        </ThemeProvider>
    )
}

export default ThemeLayout