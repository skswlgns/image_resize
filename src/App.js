import { GlobalStyles } from "./styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import ResizeImage from "./Screens/ResizeImage";
import CropImage from "./Screens/CropImage";
import ConvertImage from "./Screens/ConvertImage";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: #303133;
`;

const Navbar = styled.nav`
  width: 12.5%;
  height: 100%;
  background-color: #303133;
  border-right: #9b9ea3 1px solid;
`;

const NavItem = styled.button`
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 20px 0px 2px 10px;
  cursor: pointer;
  border: none;
  background: none;
  outline: none;
`;

const MainText = styled.div`
  margin: auto;
  color: white;
  font-size: 2rem;
`;

const App = () => {
  const [activeComponent, setActiveComponent] = useState("");

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "resize":
        return <ResizeImage />;
      case "crop":
        return <CropImage />;
      case "convert":
        return <ConvertImage />;
      default:
        return (
          <MainText>왼쪽 항목에서 이미지 처리 방식을 선택해주세요.</MainText>
        );
    }
  };

  return (
    <Router>
      <GlobalStyles />
      <Container>
        <Navbar>
          <NavItem onClick={() => setActiveComponent("resize")}>
            Resize Image
          </NavItem>
          <NavItem onClick={() => setActiveComponent("crop")}>
            Crop Image
          </NavItem>
          <NavItem onClick={() => setActiveComponent("convert")}>
            Convert Extension
          </NavItem>
        </Navbar>
        {renderActiveComponent()}
      </Container>
      <Routes>
        <Route path="/" element={<MainText />} />
      </Routes>
    </Router>
  );
};

export default App;
