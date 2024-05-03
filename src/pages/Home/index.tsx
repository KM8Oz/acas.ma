import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/HistorySlides.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import styled from "styled-components";
import MiddleBlockWithSlide from "../../components/MiddleBlockWithSlide";

const Contact = lazy(() => import("../../components/ContactForm"));
// const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const HeroSection = lazy(() => import("../../components/Section/HeroSection"));

const Home = () => {
  return (
    <Background>
      <HeroSection />
      <Container>
        <ScrollToTop />
        <MiddleBlockWithSlide
          id="heritage"
          title={MiddleBlockContent.title}
          content={MiddleBlockContent.description}
          // button={MiddleBlockContent.button}
          slides={MiddleBlockContent.slides} button={""}        />
        <ContentBlock
          direction="right"
          title={IntroContent.title}
          content={IntroContent.text}
          button={IntroContent.button}
          icon="developer.svg"
          id="intro"
        />
        <ContentBlock
          direction="left"
          title={AboutContent.title}
          content={AboutContent.text}
          section={AboutContent.section}
          icon="graphs.svg"
          id="about"
        />
        <ContentBlock
          direction="right"
          title={MissionContent.title}
          content={MissionContent.text}
          icon="product-launch.svg"
          id="mission"
        />
        <ContentBlock
          direction="left"
          title={ProductContent.title}
          content={ProductContent.text}
          icon="waving.svg"
          id="product"
        />
        <Contact
          title={ContactContent.title}
          content={ContactContent.text}
          id="contact"
        />
      </Container>
    </Background>
  );
};

const Background = styled.div`
    position: relative;
    max-width: 100vw;
    &:before{
        content: "";
        position: absolute;
        top:0px;
        left:0px;
        width: 100%;
        height: 100%;
        z-index: -1;
        opacity: 0.1;
        background-image: url("/img/jpg/background.jpeg");
        background-repeat: repeat-y;
        background-position: center;
        background-size: contain;  
    }
`
export default Home;
