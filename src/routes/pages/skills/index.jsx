import { faCss3, faCss3Alt, faFigma, faHtml5, faNode, faNodeJs, faReact, faSass, faSquareJs } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"

export const Skills = () => {
    return(
<Container id="skills">
    <Title>Tecnologias</Title>

<Cards>
    <Card>
        <FontAwesomeIcon icon={faHtml5} style={{fontSize: '5.0rem'}}/>
        <h2>HTML</h2>
        <span>HTML5 é a linguagem de marcação usada para estruturar o conteúdo da web, permitindo a criação de páginas interativas com elementos como vídeo e áudio</span>
    </Card>
    <Card>
        <FontAwesomeIcon icon={faCss3Alt} style={{fontSize: '5.0rem'}}/>
        <h2>CSS</h2>
        <span>CSS3 é uma linguagem de estilo usada para dar vida às páginas da web, permitindo a formatação, layout e design visualmente atraente.</span>
    </Card>
    <Card>
        <FontAwesomeIcon icon={faSquareJs} style={{fontSize: '5.0rem'}}/>
        <h2>JavaScript</h2>
        <span>JavaScript é uma linguagem de programação que torna as páginas da web dinâmicas, permitindo a interatividade do usuário e o processamento de dados em tempo real.</span>
    </Card>
    <Card>
        <FontAwesomeIcon icon={faReact} style={{fontSize: '5.0rem'}}/>
        <h2>ReactJS</h2>
        <span>ReactJS é uma biblioteca JavaScript para a criação de interfaces de usuário reativas e componentizadas, amplamente utilizada no desenvolvimento de aplicativos web modernos.</span>
    </Card>
    <Card>
    <i class="devicon-typescript-plain" style={{fontSize: '5.0rem'}}></i>
    <h2>TypeScript</h2>
        <span>TypeScript é uma extensão do JavaScript que adiciona tipagem estática, tornando o código mais seguro e legível, especialmente em projetos de grande escala.</span>
    </Card>
    <Card>
    <i class="devicon-jest-plain" style={{fontSize: '5.0rem'}}></i>
        <h2>Jest</h2>
        <span>Jest é um framework de testes de JavaScript amplamente utilizado para testar código JavaScript, especialmente em aplicações React e Node.js.</span>
    </Card>
    
    <Card>
        <FontAwesomeIcon icon={faNodeJs} style={{fontSize: '5.0rem'}}/>
        <h2>NodeJS</h2>
        <span>NodeJS é um ambiente de tempo de execução JavaScript no lado do servidor, que permite a criação de aplicativos web escaláveis e de alto desempenho.</span>
    </Card>
    <Card>
        <FontAwesomeIcon icon={faFigma} style={{fontSize: '5.0rem'}}/>
        <h2>Figma</h2>
        <span>Figma é uma ferramenta de design de interface de usuário baseada na web que simplifica a colaboração e o design de interfaces de usuário interativas e responsivas.</span>
    </Card>
    <Card>
        <FontAwesomeIcon icon={faSass} style={{fontSize: '5.0rem'}}/>
        <h2>Sass</h2>
        <span>Sass é uma linguagem de folha de estilo que estende o CSS, oferecendo recursos avançados como variáveis, mixins e aninhamento para facilitar o desenvolvimento de estilos reutilizáveis.</span>
    </Card>
    <Card>
    <i class="devicon-redux-original" style={{fontSize: '5.0rem'}}></i>
    <h2>Redux</h2>
        <span>Redux é uma biblioteca JavaScript para gerenciamento de estado em aplicativos front-end, ajudando a manter a consistência e o controle de dados em toda a aplicação</span>
    </Card>

</Cards>
</Container>
        )
}

const Container = styled.main`
display: flex;
flex-direction: column;
align-items: center;
padding-top: 50px;
`

const Title = styled.h1`
color: var(--primary);
width: 300px;
font-size: 2.4rem;
text-align: center;
text-transform: uppercase;
border-bottom:solid 1px var(--secondary);
`

const Cards = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
gap: 50px;
margin-top: 50px;
margin-bottom: 50px;
`
const Card = styled.div`
display: flex;
flex-direction: column;
align-items: center;
font-size: 1.0rem;
width: 300px;
height: 350px;
padding: 20px;
transition: 0.3s ease-in-out;
cursor: pointer;
&:hover{
    background-color: var(--secondary);
    color: white;
}

h2{
    margin-top: 5px;
    margin-bottom: 10px;
    font-size: 1.8rem;
}

span{
    text-align: center;
}
`
