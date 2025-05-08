import React, { useState, useMemo, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import { ColorModeContext } from "./components/theme"; // Importa il contesto per il cambio di modalità

import { Navbar } from "./components/Navbar";
import { Container } from "./components/Container";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Footer } from "./components/Footer";

// Import delle tue pagine
import { Home } from "./pages/Home";
import { ApisPage } from "./pages/ApisPage";
import { TailwindPage } from "./pages/TailwindPage";
import { LoginPage } from "./pages/LoginPage";
import { AllUsers } from "./pages/AllUsers";
import { Dashboard } from "./pages/Dashboard";
import { SignUp } from "./pages/SignUp";
import { DashboardPage1 } from "./pages/DashboardPage1";
import { Team } from "./scenes/team/index";
import { Contacts } from "./scenes/contacts/index";
import Form from "./components/form";
import Calendar from "./components/calendar/calendar";
import Faq from "./components/faq";
import Barchart from "./components/bar";
import Piechart from "./components/pie";
import Linechart from "./components/line";
import Geography from "./components/geography";

function App() {
  // Gestione dello stato per il tema
  const [mode, setMode] = useState(localStorage.getItem("theme") || "light");

  // Contesto per il cambio di modalità (light/dark)
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        const newMode = mode === "light" ? "dark" : "light";
        setMode(newMode);
        localStorage.setItem("theme", newMode); // Memorizza il tema scelto
      },
    }),
    [mode]
  );

  // Creazione del tema con MUI
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  // Imposta l'attributo data-theme per il body
  useEffect(() => {
    document.body.setAttribute("data-theme", mode);
  }, [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline /> {/* Resetta il CSS globale per applicare il tema */}
        <Router>
          <Container>
            <Navbar />
            <div className="space"></div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Api" element={<ApisPage />} />
              <Route path="/Tailwind" element={<TailwindPage />} />
              <Route path="/Login" element={<LoginPage />} />
              <Route path="/SignUp" element={<SignUp />} />
              <Route path="/DashBoard" element={<Dashboard />} />
              <Route path="/AllUsers" element={<AllUsers />} />
              <Route path="/DashboardPage1" element={<DashboardPage1 />} />
              <Route path="/Team" element={<Team />} />
              <Route path="/Contact" element={<Contacts />} />
              <Route path="/Form" element={<Form />} />
              <Route path="/Calendar" element={<Calendar />} />
              <Route path="/Faq" element={<Faq />} />
              <Route path="/Barchart" element={<Barchart />} />
              <Route path="/Piechart" element={<Piechart />} />
              <Route path="/Linechart" element={<Linechart />} />
              <Route path="/Geography" element={<Geography />} />
            </Routes>
            <div className="space"></div>
            <div className="last-part-footer">
              <Footer className="footer" />
            </div>
          </Container>
        </Router>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
