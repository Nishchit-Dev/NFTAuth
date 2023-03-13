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
import Verify from "./pages/verify/verify";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Connect></Connect>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/Signup" element={<Signup></Signup>} />
        <Route path="/Dashboard" element={<Dashboard></Dashboard>} />
        <Route path="/DeployContract" element={<h1>DeplyContract</h1>} />
        <Route path="/MintPage" element={<h1>MintPage</h1>} />
        <Route path="/verify" element={<Verify>
          
        </Verify>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
