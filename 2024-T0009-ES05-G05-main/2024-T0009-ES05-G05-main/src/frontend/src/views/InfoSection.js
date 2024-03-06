// Importações necessárias
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import arrowLeft from '../img/arrow_left.png'; // Importa a seta para a esquerda
import SelectClasses from './SelectClasses'; // Importa o componente SelectClasses
import AddClasses from './AddClasses'; // Importa o componente AddClasses
import Dashboard from './dashboard'; // Importa o componente Dashboard
import Footer from '../components/Footer'; // Importa o componente Footer
import Sidebar from '../components/Sidebar'; // Importa o componente Sidebar
import { useNavigate } from 'react-router-dom'; // Importa o hook useNavigate para navegação programática
import { useLocation } from 'react-router-dom'; // Importa o hook useLocation para obter informações da localização atual

// Estilo para o corpo da página
const StyledBody = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F5F5F5;
    width: 100%;
    height: 100vh;
    position: fixed;
`;

// Container principal da página
const ContainerPage = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 100%;
    height: 100vh;
`;

// Seção de dados da página
const DataSection = styled.div`
    display: flex;
    width: 80%;
    height: 94%;
    justify-content: center;
    align-items: center;
`;

// Container para as oficinas
const WorkshopContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 90%;
    height: 80%;
    background-color: white;
    border-radius: 16px;
    box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.2);
    flex-direction: column;
`;

// Estilização da seta para a esquerda
const ArrowLeft = styled.img`
    width: 1%;
    height: 3vh;
    margin-right: 4%;
    margin-left: 4%;
    cursor: pointer;
`;

// Container para o menu de navegação
const ContainerMenu = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 1%;
`;

// Menu de navegação
const Menu = styled.div`
    height: 80%;
    width: 85%;
    background-color: white;
    border-radius: 100px;
    box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

// Item de menu
const MenuItem = styled.li`
    margin: 10px;
    list-style-type: none;
    cursor: pointer;
    font-family: 'Be Vietnam Pro Extra Bold', sans-serif;
    font-weight: 800;
    font-size: 12px;
    color: ${(props) => (props.active ? '#3C4043' : '#999999')};
`;

// Componente que representa a seção de informações da página
const InfoSection = () => {
    // Hook useNavigate para navegação programática
    const navigate = useNavigate();
    // Hook useLocation para obter informações da localização atual
    const location = useLocation();
    // Estado para armazenar o item ativo do menu
    const [activeItem, setActiveItem] = useState('dados');
    // Estado para armazenar o ID da turma selecionada
    const [selectedClassId, setSelectedClassId] = useState(null);
    // Estado para armazenar o ID da lição selecionada
    const [selectedLessonId, setSelectedLessonId] = useState(null);
    // Estado para controlar a visibilidade do componente SelectClasses
    const [selectClassesVisible, setSelectClassesVisible] = useState(true);

    // Efeito para atualizar o ID da turma selecionada quando a localização muda
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const turmaId = params.get('turmaId');
        setSelectedClassId(turmaId);
    }, [location]);

    // Função para lidar com o clique em um item de menu
    const handleMenuItemClick = (item, turmaId) => {
        setActiveItem(item);
        setSelectedLessonId(null);
        if (item === 'dados') {
            setSelectClassesVisible(true); // Garante que o componente SelectClasses seja visível ao voltar para 'dados'
            navigate(`/info?turmaId=${turmaId}`);
        }
    };

    // Função para lidar com o clique na seta para a esquerda
    const handleArrowClick = () => {
        navigate('/home');
    };

    // Função para lidar com o clique em um item de aula
    const handleClassItemClick = (turmaId, aulaId) => {
        setSelectedClassId(turmaId);
        setSelectedLessonId(aulaId);
        setActiveItem('aulas');
        setSelectClassesVisible(false);
    };

    return (
        <StyledBody>
            {/* Renderiza o rodapé */}
            <Footer />
            {/* Renderiza a barra lateral */}
            <Sidebar />
            {/* Renderiza o container principal */}
            <ContainerPage>
                {/* Renderiza a seção de dados */}
                <DataSection>
                    {/* Renderiza o container das oficinas */}
                    <WorkshopContainer>
                        {/* Renderiza o container do menu */}
                        <ContainerMenu>
                            {/* Renderiza a seta para a esquerda */}
                            <ArrowLeft src={arrowLeft} alt="Arrow Left" onClick={handleArrowClick} />
                            {/* Renderiza o menu de navegação */}
                            <Menu>
                                {/* Renderiza o item "Dados" */}
                                <MenuItem active={activeItem === 'dados'} onClick={() => handleMenuItemClick('dados', selectedClassId)}>
                                    Dados
                                </MenuItem>
                                {/* Renderiza o item "Aulas" */}
                                <MenuItem active={activeItem === 'aulas'} onClick={() => handleMenuItemClick('aulas')}>
                                    Aulas
                                </MenuItem>
                            </Menu>
                        </ContainerMenu>
                        {/* Renderiza o componente correspondente ao item ativo do menu */}
                        {activeItem === 'dados' ? (
                            <Dashboard />
                        ) : (
                            activeItem === 'aulas' && selectedClassId && selectedLessonId ? (
                                <AddClasses 
                                    setActiveItem={setActiveItem}
                                    setSelectedLessonId={setSelectedLessonId}
                                    setSelectClassesVisible={setSelectClassesVisible}
                                />
                            ) : (
                                // Renderiza o componente SelectClasses se selectClassesVisible for true
                                selectClassesVisible && (
                                    <SelectClasses handleClassItemClick={handleClassItemClick} />
                                )
                            )
                        )}
                    </WorkshopContainer>
                </DataSection>
            </ContainerPage>
        </StyledBody>
    );
};

// Exporta o componente InfoSection
export default InfoSection;
