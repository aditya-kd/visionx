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
import ContactUs from "./components/ContactUs";
import InvestorBankSuccess from "./components/InvestorBankSuccess";
import InvestBankDetails from "./components/InvestBankDetails";
import ListedCompanies from "./components/ListedCompanies";
import IBDashboard from "./components/IBDashboard";
import PartnerDashboard from "./components/partners/PartnerDashboard";
import PartnerSuccess from "./components/partners/PartnerSuccess";
import CompanyDetails from "./components/partners/CompanyDetails";
import PartnerDeals from "./components/partners/PartnerDeals";
import InvestorSignup from './components/InvestorSignup';
import StartupSignup from './components/StartupSignup';

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
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/investor-success" element={<InvestorBankSuccess />} />
          <Route path="/investor-details" element={<InvestBankDetails />} />
          <Route path="/listed-companies" element={<ListedCompanies />} />
          <Route path="/ib-dashboard" element={<IBDashboard />} />
          <Route path="/partner-dashboard" element={<PartnerDashboard />} />
          <Route path="/partner-success" element={<PartnerSuccess />} />
          <Route path="/company-details" element={<CompanyDetails />} />
          <Route path="/partner-deals" element={<PartnerDeals />} />
          <Route path='/investorsignup' element={<InvestorSignup/>} />
          <Route path='/startupsignup' element={<StartupSignup/>} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
