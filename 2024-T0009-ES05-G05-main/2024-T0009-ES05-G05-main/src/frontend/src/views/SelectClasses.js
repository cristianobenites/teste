import React, { useState, useEffect } from 'react'; // Importa o React e os hooks useState e useEffect
import styled from 'styled-components'; // Importa o módulo styled-components para estilização
import AddClassPopup from '../components/AddClassPopup'; // Importa o componente AddClassPopup
import { fetchClasses } from '../services/selectClassService'; // Importa a função fetchClasses do serviço selectClassService
import { useNavigate } from 'react-router-dom'; // Importa useNavigate para navegação programática

// Componente estilizado ContainerSelectClasses
const ContainerSelectClasses = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-self: flex-end;
`;

// Componente estilizado ContainerSearchAndOrder
const ContainerSearchAndOrder = styled.div`
    display: flex;
    justify-content: space-between;
    width: 89%;
`;

// Componente estilizado ContainerSearchBar
const ContainerSearchBar = styled.div`
    display: flex;
    align-items: center;
    width: 70%;
`;

// Componente estilizado SearchBar
const SearchBar = styled.input`
    background-color: #d9d9d9;
    font-family: 'Be Vietnam Pro', sans-serif;
    font-color: #fff;
    height: 8%;
    width: 100%;
    padding: 14px 40px 14px 14px;
    border-radius: 100px;
    box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.2);
    border: 1.25px solid white;
    &::placeholder {
        color: #999;
        font-style: bold;
    }
`;

// Componente estilizado ClassList
const ClassList = styled.ul`
    list-style: none;
    padding: 10px;
    margin: 20px 0;
    width: 90%;
    max-height: 37vh;
    overflow-y: auto;
`;

// Componente estilizado ClassItem
const ClassItem = styled.li`
    display: flex;
    justify-content: space-between;
    font-family: 'Be Vietnam Pro', sans-serif;
    font-size: 12px;
    align-items: center;
    padding: 10px 20px;
    margin: 10px 0;
    background-color: ${({ active }) => (active ? '#e8e8e8' : '#fff')};
    border-radius: 100px;
    border: 1.25px solid black;
    cursor: pointer;
`;

// Componente estilizado AddClassButton
const AddClassButton = styled.button`
    padding: 10px 20px;
    height: 40px;
    width: 130px;
    font-family: 'Be Vietnam Pro', sans-serif;
    font-size: 12px;
    align-self: end;
    margin-right: 50px;
    align-items: center;
    color: white;
    background-color: #2f3192;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    &:hover {
        background-color: #23256e;
    }
`;

// Componente funcional SelectClasses
const SelectClasses = ({ handleClassItemClick }) => {
    const [classes, setClasses] = useState([]); // Estado para armazenar as classes
    const [showPopup, setShowPopup] = useState(false); // Estado para controlar a exibição do popup de adição de classe
    const [selectedClassId, setSelectedClassId] = useState(null); // Estado para armazenar o ID da classe selecionada
    const navigate = useNavigate(); // Inicializa useNavigate para navegação programática

    // Efeito para carregar as classes ao montar o componente
    useEffect(() => {
        async function fetchData() {
            try {
                const data = await fetchClasses(); // Busca as classes utilizando a função fetchClasses
                setClasses(data); // Atualiza o estado com as classes obtidas
            } catch (error) {
                console.error('An error occurred while fetching data:', error); // Exibe um erro caso ocorra algum problema na obtenção dos dados
            }
        }

        fetchData(); // Chama a função fetchData para buscar as classes ao montar o componente
    }, []);

    // Função para exibir o popup de adição de classe
    const handleAddClass = () => {
        setShowPopup(true);
    };

    // Função para fechar o popup de adição de classe
    const handleClosePopup = () => {
        setShowPopup(false);
    };

    // Função para lidar com o clique em uma classe
    const handleClassItemClickInternal = (turmaId, aulaId) => {
        setSelectedClassId(turmaId); // Atualiza o estado com o ID da classe selecionada
        handleClassItemClick(turmaId, aulaId); // Chama a função de callback fornecida pelo componente pai

        const queryParams = new URLSearchParams(window.location.search); // Cria um novo objeto URLSearchParams com os parâmetros da URL
        queryParams.append('aulaId', aulaId); // Adiciona o parâmetro aulaId à URL

        navigate(`${window.location.pathname}?${queryParams.toString()}`); // Navega para a nova URL com os parâmetros adicionados
    };

    return (
        <ContainerSelectClasses>
            <ContainerSearchAndOrder>
                <ContainerSearchBar>
                    <SearchBar placeholder="Pesquisar aulas" />
                </ContainerSearchBar>
            </ContainerSearchAndOrder>
            <ClassList>
                {/* Mapeia as classes e renderiza cada uma delas */}
                {classes.map((classItem, index) => (
                    <ClassItem
                        key={index}
                        active={selectedClassId === classItem.turmaId} // Define se a classe está ativa com base no ID da classe selecionada
                        onClick={() => handleClassItemClickInternal(classItem.turmaId, classItem.aulaId)} // Ao clicar em uma classe, chama a função de callback
                    >
                        {classItem.className} {/* Exibe o nome da classe */}
                    </ClassItem>
                ))}
            </ClassList>
            <AddClassButton onClick={handleAddClass}>Adicionar aula</AddClassButton> {/* Botão para adicionar uma nova classe */}
            {showPopup && <AddClassPopup onClose={handleClosePopup} />} {/* Renderiza o popup de adição de classe se showPopup for verdadeiro */}
        </ContainerSelectClasses>
    );
};

export default SelectClasses; // Exporta o componente SelectClasses
