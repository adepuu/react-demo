import styled from "styled-components";
import heroImageAsset from "../../../../assets/hero-img.png";
import SideMenu from "./SideMenu";

const HeroSection = styled.section`
  height: 100vh;
  width: 100svw;
  position: relative;
  background-color: #C7D0D9;
`;

const HeroImage = styled.img`
  position: absolute;
  height: 80%;
  object-fit: contain;
  object-position: bottom;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;

const Hero: React.FC = () => {
  return (
    <HeroSection>
      <HeroImage src={heroImageAsset} alt="Hero Image"/>
      <SideMenu />
    </HeroSection>
  );
};

export default Hero;
