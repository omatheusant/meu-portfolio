import styled from "styled-components"

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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto harum eaque repudiandae exercitationem, dolorum aliquid magni unde ipsam temporibus, quibusdam voluptas omnis! Vel, delectus officiis! Rerum nihil magni cupiditate nobis nulla, nam vero praesentium reiciendis accusantium ratione possimus suscipit provident, quasi incidunt quia architecto eaque pariatur repellat illum. Officia, magni.</p>
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
`

const ProjectsContainer = styled.div`
display: flex;
justify-content: space-evenly;
flex-wrap: wrap;
max-width: 1000px;

img{
    width: 450px;
    transition: 0.3s ease-in-out;
    &:hover{
        width: 480px;
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
}

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

    &:hover{
        font-size: 1.2rem;
        background-color: var(--enphasis);
        color: var(--primary);
    }
}
`