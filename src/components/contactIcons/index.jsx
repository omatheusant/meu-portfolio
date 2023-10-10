import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faFileLines } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"

export const ContactIcons = () => {
    return (
        <Icons>
            <Icon title={"Ver Linkedin"}>
               <a href="https://www.linkedin.com/in/omatheussant/" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} />
                </a> 
            </Icon>

            <Icon title={"Ver Github"}>
            <a href="https://github.com/omatheusant" target="_blank">
                <FontAwesomeIcon icon={faGithub} />
                </a> 

            </Icon>

            <Icon title={"Download CV"}>
            <a href="https://github.com/omatheusant" target="_blank">
                <FontAwesomeIcon icon={faFileLines} />
                </a> 

            </Icon>
        </Icons>
    )
}

const Icons = styled.span `
display: flex;
`

const Icon = styled.div`
cursor: pointer;
margin: 10px;
font-size: 2.5rem;
margin-right: 30px;
transition: all 0.3s ease-in-out;

&:hover {
transform: translateY(-10px);
}
`