import { CssBaseline, ThemeProvider } from "@mui/material";
import "./App.css"
import ToggleTheme from "./Components/ToggleTheme";
import { useRecoilState } from "recoil";
import toggleTheme from "./store/toggleThemeAtom";
import { useCustomTheme } from "./hooks/useCustomTheme";
import Story from "./Components/Story";
import Topbar from "./Components/Topbar";

export default function App() {

  const theme = useCustomTheme();
  // FIXME: Move this *
  const [mode, setMode] = useRecoilState(toggleTheme);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* FIXME: * and this in sidebar */}
        {/* <ToggleTheme mode={mode} setMode={setMode} /> */}
      </ThemeProvider>
    </>
  );
}
