import "./App.css";
import Footer from "./components/footer";
import Homepage from "./containers/homepage";
import MoreAboutSection from "./containers/moreAbout/moreAboutSection";
import ReviewSection from "./containers/review/reviewSection";
import ServicesSection from "./containers/services/servicesSection";

function App() {
  return (
    <>
      <Homepage />
      <ServicesSection />
      <ReviewSection />
      <MoreAboutSection />
      <Footer />
    </>
  );
}

export default App;
