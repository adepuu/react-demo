import { Link } from "react-router-dom";
import styled from "styled-components";

const StaticHeader = styled.header`
  font-family: "Neue Montreal";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999999999;
  color: black;
`;

const MainNav = styled.nav`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  padding: 24px 0;

  div:nth-child(1) {
    padding-left: 80px;
  }

  div:nth-child(2) {
    padding-right: 80px;
  }
`;

const NavigationListWrapper = styled.ul`
  display: flex;
  gap: 40px;
  margin: 0;
  padding: 0;

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: black;
  }
`;

const Navbar: React.FC = () => {
  return (
    <StaticHeader>
      <MainNav>
        <div>@Ayush Barnwal</div>
        <div>
          <NavigationListWrapper>
            <Link to="#about">About</Link>
            <Link to="#work">Work</Link>
            <Link to="/contact">Contact</Link>
          </NavigationListWrapper>
        </div>
      </MainNav>
    </StaticHeader>
  );
};

export default Navbar;
