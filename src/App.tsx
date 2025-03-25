import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import BirthChartPage from '@/pages/BirthChartPage';
import HowItWorksPage from '@/pages/HowItWorksPage';
import PricingPage from '@/pages/PricingPage';
import LearnPage from '@/pages/LearnPage';
import FAQPage from '@/pages/FAQPage';
import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage';
import TermsOfUsePage from '@/pages/TermsOfUsePage';
import ReturnPolicyPage from '@/pages/ReturnPolicyPage';
import AccountDeletionPage from '@/pages/AccountDeletionPage';
import AstrologersNearbyPage from '@/pages/AstrologersNearbyPage';
import ComparisonPage from '@/pages/ComparisonPage';
import BestAISitesPage from '@/pages/BestAISitesPage';
import HowToAskPage from '@/pages/HowToAskPage';
import ResultPage from '@/pages/ResultPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/vedic-astrology-birth-chart" element={<BirthChartPage />} />
            <Route path="/learn/how-vedic-astrogpt-works" element={<HowItWorksPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/learn-vedic-astrology/:page" element={<LearnPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-of-use" element={<TermsOfUsePage />} />
            <Route path="/return-policy" element={<ReturnPolicyPage />} />
            <Route path="/request-account-deletion" element={<AccountDeletionPage />} />
            <Route path="/astrologers-nearby" element={<AstrologersNearbyPage />} />
            <Route path="/learn/kundli-gpt-vs-vedic-astrogpt" element={<ComparisonPage />} />
            <Route path="/learn/best-ai-astrology-websites" element={<BestAISitesPage />} />
            <Route path="/learn/how-to-ask-questions" element={<HowToAskPage />} />
            <Route path="/result" element={<ResultPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}