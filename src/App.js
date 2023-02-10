import { Box } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import StartUps from "./components/StartUps";
import Home from "./components/Home";
import Partners from "./components/Partners";
import Investors from "./components/Investors";
import Blog from "./components/Blog";
import About from "./components/About";
import InvestorLogin from "./components/InvestorLogin";
import StartupLogin from "./components/StartupLogin";
import StartupDetails from "./components/StartupDetails";
import StartUpSuccess from "./components/StartUpSuccess";

function App() {
  return (
    <Box>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/start-ups" element={<StartUps />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/investors" element={<Investors />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/investorlogin" element={<InvestorLogin />} />
          <Route path="/startuplogin" element={<StartupLogin />} />
          <Route path="/startupdetails" element={<StartupDetails />} />
          <Route path="/startupsucess" element={<StartUpSuccess />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
