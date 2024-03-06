import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Header } from '../../../components/layout/Header/Header.jsx';
import { useLocation } from 'react-router-dom';
import { Button, Col, Breadcrumb } from 'antd';
import { fetchAulas } from '../../../services/aulasService';
import { CardAula } from '../../../components/CardAula/CardAula';
import { StyledRowDetalhes, DetalhesTurmaContainer } from './styles';
import { AlunosPopUp } from '../../../components/AlunosPopUp/AlunosPopUp.jsx';

export const DetalhesTurma = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const menuProfessor = [
    { name: 'Turmas', path: '/turmas' },
    { name: 'Próximas Aulas', path: '/proximas-aulas' },
  ];

  const { state } = useLocation();
  const { turma, nomeOficina } = state || {};

  const showModal = () => {
    setIsModalVisible(true);
  };

  const { data: aulas } = useQuery(['aulas', turma?.idTurma], () =>
    fetchAulas(turma?.idTurma)
  );

  return (
    <DetalhesTurmaContainer>
      <Header menuItems={menuProfessor} />
      <Breadcrumb>
        <Breadcrumb.Item>Turmas</Breadcrumb.Item>
        <Breadcrumb.Item>{turma?.name}</Breadcrumb.Item>
      </Breadcrumb>

      <div style={{padding: '20px',}}>
        <div className='cabecalho-turma'>
          <h1>
            {nomeOficina} - {turma?.name}
          </h1>
          <Button type="primary" onClick={showModal}>Alunos Inscritos</Button>
        </div>
        <p>Quantidade de vagas: {turma?.vagas}</p>
      </div>

      <AlunosPopUp
        turma={turma}
        nomeOficina={nomeOficina}
        open={isModalVisible}
        onOk={() => setIsModalVisible(false)}
        onCancel={() => setIsModalVisible(false)}
      />
      <StyledRowDetalhes gutter={[16, 16]}>
        {aulas &&
          aulas.map((aula, index) => (
            <Col key={aula.id} span={8}>
              <CardAula aula={aula} index={index} />
            </Col>
          ))}
      </StyledRowDetalhes>
    </DetalhesTurmaContainer>
  );
};
