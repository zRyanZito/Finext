import styled from "styled-components";
import Graph from "./graph.png";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: .5rem;
`;

const Element = styled.img`
    width: 2rem;
    height: 2rem;
`;

const Title = styled.h1`
    font-size: 2rem;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    color: #0236e0
`;

function Icon() {
    return (
        <Container>
            <Element src={Graph} alt="Graph"/>
            <Title>FINEXT</Title>
        </Container>
    );
}

export default Icon;