import Main from "./pages/Main";
import "./App.css";
import RegistrationPage from "./pages/RegistrationPage";
import SuccessPage from "./pages/SuccessPage";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="font-manrope  max-w-[1400px] m-auto overflow-hidden">
      <Routes>
        <Route path="/" element={<Main />} />

        <Route path="/register" element={<RegistrationPage />} />

        <Route path="/success" element={<SuccessPage />} />
      </Routes>
   


    </div>
  );
}

export default App;
