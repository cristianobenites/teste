import {
  StyledInscricaoAlunoPopUp,
  AlunoListItem,
  AlunoNameContainer,
  CheckboxContainer,
} from './styles';
import { Button, Checkbox, message } from 'antd';
import {
  fetchAlunosNaoInscritos,
  addAlunoToTurma,
} from '../../services/alunosService';
import { useQuery } from 'react-query';
import { useState } from 'react';

export const InscricaoAlunoPopUp = ({ visible, onClose, turmaId, refetchAlunosInscritos }) => {
  const [selectedAlunos, setSelectedAlunos] = useState({});

  const { data: alunos } = useQuery(
    ['alunosNaoInscritos', turmaId],
    () => fetchAlunosNaoInscritos(turmaId),
    {
      onSuccess: (data) => {
        const initialSelections = data.reduce(
          (acc, aluno) => ({ ...acc, [aluno.idAluno]: false }),
          {}
        );
        setSelectedAlunos(initialSelections);
      },
    }
  );

  const toggleSelection = (idAluno) => {
    setSelectedAlunos((prev) => ({ ...prev, [idAluno]: !prev[idAluno] }));
  };

  const handleSubmit = async () => {
    const selectedIds = Object.entries(selectedAlunos)
      .filter(([_, isSelected]) => isSelected)
      .map(([id]) => id);

    try {
      await Promise.all(
        selectedIds.map((idAluno) => addAlunoToTurma(idAluno, turmaId))
      );
      message.success('Aluno(s) inscrito(s) com sucesso!');
      refetchAlunosInscritos();
      onClose();
    } catch (error) {
      message.error('Falha ao inscrever aluno(s).');
    }
  };

  return (
    <StyledInscricaoAlunoPopUp
      title="Inscrição de Aluno"
      open={visible}
      onCancel={onClose}
      footer={[
        <Button className="button-cancel" key="back" type="primary" onClick={onClose}>
          Cancelar
        </Button>,
        <Button className="button-add" key="submit" type="primary" onClick={handleSubmit}>
          Adicionar
        </Button>,
      ]}
    >
      {alunos &&
        alunos.map((aluno) => (
          <AlunoListItem key={aluno.idAluno}>
            <AlunoNameContainer>{aluno.nome}</AlunoNameContainer>
            <CheckboxContainer>
              <Checkbox
                checked={selectedAlunos[aluno.idAluno]}
                onChange={() => toggleSelection(aluno.idAluno)}
              />
            </CheckboxContainer>
          </AlunoListItem>
        ))}
    </StyledInscricaoAlunoPopUp>
  );
};
