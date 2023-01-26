const customSpacings = (factor: number[], unit: string) => {
    return factor.reduce((sum, cur) => {
      const multiplier = unit === "px" ? 10 : 0.625;
      const increment = `${multiplier * cur}${unit}`;
      return sum ? `${sum} ${increment}` : increment;
    }, "");
  };
  
  const customSpacing = {
    px: (...args: number[]) => customSpacings(args, "px"),
    rem: (...args: number[]) => customSpacings(args, "rem"), //Divide px by 10 before passing to function
  };
  
  export const lightMode = {
    sideBar: {
      backgroundColor: "#FFF",
      color: "#435A64",
      activeItem: {
        backgroundColor: "#F0F9FD",
        color: "#042331",
      },
    },
    primary: "#FFF",
    secondary: "#435A64",
    pageDividers: "#F2F4F5",
    noDeviceBorder: "#E6E9EA",
    text: {
      primary: "#042331",
      secondary: "#435A64",
      neutral: "#8E9CA2",
      extra: "#75868E", //Alerts time on dashboard
      searchPlaceholder: "#A7B2B7",
    },
    customSpacing,
    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.08)",
  };
  
  export const darkMode = {
    sideBar: {
      backgroundColor: "#101E52",
      color: "#5C7079",
      activeItem: {
        backgroundColor: "#FFF",
        color: "#5C7079",
      },
    },
    primary: "#021117",
    secondary: "#5C7079",
    pageDividers: "#021A24",
    text: {
      primary: "#FFF",
      secondary: "#5C7079",
      neutral: "#8EADB4",
      extra: "#435A64",
    },
    boxShadow: "0px 10px 30px rgba(255, 255, 255, 0.05)",
    customSpacing,
  };
  