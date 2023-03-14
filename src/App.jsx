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
import DeployCollection from "./pages/DeployContract/deployContract";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Connect></Connect>} />
        <Route path="/Dashboard" element={<Dashboard></Dashboard>} />
        <Route path="/deployContract" element={<DeployCollection></DeployCollection>} />
        <Route path="/MintPage" element={<h1>MintPage</h1>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
