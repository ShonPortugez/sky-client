import './App.css'
import { Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage.tsx";
import SignInPage from "./pages/SignInPage.tsx";
import SignUpPage from "./pages/SignUpPage.tsx";

function App() {

  return (
      <Routes>
          <Route path={'/'} element={<HomePage />} />
          <Route path={'sign-in'} element={<SignInPage />} />
          <Route path={'sign-up'} element={<SignUpPage />} />
      </Routes>
  )
}

export default App
