import styled from "styled-components"

export const About = () => {
    return (
        <Container id="about">
            <h1>Sobre Mim</h1>
            <Content>
                <Image src="https://i.imgur.com/YBxVpOV.jpeg" alt='Imagem de perfil' />
                <div>
                    <p>Me chamo Matheus Santana, tenho 20 anos e sou apaixonado desde criança por tecnologia, jogos e programação. Quando mais jovem, programei em Javascript e Ruby, criando jogos e programas.</p>
                    <p>Em 2023, decidi retomar meus estudos em programação. Desta vez, focando em Javascript para a área de Desenvolvimento Frontend. Escolhi o Javascript devido a sua grande comunidade, enorme potencial de crescimento e sua grande adaptabilidade que se expande para a Web, Mobile e Backend, através de React e Node. </p>
                    <p> Atuo como freelancer visando desenvolver minhas habilidades, tenho trabalhado em projetos pessoais e estou em busca da minha primeira vaga como programador frontend. Eu amo pizza, natureza e arte.</p>
                </div>
            </Content>

        </Container>
    )
}

const Container = styled.main`
display: flex;
flex-direction: column;
justify-content: space-between;
gap: 50px;
margin-bottom: 100px;

h1{
    text-transform: uppercase;
    text-align: center;
    margin-top: 50px;
}
`

const Image = styled.img`
width: 250px;
border: 5px double var(--primary);
border-radius: 50%;
`
const Content = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 60px;

div{
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 60vw;
    text-align: justify;
}

`