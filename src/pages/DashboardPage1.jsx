import React from "react";
import { Button } from "@mui/material";
import { ColorModeContext, useMode } from "../components/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Topbar } from "../components/Topbar";
import Sidebar from "../components/Sidebar";

export const DashboardPage1 = () => {
  const [theme, colorMode] = useMode();

  return (
    <>
      <Sidebar></Sidebar>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="space">
            <main className="content">
              <Topbar />
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
};
