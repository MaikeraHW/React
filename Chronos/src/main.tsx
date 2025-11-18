import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { Home } from "./pages/home"
import { NotFound } from "./pages/NotFound"
import { About } from "./pages/About"

import "./theme.css"
import "./global.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Home />
  </StrictMode>
)
