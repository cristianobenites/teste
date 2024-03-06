// Este arquivo representa a página inicial da aplicação.

// Importações necessárias para o funcionamento da página
import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";
import CardHome from "../components/CardHome";
import { useNavigate } from 'react-router-dom'; // Importação do hook useNavigate para navegação programática
import { fetchOficinas } from '../services/homeService'; // Importa o serviço fetchOficinas para buscar dados das oficinas

// Estilo para o corpo da página
const StyledBody = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #F5F5F5;
  min-height: 100vh;
  width: 100%;
`;

// Largura da barra lateral
const SidebarWidth = '20%';

// Estilo para o cabeçalho da página
const PageHeader = styled.div`
  width: 100%;
  padding: 50px;
  padding-left: calc(${SidebarWidth} + 200px);
  font-family: 'Be Vietnam Pro Bold', sans-serif;
  font-size: 32px;
  font-weight: bold;
  color: ${props => (props.showModal ? 'transparent' : '#333')};
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
`;

// Contêiner para os cards das oficinas
const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: ${SidebarWidth};
  width: calc(100% - ${SidebarWidth});
  padding: 100px;
  gap: 30px;
  box-sizing: border-box;
  padding-top: 0px;
  position: relative;
`;

// Contêiner para o botão de adicionar oficina
const ButtonContainer = styled.div`
  flex: 1 0 calc(25% - 40px);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
  position: relative;
`;

// Botão de adicionar oficina
const AddButton = styled.button`
  top: 10px;
  position: relative;
  left: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #E0E0E0;
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  font-size: 24px;
`;

// Componente da página inicial
const Home = () => {
  // Hook useNavigate para navegação programática
  const navigate = useNavigate();
  // Estado para armazenar os dados das oficinas
  const [workshopsData, setWorkshopsData] = useState([]);

  // Efeito para carregar os dados das oficinas ao montar o componente
  useEffect(() => {
    async function loadWorkshops() {
      try {
        // Busca os dados das oficinas
        const workshops = await fetchOficinas();
        // Atualiza o estado com os dados obtidos
        setWorkshopsData(workshops);
      } catch (error) {
        console.error('Erro ao carregar oficinas:', error);
      }
    }
    loadWorkshops();
  }, []);

  // Função para lidar com o clique em um card de oficina
  const handleCardClick = (workshopId) => {
    // Navega para a página de informações da oficina com o ID da oficina na URL
    navigate(`/info?turmaId=${workshopId}`);
  };

  return (
    <StyledBody>
      {/* Renderiza a barra lateral */}
      <Sidebar />
      {/* Renderiza o cabeçalho da página */}
      <PageHeader>Oficinas</PageHeader>
      {/* Renderiza os cards das oficinas */}
      <CardsContainer>
        {/* Renderiza o botão de adicionar oficina */}
        <ButtonContainer>
          <AddButton>+</AddButton>
        </ButtonContainer>
        {/* Mapeia e renderiza os cards das oficinas */}
        {workshopsData.map(workshop => (
          <CardHome
            key={workshop.turmaId}
            title={workshop.title}
            icon={workshop.icon}
            onClick={() => handleCardClick(workshop.turmaId)} // Passa o ID da oficina ao clicar no card
          />
        ))}
      </CardsContainer>
      {/* Renderiza o rodapé */}
      <Footer />
    </StyledBody>
  );
};

export default Home;
