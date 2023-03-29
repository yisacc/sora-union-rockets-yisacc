const light = {
    bg: {
      primary: "#EEEEEE",
      secondary: "#F4F4F4",
      inset: "#374359",
    },
    text: {
      primary: "#03a4ed",
      secondary: "#fe3f40",
      highlight: "#0C679F",
      auxiliary: "rgba(78, 97, 114, 0.8);",
      error: "#BD1414",
    },
  };
  
  const defaultTheme = {
    shadow: {
      general: "0px 4px 4px rgba(0, 0, 0, 0.25);",
    },
  };
  
  export const lightTheme = { ...defaultTheme, ...light };