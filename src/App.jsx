import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import HeritageLanding from "./pages/HeritageLanding.jsx";
import Chatbot from "./pages/Chatbot.jsx";
import StatesPage from "./components/States.jsx";
import StateDetail from "./components/StateDetails.jsx";
// import MusicPage from "./pages/MusicPage.jsx";

// ✅ Wrapper component banaya jisme conditional Header/Footer hain
function AppLayout() {
  const location = useLocation();

  // Agar chatbot page hai to header/footer hide ho jayega
  const hideLayout = location.pathname === "/chatbot";

  return (
    <>
      {!hideLayout && <Header />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/explore" element={<HeritageLanding />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/states" element={<StatesPage />} />
        <Route path="/states/:stateName" element={<StateDetail />} />
        {/* <Route path="/music" element={<MusicPage />} />
        <Route path="/cuisine" element={<CuisinePage />} />
        <Route path="/festival" element={<FestivalPage />} />
        <Route path="/attire" element={<AttirePage />} />
        <Route path="/dance" element={<DancePage />} /> */}
      </Routes>
      {!hideLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router basename="/sih-frontend">
      <AppLayout />
    </Router>
  );
}

export default App;
