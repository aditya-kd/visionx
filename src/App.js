import { Box } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Blog from "./components/Blog";
import About from "./components/About";
import InvestorLogin from "./components/InvestorLogin";
import StartupLogin from "./components/StartupLogin";
import StartupDetails from "./components/StartupDetails";
import StartUpSuccess from "./components/StartUpSuccess";
import ProductsPage from "./components/ProductsPage";
import Dashboard from "./components/Dashboard";
import UploadDocuments from "./components/UploadDocuments";
import FinancialDetails from "./components/FinancialDetails";

function App() {
  return (
    <Box>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/start-ups" element={<StartupLogin />} />
          <Route path="/partners" element={<ProductsPage />} />
          <Route path="/investors" element={<InvestorLogin />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/startupdetails" element={<StartupDetails />} />
          <Route path="/startupsucess" element={<StartUpSuccess />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/upload-documents" element={<UploadDocuments />} />
          <Route path="/financialdetails" element={<FinancialDetails />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
