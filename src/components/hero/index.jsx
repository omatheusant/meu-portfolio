
import styled from "styled-components"
import { ContactIcons } from "../contactIcons"

export const Hero = () => {
    return (
        <Container id="hero">
            <Greet>Oi 👋 eu sou o Matheus </Greet>
            <Title>React
                <Icons>
                    <ContactIcons />
                </Icons> <br /> Developer </Title>
            <Intro>   <pre>             Tenho 20 anos e sou desenvolvedor frontend com 6 meses de <br /> experiência trabalhando como freelancer.</pre></Intro>


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


`

const Greet = styled.span`
text-transform: uppercase;
font-size: 1.3rem;
font-weight: 900;
color: var(--tertiary);
margin-right: 520px;

`

const Title = styled.h1`
color: var(--light-color);
text-transform: uppercase;
font-weight: 900;
font-size: 9.0rem;
line-height: 120px;
letter-spacing: -3px;
position: relative;


`

const Icons = styled.span`
color: var(--enphasis);
position: absolute;
right: 70px;

`

const Intro = styled.span`
color: var(--light-color);
font-weight: 300;
font-size: 1.0rem;
text-transform: uppercase;
width: 600px;
margin-left: 250px;
margin-top: 50px;
`







