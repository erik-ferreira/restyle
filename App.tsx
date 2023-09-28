import { StatusBar } from "expo-status-bar"
import { ThemeProvider } from "@shopify/restyle"

import { Home } from "./src/pages/Home"

import { theme } from "./src/theme"

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
      <StatusBar style="auto" />
    </ThemeProvider>
  )
}
