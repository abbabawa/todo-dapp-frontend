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
    components: {
      navbar: {
        height: customSpacing.rem(6.4),
      },
      sidebar: {
        openWidth: customSpacing.rem(22.4),
        closeWidth: customSpacing.rem(5),
      },
    },
    itemHoveredStyles: {
      background: "#FFFFFF",
      border: "1px solid #E6E9EA",
      boxSizing: "border-box",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.04)",
      borderRadius: "10px",
    },
    sideBar: {
      backgroundColor: "#FFF",
      color: "#435A64",
      activeItem: {
        backgroundColor: "#F0F9FD",
        color: "#042331",
      },
    },
    newDeviceLayout: {
      selectedTextStyle: "#042331"
    },
    primary: "#FFF",
    secondary: "#435A64",
    pageDividers: "#F2F4F5",
    noDevice: "#F8F9FA",
    noDeviceBorder: "#E6E9EA",
    textInputBorder: "#CBCFD7",
    textInput: { border: "#CBCFD7", backgroundColor: "#FFF", color: "#506279" },
    text: {
      primary: "#042331",
      secondary: "#435A64",
      neutral: "#8E9CA2",
      extra: "#75868E", //Alerts time on dashboard
      searchPlaceholder: "#A7B2B7",
    },
    dropdown: {
      color: "#5C7079",
      backgroundColor: "#FFF",
      borderColor: "#CBCFD7", 
      hovered: "#F0F9FD",
      hoveredText: "#042331",
      dashboardBorderColor: "#E6E9EA",
      iconColor: "#8E9CA2",
      hover: "#f0f9fd"
    },
    radiobutton: {
      borderColor: "#CBCFD7",
      backgroundColor: "#FFF",
      selected: "#C5E8F7",
    },
    customSpacing,
    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.08)",
    reactDatepicker: {
      daySize: [36, 40],
      fontFamily: "Proxima Nova",
      colors: {
        accessibility: "#D80249",
        selectedDay: "#f7518b",
        selectedDayHover: "#F75D95",
        primaryColor: "red",
      },
      inputPlaceholderColor: "red",
    },
    notification: {
      backgroundColor: "#F9F9FA",
      titleBottomBorderColor: "#EDEFF0",
    },
    onBoarding: {
      backgroundColor: "#FFFFFF",
    }
  };
  
  export const darkMode = {
    components: {
      navbar: {
        height: customSpacing.rem(6.4),
      },
      sidebar: {
        openWidth: customSpacing.rem(22.4),
        closeWidth: customSpacing.rem(5),
      },
    },
    itemHoveredStyles: {
      background:"#021A24",
      border:  "1px solid #021A24",
      boxSizing: "border-box",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.04)",
      borderRadius: "10px",
    },
    newDeviceLayout: {
      selectedTextStyle: "#5C7079"
    },
    sideBar: {
      backgroundColor: "#021117",
      color: "#5C7079",
      activeItem: {
        backgroundColor: "#FFF",
        color: "#5C7079",
      },
    },
    primary: "#021117",
    secondary: "#5C7079",
    pageDividers: "#021A24",
    noDevice: "#021A24",
    noDeviceBorder: "#021A24",
    textInput: { border: "#021A24", backgroundColor: "#021A24", color: "#FFF" },
    text: {
      primary: "#FFF",
      secondary: "#5C7079",
      neutral: "#8EADB4",
      extra: "#435A64",
    },
    boxShadow: "0px 10px 30px rgba(255, 255, 255, 0.05)",
    dropdown: {
      color: "#5C7079",
      backgroundColor: "#021A24",
      borderColor: "#021A24",
      hovered: "#3EB3E5",
      hoveredText: "#FFFFFF",
      dashboardBorderColor: "#021A24",
      iconColor: "#435A64",
      hover: "#021A24"
    },
    radiobutton: {
      borderColor: "#021A24",
      backgroundColor: "#021A24",
      selected: "#000",
    },
    customSpacing,
    notification: {
      backgroundColor: "#021117",
      titleBottomBorderColor: "#021A24",
    },
    onBoarding: {
      backgroundColor: "#042331",
    }
  };
  