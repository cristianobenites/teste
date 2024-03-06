import React, { useState } from 'react';
import { StyledCard } from './styles';
import { PresencaPopUp } from '../PresencaPopUp/PresencaPopUp';

const cores = [
  '#00AEEF',
  '#2E3192',
  '#63236F',
  '#EB1D68',
  '#F5821F',
  '#F5C630',
  '#00B094',
];

export const CardAula = ({ aula, index }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const cardStyle = {
    backgroundColor: cores[index % cores.length],
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  return (
    <div>
      <StyledCard style={cardStyle} onClick={showModal}>
        <StyledCard.Meta title={`Aula ${aula.data}`} />
      </StyledCard>
      <PresencaPopUp
        title={`Presença - Aula ${aula.data}`}
        open={isModalVisible}
        onOk={() => setIsModalVisible(false)}
        onCancel={() => setIsModalVisible(false)}
        aula={aula}
      />
    </div>
  );
};
