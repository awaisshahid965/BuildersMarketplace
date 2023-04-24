import Header from "./shared/components/header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
import Footer from "./shared/components/footer/Footer";
import BuildersPage from "./pages/builders";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/builders" element={<BuildersPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
