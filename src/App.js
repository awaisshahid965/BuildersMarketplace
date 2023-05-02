import Header from "./shared/components/header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
import Footer from "./shared/components/footer/Footer";
import BuildersPage from "./pages/builders";
import AuthContainer from "./context/auth/AuthContainer";
import Auth from "./pages/auth/Auth";

function App() {
  return (
    <BrowserRouter>
      <AuthContainer>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/builders" element={<BuildersPage />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
        <Footer />
      </AuthContainer>
    </BrowserRouter>
  );
}

export default App;
