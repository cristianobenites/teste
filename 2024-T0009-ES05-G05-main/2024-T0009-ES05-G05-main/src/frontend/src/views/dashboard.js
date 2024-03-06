import React, { useEffect, useState } from 'react'; // Importa React, useEffect e useState do React
import styled from 'styled-components'; // Importa a biblioteca styled-components para estilização
import CardComponent from '../components/Card'; // Importa o componente de cartão
import { fetchDados } from '../services/dashboardService'; // Importa o serviço de busca de dados do painel
import { useLocation } from 'react-router-dom'; // Importa useLocation para obter parâmetros de consulta
import evasaoImage from '../img/evasao.png'; // Importa a imagem de evasão
import freqVagaImage from '../img/freq_vaga.png'; // Importa a imagem de frequência por vaga
import freqMatriculaImage from '../img/freq_matricula.png'; // Importa a imagem de frequência por matrícula
import esperadosImage from '../img/esperados.png'; // Importa a imagem de alunos esperados
import professoresImage from '../img/professores.png'; // Importa a imagem de professores
import atendidosImage from '../img/atendidos.png'; // Importa a imagem de alunos atendidos

// Define um contêiner para os cartões
const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    max-width: 1200px; /* Define uma largura máxima para o contêiner */
    height: 60vh;
    align-self: flex-end;
`;

export default function Dashboard() {
    // Define o estado para armazenar os dados
    const [dados, setDados] = useState([]);
    // Obtém a localização atual da rota
    const location = useLocation();
    // Obtém os parâmetros de consulta da URL
    const queryParams = new URLSearchParams(location.search);
    // Obtém o ID da oficina dos parâmetros de consulta
    const oficinaId = queryParams.get('turmaId');

    // Carrega os dados quando o componente monta
    useEffect(() => {
        async function carregarDados() {
            try {
                // Obtém os dados do serviço
                const dados = await fetchDados();
                // Define os dados no estado
                setDados(dados);
            } catch (error) {
                // Trata erros, como exibindo uma mensagem de erro para o usuário
                console.error('Ocorreu um erro:', error);
            }
        }

        // Chama a função para carregar os dados
        carregarDados();
    }, []);

    // Filtra os dados para mostrar apenas os da oficina com o ID correspondente
    const dadosOficina = dados.filter(dado => dado.turmaId === parseInt(oficinaId));

    // Renderiza os cartões com base nos dados filtrados
    return (
        <CardsContainer>
            {/* Renderiza os cartões para os alunos esperados */}
            {dadosOficina.map(dado => (
                <CardComponent
                    key={dado.turmaId}
                    numero={dado.esperados}
                    texto="Esperados"
                    imagem={esperadosImage}
                />
            ))}
            {/* Renderiza os cartões para os alunos atendidos */}
            {dadosOficina.map(dado => (
                <CardComponent
                    key={dado.turmaId}
                    numero={dado.atendidos}
                    texto="Atendidos"
                    imagem={atendidosImage}
                />
            ))}
            {/* Renderiza os cartões para os professores */}
            {dadosOficina.map(dado => (
                <CardComponent
                    key={dado.turmaId}
                    numero={dado.professores}
                    texto="Professores"
                    imagem={professoresImage}
                />
            ))}
            {/* Renderiza os cartões para a frequência por vaga */}
            {dadosOficina.map(dado => (
                <CardComponent
                    key={dado.turmaId}
                    numero={dado.esperados}
                    texto="Frequência por vaga"
                    imagem={freqVagaImage}
                />
            ))}
            {/* Renderiza os cartões para a frequência por matrícula */}
            {dadosOficina.map(dado => (
                <CardComponent
                    key={dado.turmaId}
                    numero={dado.freqMatricula}
                    texto="Frequência por Matrícula"
                    imagem={freqMatriculaImage}
                />
            ))}
            {/* Renderiza os cartões para a evasão */}
            {dadosOficina.map(dado => (
                <CardComponent
                    key={dado.turmaId}
                    numero={dado.esperados}
                    texto="Evasão"
                    imagem={evasaoImage}
                />
            ))}
        </CardsContainer>
    );
}
