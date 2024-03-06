import styled from 'styled-components';

// Estilizando o componente de cartão
const Card = styled.div`
    background-color: white; /* Cor de fundo do cartão */
    border-radius: 16px; /* Bordas arredondadas */
    box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.2); /* Sombra */
    padding: 16px; /* Preenchimento interno do cartão */
    margin: 8px; /* Margem ao redor do cartão */
    background-size: cover;
    background-position: center;
    width: 16vw; /* Largura do cartão como 16% da largura da viewport */
    max-height: 22vh; /* Altura máxima do cartão como 22% da altura da viewport */
    height: auto; /* Altura ajustável */
    display: flex;
    flex-direction: row; /* Direção do layout como linha */
    align-items: center;
    justify-content: stretch; /* Alinhamento do conteúdo */
`;

// Estilizando o wrapper de conteúdo
const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: stretch;
    width: 100%;
    flex-grow: 1; /* O conteúdo pode crescer */
    margin-bottom: 8px; /* Margem inferior extra */
    padding: 16px; /* Preenchimento interno */
    margin-top: 3%; /* Margem superior */
`;

// Estilizando o número
const Numero = styled.h1`
    font-family: 'Be Vietnam Pro Extra Bold', sans-serif;
    font-size: 2.5vw; /* Tamanho da fonte do número */
    color: #00AEEF; /* Cor do número */
    margin: 0;
    white-space: nowrap; /* Evitar que o texto quebre linha */
`;

// Estilizando o texto
const Texto = styled.p`
    font-family: 'Be Vietnam Pro', sans-serif;
    font-size: 1vw; /* Tamanho da fonte do texto */
    margin: 0;
    color: #3C4043; /* Cor do texto */
`;

// Estilizando a imagem
const Imagem = styled.img`
    width: 100%; /* Largura da imagem */
    max-height: 14vh; /* Altura máxima da imagem */
    object-fit: contain; /* Ajuste da imagem */
`;

// Componente de cartão
const CardComponent = ({ imagem, numero, texto }) => {
    return (
        <Card>
            <ContentWrapper>
                <Imagem src={imagem} alt={texto} /> {/* Imagem */}
                <Numero>{numero}</Numero> {/* Número */}
                <Texto>{texto}</Texto> {/* Texto */}
            </ContentWrapper>
        </Card>
    );
};

export default CardComponent; // Exportando o componente
