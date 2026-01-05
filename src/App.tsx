import './App.css'

import { Toaster } from "sonner";
import AppRouter from "./routes/AppRouter.tsx";

function App() {

  return (
    <>
      <Toaster richColors position="top-center" />
      <AppRouter />
    </>
  )
}

export default App
