import Header from "./shared/components/header/Header";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/homepage";
import Footer from "./shared/components/footer/Footer";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;