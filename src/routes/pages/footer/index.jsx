import { faGithub, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faCopy, faFileLines } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"

export const Footer = () => {
    const text = 'mat.alvessantana@gmail.com'

    return (
        <Container>
            <h1>Matheus Santana </h1>
            <ul>
                <li>
                    <a href="#hero">Início</a>
                </li>
                <li>
                    <a href="#about">Sobre</a>
                </li>
                <li>
                    <a href="#projects">Projetos</a>
                </li>
                <li>
                    <a href="#skills">Tecnologias</a>
                </li>
            </ul>

            <Contact>
                <Icons>
                    <a href="https://github.com/omatheusant" target="_blank">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="https://www.linkedin.com/in/omatheussant/" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                
                    <a href="https://wa.me/5577981186690" target="_blank">
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </a>
                </Icons>

                <p>{text}</p>
                <button onClick={() => {
                    navigator.clipboard.writeText(text);
                }}>Click to Copy</button>
            </Contact>
        </Container>
    )
}

const Container = styled.footer`
background-color: var(--primary);
padding: 20px;
display: flex;
align-items: center;


@media (max-width: 1213px) {
        flex-direction: column;
}

h1{
    color: var(--light-color);
    font-weight: 300;
    line-height: 40px;
    width: fit-content;
    padding: 20px 50px 20px 20px;
    border-right: solid 1px var(--secondary);
    text-transform: uppercase;

    @media (max-width: 1213px) {
        padding: 0px;
        border-right: none;
        border-bottom: solid 1px var(--secondary) ;
}
}

ul{
    display: flex;
    color: var(--secondary);
    font-size: 1.2rem;
    gap: 20px;
    margin-left: 50px;
    @media (max-width: 1213px) {
        margin-left: 0px;
        margin-top: 5px;
    
}

    @media (max-width: 468px) {
        flex-direction: column;
        align-items: center;
    
}
    
    li{
        text-transform: uppercase;
        transition: 0.3s ease-in-out;
        &:hover{
            color: var(--light-color);
        }
    }
}


`

const Contact = styled.div`
display: flex;
flex-direction: column;
gap: 5px;
margin-left: 250px;
color: var(--secondary);
position: relative;
@media (max-width: 1213px) {
    margin-left: 0px;
    align-items: center;
}

button{
    position: absolute;
    bottom: 0px;
    width: 100%;
    background-color: var(--light-color);
    border-color: var(--secondary);
    opacity: 0;
    transition: 0.3s ease-in-out;
    cursor: pointer;
    &:hover{
        opacity: 100;
    }
}
`

const Icons = styled.div`
display: flex;
font-size: 1.8rem;
gap: 20px;

a{
    transition: 0.3s ease-in-out;
    &:hover{
        font-size: 2.0rem;
        color: var(--light-color);
    }
}
`