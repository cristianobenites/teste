import { Header } from '../../../components/layout/Header/Header'; // Importa o componente Header
import React from 'react'; // Importa a biblioteca React
import { useQuery } from 'react-query'; // Importa o hook useQuery do React Query
import { Col } from 'antd'; // Importa o componente Col da antd
import { CardTurma } from '../../../components/CardTurma/CardTurma'; // Importa o componente CardTurma
import { useAuth } from '../../../context/AuthContext'; // Importa o hook useAuth do contexto de autenticação
import { fetchTurmas } from '../../../services/turmasService'; // Importa a função fetchTurmas do serviço turmasService
import { TurmasContainer, StyledRow } from './styles'; // Importa os estilos do contêiner e da linha

// Componente funcional Turmas
export const Turmas = () => {
  // Lista de itens de menu para o Header
  const menuProfessor = [
    { name: 'Turmas', path: '/turmas' },
    { name: 'Próximas Aulas', path: '/proximas-aulas' },
  ];

  // Obtém o userId do contexto de autenticação
  const { userId } = useAuth();

  // Busca as turmas do usuário logado usando o hook useQuery
  const { data: turmas } = useQuery('turmas', () => fetchTurmas(userId));

  // Exibe as turmas no console se estiverem disponíveis
  if (turmas) {
    console.log(turmas);
  }

  // Retorna a renderização do componente
  return (
    <TurmasContainer>
      <Header menuItems={menuProfessor} /> {/* Renderiza o Header com os itens de menu */}
      <StyledRow gutter={[16, 16]}> {/* Renderiza a linha estilizada com espaçamento entre as colunas */}
        {turmas && turmas.map((turma, index) => ( {/* Mapeia e renderiza cada turma como um CardTurma */}
          <Col key={turma.idTurma} span={8}> {/* Define a chave e a largura da coluna */}
            <CardTurma turma={turma} index={index} /> {/* Renderiza o CardTurma com os dados da turma */}
          </Col>
        ))}
      </StyledRow>
    </TurmasContainer>
  );
};
