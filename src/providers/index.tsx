import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "@/styles/theme";

const Providers = ({ children }:{children:any}) => {

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const body = <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>;

  if (!mounted) {
    return <div style={{ visibility: "hidden" }}>{body}</div>;
  }

  return body;
};

export default Providers;