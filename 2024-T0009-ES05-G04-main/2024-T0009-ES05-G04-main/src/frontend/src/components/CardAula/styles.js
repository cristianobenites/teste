import styled from 'styled-components'; // Importa a biblioteca styled-components
import { Card } from 'antd'; // Importa o componente Card da antd

// Estiliza o componente Card da antd
export const StyledCard = styled(Card)`
  position: relative; // Define a posição do card como relativa
  cursor: pointer; // Altera o cursor ao passar por cima do card
  border-radius: 8px; // Borda arredondada do card
  height: 40vh; // Altura do card
  display: flex; // Define um layout flexível para o card
  align-items: flex-end; // Alinha os itens do card na parte inferior
  color: #000; // Cor do texto do card
  text-overflow: ellipsis; // Adiciona reticências para indicar texto cortado
  overflow: hidden; // Esconde o conteúdo que ultrapassa as dimensões do card
  white-space: nowrap; // Impede a quebra de linha do texto

  margin-left: 0px; // Define a margem esquerda do card
  margin-right: 0px; // Define a margem direita do card
  margin: 20px; // Define a margem do card

  .ant-card-body {
    padding: 16px; // Adiciona espaçamento interno ao corpo do card
  }

  &::after {
    z-index: 0; // Define a ordem de empilhamento do pseudo-elemento
    content: ''; // Adiciona conteúdo ao pseudo-elemento
    position: absolute; // Define a posição do pseudo-elemento como absoluta
    width: 100%; // Largura do pseudo-elemento
    height: 40%; // Altura do pseudo-elemento
    background-color: #F8F8F8; // Cor de fundo do pseudo-elemento
  }

  .ant-card-meta-title {
    position: relative; // Define a posição do título do card como relativa
    z-index: 1; // Define a ordem de empilhamento do título do card
  }
`;
