import React, { useState } from 'react';
import { useQuery } from 'react-query';
import {
  fetchAlunos,
  removeAlunoFromTurma,
} from '../../services/alunosService';
import {
  StyledAlunosPopUp,
  AlunoItem,
  InscreverButton,
  DeleteIconContainer,
} from './styles';
import { DeleteOutlined } from '@ant-design/icons';
import { message, Modal, Divider, ButtonProps} from 'antd';
import { InscricaoAlunoPopUp } from '../InscricaoAlunoPopUp/InscricaoAlunoPopUp';
import { CadastroAlunoPopUp } from '../CadastroAlunoPopUp/CadastroAlunoPopUp';

export const AlunosPopUp = ({ nomeOficina, turma, open, onOk, onCancel }) => {
  const [isInscricaoModalVisible, setInscricaoModalVisible] = useState(false);
  const [isCadastroModalVisible, setCadastroModalVisible] = useState(false);

  const { data: alunos, refetch } = useQuery(['alunos', turma.idTurma], () =>
    fetchAlunos(turma.idTurma)
  );

  const showDeleteConfirm = (idAluno) => {
    Modal.confirm({
      title: 'Você tem certeza que deseja remover este aluno da turma?',
      content: 'Esta ação não pode ser desfeita.',
      okText: 'Confirmar',
      cancelText: 'Cancelar',
      okButtonProps: { style: { backgroundColor: '#00B094', borderRadius: '100px', width: '150px'} },
      cancelButtonProps: { style: { backgroundColor: '#EB1D68', borderRadius: '100px', width: '150px', color: '#FFF', marginRight: '60px'} },
      onOk() {
        handleRemoveAlunoFromTurma(idAluno);
      },
    });
  };

  const handleInscricaoClick = () => {
    Modal.confirm({
      title: 'O aluno já faz parte da ONG?',
      okText: 'Sim',
      cancelText: 'Não',
      onOk: () => setInscricaoModalVisible(true),
      onCancel: () => setCadastroModalVisible(true),
      okButtonProps: { style: { backgroundColor: '#00B094', borderRadius: '100px', width: '150px'} },
      cancelButtonProps: { style: { backgroundColor: '#EB1D68', borderRadius: '100px', width: '150px', color: '#FFF', marginRight: '60px'} },
    });
  };

  const handleRemoveAlunoFromTurma = async (idAluno) => {
    try {
      await removeAlunoFromTurma(idAluno, turma.idTurma);
      message.success('Aluno removido com sucesso!');
      refetch();
    } catch (error) {
      message.error('Falha ao remover aluno.');
    }
  };

  const sortedAlunos = alunos?.sort((a, b) => a.nome.localeCompare(b.nome));

  const HeaderContent = (
    <div className='cabecalho-popup'>
      <div>{`Alunos Inscritos na ${nomeOficina} - ${turma.name}`}</div>
      <InscreverButton
        key="inscrever"
        type="primary"
        onClick={handleInscricaoClick}
      >
        Inscrever aluno
      </InscreverButton>
      <Divider></Divider>
    </div>
  );

  return (
    <>
      <StyledAlunosPopUp
        title={HeaderContent}
        open={open}
        onOk={onOk}
        onCancel={onCancel}
      >
        {sortedAlunos?.map((aluno) => (
          <AlunoItem key={aluno.idAluno}>
            {aluno.nome}
            <DeleteIconContainer
              onClick={() => showDeleteConfirm(aluno.idAluno)}
            >
              <DeleteOutlined />
            </DeleteIconContainer>
          </AlunoItem>
        ))}
      </StyledAlunosPopUp>
      {isInscricaoModalVisible && (
        <InscricaoAlunoPopUp
          visible={isInscricaoModalVisible}
          onClose={() => setInscricaoModalVisible(false)}
          turmaId={turma.idTurma}
          refetchAlunosInscritos={refetch}
        />
      )}
      {isCadastroModalVisible && (
        <CadastroAlunoPopUp
          visible={isCadastroModalVisible}
          onClose={() => setCadastroModalVisible(false)}
          turmaId={turma.idTurma}
          refetchAlunosInscritos={refetch}
        />
      )}
    </>
  );
};
