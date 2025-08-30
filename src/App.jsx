import Header from "./components/Header/Header.jsx";
import Hero from "./layouts/SectionHero/SectionHero.jsx";
import Background from "./components/Background/Background.jsx";
import Main from "./components/MainWrapper/MainWrapper.jsx";
import "./styles/index.scss";
import SocialProof from "./layouts/SectionSocialProof/SectionSocialProof.jsx";
import Features from "./layouts/SectionFeatures/SectionFeatures.jsx";
import Features2 from "./layouts/SectionFeatures2/SectionFeatures2.jsx";
import Features3 from "./layouts/SectionFeatures3/SectionFeatures3.jsx";
import Contact from "./layouts/SectionContact/SectionContact.jsx";
import Newsletter from "./layouts/SectionNewsletter/SectionNewsletter.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Pricing from "./layouts/SectionPricing/SectionPricing.jsx";
import SectionFAQ from "./layouts/SectionFAQ/SectionFAQ.jsx";

function App() {
  return (
    <>
      <Background>
        <Header />
        <Main>
          <Hero />
          <SocialProof />
          <Features />
          <Features2 />
          <Features3 />
          <Pricing />
          <SectionFAQ />
          <Newsletter />
          <Contact />
          <Footer />
        </Main>
      </Background>
    </>
  );
}

export default App;
