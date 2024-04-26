import styled from "styled-components";
import closeBtn from "../../../../assets/menu-close-btn.png";

interface MenuPros {
  handleClose: () => void;
}

const MenuWrapper = styled.div`
  width: 50svw;
  max-height: 100vh;
  background-color: black;
  color: white;
  position: relative;
  padding: 80px;
  font-family: "Neue Montreal";
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const MenuCloseButton = styled.img`
  position: absolute;
  height: 80px;
  width: 80px;
  aspect-ratio: 1/1;
  top: 60px;
  right: 60px;
`;

const BigMenuList = styled.ul`
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 28px;
  margin: 0;
  padding: 0;
  li {
    list-style: none;
    font-size: 40px;
    font-style: normal;
    font-weight: 500;
    position: relative;
  }

  .active {
    list-style: outside;
  }

  a {
    text-decoration: none;
    color: white;
  }
`;

const OtherLinkList = styled.div`
  display: flex;
  gap: 32px;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
`;

const Menu: React.FC<MenuPros> = ({ handleClose }) => {
  return (
    <MenuWrapper>
      <MenuCloseButton onClick={handleClose} src={closeBtn} alt="close Btn" />
      <BigMenuList>
        <li className="active">Home</li>
        <li>About</li>
        <li>Work</li>
        <li>Contact</li>
      </BigMenuList>
      <OtherLinkList>
        <span>Linkedin</span>
        <span>Instagram</span>
        <span>Twitter</span>
        <span>Webflow</span>
      </OtherLinkList>
    </MenuWrapper>
  );
};

export default Menu;
