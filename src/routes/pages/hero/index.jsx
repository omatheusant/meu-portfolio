
import styled from "styled-components"
import { ContactIcons } from "../../../components/contactIcons"

export const Hero = () => {
    return (
        <Container id="hero">
            <Greet>Oi 👋 eu sou o Matheus </Greet>
            <Title>React
                <Icons>
                    <ContactIcons />
                </Icons> <br /> Developer </Title>
            <Intro>Tenho 20 anos e sou desenvolvedor frontend com 6 meses de experiência trabalhando como freelancer.</Intro>


        </Container>
    )
}

const Container = styled.header`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100vh;
background: var(--primary);
background: radial-gradient(circle, var(--secondary) 11%, #0f0029 90%);
gap: 10px;
z-index: 0;
@media (max-width: 800px) {
    gap: 60px;
}


`

const Greet = styled.span`
text-transform: uppercase;
font-size: 1.3rem;
font-weight: 900;
color: var(--tertiary);
margin-right: 520px;
@media (min-width: 1800px) {
    font-size: 2.0rem;
    margin-right: 700px;
}

@media (max-width: 800px) {
    margin-right: 0px;
}


`

const Title = styled.h1`
color: var(--light-color);
text-transform: uppercase;
font-weight: 900;
font-size: 9.0rem;
line-height: 120px;
letter-spacing: -3px;
position: relative;
@media (min-width: 1800px) {
    font-size: 12.0rem;
    line-height: 150px;;
}

@media (max-width: 800px) {
    font-size: 5.0rem;
    line-height: 60px;
    text-align: center;
}

@media (max-width: 463px) {
    font-size: 3.5rem;
}

`

const Icons = styled.span`
color: var(--enphasis);
position: absolute;
right: 70px;

@media (max-width: 800px) {
    bottom: -100px;
    left: 120px;
}

@media (max-width: 463px) {
    left: 50px;
}


`

const Intro = styled.span`
color: var(--light-color);
font-weight: 300;
font-size: 1.0rem;
text-transform: uppercase;
width: 600px;
margin-left: 250px;
margin-top: 50px;
@media (min-width: 1800px) {
    font-size: 1.5em;
    width: 900px;
}
@media (max-width: 800px) {
    margin-left: 0px;
    max-width: 80vw;
    text-align: center;
}
`







