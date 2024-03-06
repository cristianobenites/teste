import React from 'react';
import { StyledCard } from './styles';
import { useNavigate } from 'react-router-dom';

const cores = [
  '#00AEEF',
  '#2E3192',
  '#63236F',
  '#EB1D68',
  '#F5821F',
  '#F5C630',
  '#00B094',
];

const nomesOficinas = [
  'Oficina de Basquete',
  'Oficina de Futebol',
  'Oficina de Vôlei',
];

export function CardTurma({ turma, index }) {
  const navigate = useNavigate();
  const cardStyle = {
    backgroundColor: cores[index % cores.length],
  };

  const nomeOficina = nomesOficinas[index % nomesOficinas.length];

  const handleCardClick = () => {
    navigate(`/aulas/${turma.idTurma}`, { state: { turma, nomeOficina } });
  }

  return (
    <StyledCard
      style={cardStyle}
      onClick={handleCardClick}
    >
      
      <StyledCard.Meta
        title={`${nomeOficina} - ${turma.name}`}
      />
      
    </StyledCard>
  );
}