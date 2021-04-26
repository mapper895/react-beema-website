import "./App.css";
import Homepage from "./containers/homepage";
import ReviewSection from "./containers/review/reviewSection";
import ServicesSection from "./containers/services/servicesSection";

function App() {
  return (
    <>
      <Homepage />
      <ServicesSection />
      <ReviewSection />
    </>
  );
}

export default App;
