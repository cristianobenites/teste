import React from 'react';
import styled from 'styled-components';

// Importando os ícones de imagem
import DanceIcon from '../img/music_icon.svg';
import SportIcon from '../img/sport_icon.svg';
import ProfileIcon from '../img/profile_icon.svg';
import ArtIcon from '../img/art_icon.svg';
import BusinessIcon from '../img/business_icon.svg';
import GraphIcon from '../img/graph_icon.svg';
import HeadIcon from '../img/head_icon.svg';
import PeopleIcon from '../img/people_icon.svg';

// Estilizando o wrapper do card
const CardWrapper = styled.div`
  display: flex;
  flex: 0 1 calc(25% - 40px); /* Definindo a largura do card */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100px;
  padding: 16px;
  margin: 10px;
  background: #FFF;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    transform: translateY(-4px); /* Efeito de levantamento no hover */
  }
`;

// Estilizando o ícone
const Icon = styled.img`
  width: 25px;
  margin-bottom: 8px;
`;

// Estilizando o título do card
const Title = styled.h3`
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 14px;
  color: #333;
  margin: 0;
  align-self: center;
`;

// Componente de CardHome
const CardHome = ({ icon, title, onClick }) => {
  let imgSrc;

  // Selecionando o ícone com base no parâmetro 'icon'
  switch (icon) {
    case 'music_icon.svg':
      imgSrc = DanceIcon;
      break;
    case 'sport_icon.svg':
      imgSrc = SportIcon;
      break;
    case 'art_icon.svg':
      imgSrc = ArtIcon;
      break;
    case 'profile_icon.svg':
      imgSrc = ProfileIcon;
      break;
    case 'business_icon.svg':
      imgSrc = BusinessIcon;
      break;
    case 'graph_icon.svg':
      imgSrc = GraphIcon;
      break;
    case 'head_icon.svg':
      imgSrc = HeadIcon;
      break;
    case 'people_icon.svg':
      imgSrc = PeopleIcon;
      break;
    default:
      imgSrc = null;
  }

  // Renderizando o componente de card com o ícone e o título correspondentes
  return (
    <CardWrapper onClick={onClick}>
      <Icon src={imgSrc} alt={`${title} Icon`} /> {/* Ícone */}
      <Title>{title}</Title> {/* Título */}
    </CardWrapper>
  );
};

export default CardHome; // Exportando o componente
