import { useCallback, useState } from "react";
import styled from "styled-components";
import Menu from "./Menu";

const SideMenuWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  padding: 20px 0 20px 32px;
  display: flex;
  gap: 28px;
  font-family: "Neue Montreal";
  justify-content: center;
  align-items: center;
  background-color: black;
  border-radius: 100px 0 0 100px;
  z-index: 10;

  span:nth-child(1) {
    font-size: 56px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: uppercase;
  }

  span:nth-child(2) {
    font-size: 40px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    color: white;
    padding-right: 28px;
  }
`;

const MenuOverlay = styled.div`
  z-index: 11;
  width: 100svw;
  height: 100vh;
  position: absolute;
  right: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: end;
`;

const SideMenu: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClose = useCallback(() => {
    setShowMenu(false);
  }, []);
  return (
    <>
      <SideMenuWrapper onClick={() => setShowMenu(true)}>
        <span>👋</span>
        <span>Hi I’m Ayush</span>
      </SideMenuWrapper>
      {showMenu ? (
        <MenuOverlay>
          <Menu handleClose={handleClose} />
        </MenuOverlay>
      ) : null}
    </>
  );
};

export default SideMenu;
