import { faReact } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"
import { Styledcomponents, ReactLogo, Javascript, Html5, Css3 } from "styled-icons/simple-icons"

export const Projects = () => {
    return (
        <Container id="projects">
            <Title>Projetos</Title>
            <ProjectsContainer>
                <div>
                    <a href="https://meu-portfolio-steel-beta.vercel.app" target="_blank">
                        <img src="https://i.ibb.co/2sVCQth/Minimalist-Website-Launch-Computer-Mockup-Instagram-Post-3.png" />
                    </a>
                    <h2>Portfólio</h2>
                    <p>Esse próprio portfólio também é um projeto de minha autoria. Esse projeto foi desenvolvido em React junto com a biblioteca styled-components com o intuito de criar um portfólio profissional moderno, atrativo e responsivo que possa oferecer ao usuário uma experiência visual satisfatória, prendendo a atenção e destacando as informações mais importantes.</p>
                    <Icons>
                        <ReactLogo style={{width: '50px'}}/>
                        <Styledcomponents style={{width: '70px'}}/>
                        <Javascript style={{width: '50px'}}/>
                    </Icons>
                    <Links>
                        <a href="https://github.com/omatheusant/meu-portfolio" target="_blank">
                            Repositório
                        </a>
                        <a href="https://meu-portfolio-steel-beta.vercel.app/" target="_blank">
                            Link do projeto
                        </a>
                    </Links>
                </div>
                <div>
                    <a href="https://pokedex-theta-rose.vercel.app" target="_blank">
                        <img src="https://i.imgur.com/YglUjRg.png" />
                    </a>
                    
                    <h2>Projeto Pokedex</h2>
                    <p> Este projeto se trata de uma enciclopedia virtual que oferece ao usuário as principais informações sobre cada Pokemon. O projeto possui apenas duas páginas principais, a primeira exibe uma lista de pokemons e, quando o usuário escolhe um destes, o mesmo será levado a próxima página que irá renderizar informações aprofundadas daquele pokemon expecífico. </p>
                    <Icons>
                        <ReactLogo style={{width: '50px'}}/>
                        <Styledcomponents style={{width: '70px'}}/>
                        <Javascript style={{width: '50px'}}/>
                    </Icons>
                    
                    <Links>
                        <a href="https://github.com/omatheusant/pokeapi" target="_blank">
                            Repositório
                        </a>
                        <a href="https://pokedex-theta-rose.vercel.app" target="_blank">
                            Link do projeto
                        </a>
                    </Links>
                </div>

                <div>
                    <a href="https://omatheusant.github.io/projeto-inicial-fetch-github-api/" target="_blank">
                        <img src="https://i.ibb.co/xh7W6kz/Minimalist-Website-Launch-Computer-Mockup-Instagram-Post-2.png" />
                    </a>
                    <h2>Buscador de Usuários</h2>
                    <p>Um buscador de usuários realizado utilizando a API do Github. Se trata de um projeto simples e minimalista com o objetivo de pesquisar usuários do Github com seus principais dados, que são: nome, sobrenome, biografia e seguidores. Além disso, também é revelado os dez últimos repositórios e eventos realizados na conta buscada.</p>
                    <Icons>
                        <Html5 style={{width: '50px'}}/>
                        <Css3 style={{width: '50px'}}/>
                        <Javascript style={{width: '50px'}}/>
                    </Icons>
                    <Links>
                        <a href="https://github.com/omatheusant/projeto-inicial-fetch-github-api" target="_blank">
                            Repositório
                        </a>
                        <a href="https://omatheusant.github.io/projeto-inicial-fetch-github-api/" target="_blank">
                            Link do projeto
                        </a>
                    </Links>
                </div>
            </ProjectsContainer>
        </Container>
    )
}

const Container = styled.main`
display: flex;
flex-direction: column;
align-items: center;
background-color: var(--primary);
padding-top: 50px;
padding-bottom: 50px;


`

const Title = styled.h1`
color: var(--light-color);
width: 300px;
font-size: 2.4rem;
text-align: center;
text-transform: uppercase;
border-bottom:solid 1px var(--secondary);
@media (min-width: 1800px) {
    font-size: 3.0rem;
}
`

const ProjectsContainer = styled.div`
display: flex;
justify-content: space-evenly;
flex-wrap: wrap;
max-width: 1000px;
@media (min-width: 1800px) {
    gap: 200px;
}

img{
    width: 450px;
    transition: 0.3s ease-in-out;
    &:hover{
        width: 480px;
    }
    @media (min-width: 1800px) {
    width: 500px;
    &:hover{
        width: 530px;
    }
}

}

div{
display: flex;
flex-direction: column;
align-items: center;
width: 400px;
color: var(--light-color);
position: relative;
height: 850px;
@media (min-width: 1800px) {
    height: 800px;
    &:last-child{
        margin-bottom: 200px;;
    } 
        
}

}

h2{
   text-transform: uppercase;
   margin-bottom: 20px;
   border-bottom:solid 1px var(--secondary);
    font-size: 1.8rem;
    margin-bottom: 40px;
}

p{
    text-align: center;
    @media (min-width: 1800px) {
    font-size: 1.3rem;
    width: 500px;
}

}


`

const Icons = styled.span`
    display: flex;
    gap: 30px;
    margin-bottom: 5px;
    margin-top: 10px;
`

const Links = styled.span`
margin-top: 20px;
display: flex;
width: 100%;
gap: 50px;
justify-content: center;

a{
    text-transform: uppercase;
    font-size: 1.0rem;
    border: 1px solid ;
    border-radius: 5px;
    padding: 5px;
    transition: 0.3s ease-in-out;
    color: var(--light-color);
    font-weight: 700;
    background-color: var(--secondary);
    @media (min-width: 1800px) {
        font-size: 1.2rem;
}



    &:hover{
        font-size: 1.2rem;
        background-color: var(--enphasis);
        color: var(--primary);
    }
}
`
