const light = {
    bg: {
      primary: "#EEEEEE",
      secondary: "#F4F4F4",
      inset: "#374359",
    },
    text: {
      primary: "#212426",
      secondary: "#4E6172",
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