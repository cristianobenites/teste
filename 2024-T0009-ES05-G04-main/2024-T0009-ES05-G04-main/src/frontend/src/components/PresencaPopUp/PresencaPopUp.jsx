import {
  StyledPresencaPopUp,
  ConfirmButton,
  AlunoListItem,
  StyledCheckbox,
  AlunoNameContainer,
  CheckboxContainer,
} from './styles';
import { useQuery } from 'react-query';
import { useState } from 'react';
import { fetchAlunos } from '../../services/alunosService';
import {
  fetchPresencasByAulaId,
  registrarPresencas,
} from '../../services/PresencasService';
import { message } from 'antd';

export const PresencaPopUp = ({ aula, open, onOk, onCancel }) => {
  const [presencas, setPresencas] = useState({});
  const [editable, setEditable] = useState(true);

  const { data: alunos } = useQuery(['alunos', aula.idTurma], () =>
    fetchAlunos(aula.idTurma)
  );

  const sortedAlunos = alunos?.sort((a, b) => a.nome.localeCompare(b.nome));

  useQuery(
    ['presencas', aula.idAula],
    () => fetchPresencasByAulaId(aula.idAula),
    {
      onSuccess: (data) => {
        if (data && data.length > 0) {
          setEditable(false);
          const presencasMap = data.reduce((acc, current) => {
            acc[current.idAluno] = current.presente;
            return acc;
          }, {});
          setPresencas(presencasMap);
        }
      },
    }
  );

  const handleCheck = (idAluno) => {
    if (editable) {
      setPresencas((prevPresencas) => ({
        ...prevPresencas,
        [idAluno]: !prevPresencas[idAluno],
      }));
    }
  };

  const handleSubmitPresenca = async () => {
    try {
      await Promise.all(
        Object.entries(presencas).map(([idAluno, presente]) =>
          registrarPresencas(aula.idAula, idAluno, presente)
        )
      );
      message.success('Presenças registradas com sucesso');
      onOk();
    } catch (error) {
      message.error('Erro ao registrar presenças:');
    }
  };

  return (
    <StyledPresencaPopUp
      title={`Lista de presença - Aula ${aula.data}`}
      open={open}
      onOk={handleSubmitPresenca}
      onCancel={onCancel}
      footer={
        editable
          ? [
              <ConfirmButton
                key="submit"
                type="primary"
                onClick={handleSubmitPresenca}
              >
                Confirmar Presenças
              </ConfirmButton>,
            ]
          : null
      }
      maskClosable={false}
    >
      {alunos &&
  sortedAlunos
    .filter((aluno) => editable || presencas.hasOwnProperty(aluno.idAluno)) 
    .map((aluno) => (
      <AlunoListItem key={aluno.idAluno}>
        <AlunoNameContainer>{aluno.nome}</AlunoNameContainer>
        <CheckboxContainer>
          <StyledCheckbox
            checked={!!presencas[aluno.idAluno]}
            onChange={() => handleCheck(aluno.idAluno)}
            disabled={!editable}
          />
        </CheckboxContainer>
      </AlunoListItem>
))}

    </StyledPresencaPopUp>
  );
};
