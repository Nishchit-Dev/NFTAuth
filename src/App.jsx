import {
  Center,
  MainContainer,
  Text,
  Block,
  Button,
} from "./components/styledComp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Nft-Dashboard/dashboard";
import Signup from "./pages/signup/signup";
import Login from "./pages/login/login";
import Connect from "./pages/connect";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Connect></Connect>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/Signup" element={<Signup></Signup>} />
        <Route path="/Dashboard" element={<Dashboard></Dashboard>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
