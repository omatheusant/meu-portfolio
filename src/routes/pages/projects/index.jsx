import styled from "styled-components"
export const Projects = () => {
    const data = [
        {
            name: 'AstroHub',
            img: 'https://i.ibb.co/4Fh1LVM/mockup-project.png',
            desc: '(Em andamento) Uma comunidade para entusiastas da astronomia que exibe artigos, notícias e imagens recentes acerca do espaço. Além disso, este projeto também consome algumas APIs da NASA para oferecer diversas funcionalidades ao usuário, como: pesquisa de imagens em tempo real do planeta terra, informações de missões espaciais e a foto do dia utilizando a api Astronomy Picture of The Day.',
            repo_url: 'https://github.com/omatheusant/astrohub',
            deploy_url: '/'
        },

        {
    
            name: 'Portfólio',
            img: 'https://i.ibb.co/2sVCQth/Minimalist-Website-Launch-Computer-Mockup-Instagram-Post-3.png',
            desc: 'Esse próprio portfólio também é um projeto de minha autoria. Esse projeto foi desenvolvido em React junto com a biblioteca styled-components com o intuito de criar um portfólio profissional moderno, atrativo e responsivo que possa oferecer ao usuário uma experiência visual satisfatória, prendendo a atenção e destacando as informações mais importantes.',
            repo_url: 'https://github.com/omatheusant/meu-portfolio',
            deploy_url: 'https://meu-portfolio-steel-beta.vercel.app/'
        },
        {
            name: 'Pokedex',
            img: 'https://i.imgur.com/YglUjRg.png',
            desc: 'Este projeto se trata de uma enciclopedia virtual que oferece ao usuário as principais informações sobre cada Pokemon. O projeto possui apenas duas páginas principais, a primeira exibe uma lista de pokemons e, quando o usuário escolhe um destes, o mesmo será levado a próxima página que irá renderizar informações aprofundadas daquele pokemon expecífico.',
            repo_url: 'https://github.com/omatheusant/pokeapi',
            deploy_url: 'https://pokedex-theta-rose.vercel.app'
        },
        {
            name: 'Buscador de Usuários',
            img: 'https://i.ibb.co/xh7W6kz/Minimalist-Website-Launch-Computer-Mockup-Instagram-Post-2.png',
            desc: 'Um buscador de usuários realizado utilizando a API do Github. Se trata de um projeto simples e minimalista com o objetivo de pesquisar usuários do Github com seus principais dados, que são: nome, sobrenome, biografia e seguidores. Além disso, também é revelado os dez últimos repositórios e eventos realizados na conta buscada.',
            repo_url: 'https://github.com/omatheusant/projeto-inicial-fetch-github-api',
            deploy_url: 'https://omatheusant.github.io/projeto-inicial-fetch-github-api/'
        }
    ]

    return (
        <Container id="projects">
            <Title>Projetos</Title>
            <ProjectsContainer>
            {
                data.map((project, index) => {
                    return(
                        <div key={index}>
                            <a href={project.deploy_url}>
                                <img src={project.img} alt="Imagem do projeto" />
                            </a>
                            <h2>{project.name}</h2>
                            <p>{project.desc}</p>
                            <Links>
                                <a href={project.repo_url} target="_blank">
                                    Repositório
                                </a>
                                <a href={project.deploy_url} target="_blank">
                                    Link do projeto
                                </a>
                            </Links>
                        </div>
                    )
                })

            }

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
