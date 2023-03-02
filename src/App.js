import { Box } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Blog from "./components/Blog";
import About from "./components/About";
import InvestorLogin from "./components/investors/InvestorLogin";
import StartupLogin from "./components/startups/StartupLogin";
import StartupDetails from "./components/startups/StartupDetails";
import StartUpSuccess from "./components/startups/StartUpSuccess";
import ProductsPage from "./components/ProductsPage";
import Dashboard from "./components/Dashboard";
import UploadDocuments from "./components/UploadDocuments";
import FinancialDetails from "./components/FinancialDetails";
import ContactUs from "./components/ContactUs";
import InvestorBankSuccess from "./components/investors/InvestorBankSuccess";
import InvestBankDetails from "./components/investors/InvestBankDetails";
import ListedCompanies from "./components/investors/ListedCompanies";
import IBDashboard from "./components/investors/IBDashboard";
import PartnerDashboard from "./components/partners/PartnerDashboard";
import PartnerSuccess from "./components/partners/PartnerSuccess";
import CompanyDetails from "./components/partners/CompanyDetails";
import PartnerDeals from "./components/partners/PartnerDeals";
import InvestorSignup from './components/investors/InvestorSignup';
import StartupSignup from './components/startups/StartupSignup';
import Details from './components/partners/Details';
import PartnerLogin from './components/partners/PartnerLogin';
import PartnerSignup from './components/partners/PartnerSignup';
import DealSubmitted from "./components/partners/DealSubmitted";
import StartUpUploadDocument from "./components/startups/StartUpUploadDocument";
import DetailsOverview from "./components/partners/DetailsOverview";
import Page1 from "./components/startup-details-page/Page1";
import Page2 from "./components/startup-details-page/Page2";
import Page3 from "./components/startup-details-page/Page3";


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
          <Route path='/investor-signup' element={<InvestorSignup />} />
          <Route path='/startup-signup' element={<StartupSignup />} />
          <Route path='/details' element={<Details />} />
          <Route path='/partner-login' element={<PartnerLogin />} />
          <Route path='/partner-signup' element={<PartnerSignup />} />
          <Route path='/dealsubmitted' element={<DealSubmitted />} />
          <Route path='/startup-upload-document' element={<StartUpUploadDocument />} />
          <Route path='/details-overview' element={<DetailsOverview />} />
          <Route path='/startup-details-page1' element={<Page1 />} />
          <Route path='/startup-details-page2' element={<Page2 />} />
          <Route path='/startup-details-page3' element={<Page3 />} />

        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
