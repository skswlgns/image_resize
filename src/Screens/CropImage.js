import { Title, Container, Content } from "../Components/common";
import styled from "styled-components";

function CropImage() {
  return (
    <Container>
      <Title>Crop Image</Title>
      <Content>
        <div>Image Drop</div>
        <div>Or</div>
      </Content>
    </Container>
  );
}

export default CropImage;
