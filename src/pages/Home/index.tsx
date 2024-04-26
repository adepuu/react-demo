import './style.css';
import About from './components/About';
import Work from './components/Work';
import styled from 'styled-components';
import Hero from './components/Hero';
import Testimonial from './components/Testimonial';

const HomeContainer = styled.div`
  position: relative;
`;

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <Hero />
      <About />
      <Work />
      {/* <PortolIst /> */}
      <Testimonial />
    </HomeContainer>
  )
};

export default Home;