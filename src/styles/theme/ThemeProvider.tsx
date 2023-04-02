import * as React from 'react';
import { ThemeProvider as OriginalThemeProvider } from 'styled-components';
import { lightTheme } from "@/styles/theme/theme";

export const ThemeProvider = (props: { children: React.ReactChild }) => {
    return (
        <OriginalThemeProvider theme={lightTheme}>
          {React.Children.only(props.children)}
        </OriginalThemeProvider>
      );
};
