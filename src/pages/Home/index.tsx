import Icon from "../../components/Icon";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
`;

function Home() {
  return (
    <Container>
      <Icon/>
    </Container>
  );
}

export default Home;