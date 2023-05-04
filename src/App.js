import Header from "./shared/components/header/Header";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/homepage";
import Footer from "./shared/components/footer/Footer";
import BuildersPage from "./pages/builders";
import AuthContainer from "./context/auth/AuthContainer";
import Auth from "./pages/auth/Auth";
import useBackToTop from "./shared/hooks/useBackToTop";
import { useEffect } from "react";

const BackToTop = () => {
  const location = useLocation();
  const backToTop = useBackToTop();
  useEffect(() => {
    backToTop();
  }, [backToTop, location]);
  return null;
};

function App() {
  return (
    <BrowserRouter>
      <AuthContainer>
        <Header />
        <BackToTop />
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
