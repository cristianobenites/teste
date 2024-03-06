import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import edit from '../img/edit.png';
import calendar from '../img/calendar.png';
import check from '../img/check.png';
import nocheck from '../img/no-check.png';
import { useLocation } from 'react-router-dom';

// Define o estilo para o contêiner principal da página de adicionar aulas
const ContainerAddClass = styled.div`
    display: flex;
    width: 100%;
    height: 90%;
    align-self: flex-end; 
    flex-direction: column;
`;

// Define o estilo para o título da aula
const ClassTitle = styled.div`
    display: flex;
    width: 100%;
    height: 10%;
    flex-direction: row;
    align-self: flex-start;
`;

// Define o estilo para o nome da aula
const ClassName = styled.h1`
    font-family: 'Be Vietnam Pro Extra Bold', sans-serif;
    font-size: 18px; 
    margin-left: 6%;
    align-self: center;
`;

// Define o estilo para o ícone de edição
const Edit = styled.img`
    width: 1.2%;
    height: 2.4vh;
    align-self: flex-end; 
    margin-left: 2%;
    cursor: pointer;
    align-self: center;
`;

// Define o estilo para o contêiner da data da aula
const DateContainer = styled.div`
    display: flex;
    width: 100%;
    height: 6%;
    flex-direction: row;
    align-self: flex-start;
`;

// Define o estilo para o ícone de calendário
const Calendar = styled.img`
    width: 1.2%;
    height: 2.4vh;
    margin-bottom: 0.5%;
    margin-left: 6%;
    align-self: center; 
`;

// Define o estilo para a data da aula
const Date = styled.h1`
    font-family: 'Be Vietnam Pro', sans-serif;
    font-size: 12px; 
    margin-left: 0.6%;
    align-self: center; 
`;

// Define o estilo para o contêiner dos professores
const TeacherContainer = styled.div`
    display: flex;
    width: 100%;
    height: 6%;
    flex-direction: row;
    align-self: flex-start;
`;

// Define o estilo para o título "Professores"
const Teacher = styled.h1`
    font-family: 'Be Vietnam Pro Bold', sans-serif;
    font-weight: 600;
    font-size: 12px; 
    margin-left: 6%;
`;

// Define o estilo para o nome do professor
const TeacherName = styled.h1`
    font-family: 'Be Vietnam Pro', sans-serif;
    font-size: 12px; 
    margin-left: 0.6%;
    font-weight: 500;
`;

// Define o estilo para o contêiner da turma
const ClassContainer = styled.div`
    display: flex;
    width: 100%;
    height: 6%;
    flex-direction: row;
    align-self: flex-start;
`;

// Define o estilo para o título "Turma"
const Class = styled.h1`
    font-family: 'Be Vietnam Pro Bold', sans-serif;
    font-weight: 600;
    font-size: 12px; 
    margin-left: 6%;
`;

// Define o estilo para o horário da turma
const ClassTime = styled.h1`
    font-family: 'Be Vietnam Pro', sans-serif;
    font-size: 12px; 
    margin-left: 0.6%;
    font-weight: 500;
`;

// Define o estilo para o contêiner da lista de presença
const PresenceList = styled.div`
    display: flex;
    width: 100%;
    height: 10%;
    flex-direction: row;
    align-self: flex-start;
`;

// Define o estilo para o título "Lista de Presença"
const ListName = styled.h1`
    font-family: 'Be Vietnam Pro Bold', sans-serif;
    font-size: 18px; 
    margin-left: 6%;
`;

// Define o estilo para o contêiner dos estudantes
const StudentsContainer = styled.div`
    display: flex;
    width: 100%;
    height: 45%;
    flex-direction: column;
    align-self: flex-start;
`;

const StudentDiv = styled.div`
    height: 5vh;
    width: 90%;
    background-color: white;
    border-radius: 100px;
    border: 1px solid black;
    display: flex;
    flex-direction: row;
    align-self: center;
    margin-top: 1%;
`;

// Define o estilo para o contêiner de rolagem dos estudantes
const ScrollableDiv = styled.div`
    display: flex;
    flex-direction: column;
    max-height: 100%; 
    overflow-y: auto; 
    justify-content: space-between;
    margin-right: 4%;

    scrollbar-width: thin;
    scrollbar-color: black white;    
`;

// Define o estilo para o nome do estudante
const StudentName = styled.h1`
    font-family: 'Be Vietnam Pro', sans-serif;
    font-size: 12px; 
    margin-left: 2%;
    font-weight: 500;
    font-color: #3C4043;
    width: 5%;
    margin-right: 80%;
`;

// Define o estilo para o ícone de check
const CheckIcon = styled.img`
    width: 15px;
    height: 15px;
`;

// Define o estilo para o ícone de check dentro do contêiner
const Check = styled(CheckIcon)`
    display: flex;
    align-self: center;
`;

// Define o estilo para o ícone de não check
const NoCheck = styled(CheckIcon)`
    display: flex;
    align-self: center;
`;

const RoundCheckbox = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 2px solid black;
  position: relative;
  margin: 1%;
  align-self: center;
  
  &:before {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    background-color: black;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity:${props => props.checked ? '1' : '0'};
    transition : opacity .3s ease-in-out; 
  }
`;

// Define o valor padrão da propriedade checked como false
RoundCheckbox.defaultProps = {
    checked : false,
}

// Cria um componente que contém dois checkbox redondos
function TwoRoundCheckboxes({ student, isPresent, isAbsent, togglePresence }) {
    const handleClick = (isChecked) => {
        togglePresence(student.id, isChecked);
    };
    
    return (
        <StudentDiv>
            <StudentName>{student.name}</StudentName>
    
            <Check src={check} alt="Check" />
            {isPresent}
            <RoundCheckbox
                onClick={() => handleClick(true)}
                checked={isPresent}
            />
            <NoCheck src={nocheck} alt="NoCheck" />
            {isAbsent}
            <RoundCheckbox
                onClick={() => handleClick(false)}
                checked={isAbsent}
            />
           
        </StudentDiv>
    );
}

// Define o estilo para o contêiner dos botões
const ButtomContainer = styled.div`
    display: flex;
    width: 100%;
    height: 12%;
    flex-direction: row;
    justify-content: flex-end;
    align-self: flex-end;
`;

// Define o estilo para o botão "Voltar"
const ButtonBack = styled.button`
  background-color: white;
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 14px;
  color: black;
  border-radius: 100px;
  border: 1px solid black;
  cursor: pointer;
  width: 10%;
  height: 65%;
  align-self: center;
  margin-right: 2%;
  margin-top: 1%;
`;

// Define o estilo para o botão "Salvar"
const ButtonSave = styled.button`
  background-color: #2F3192;
  color: white;
  font-size: 14px;
  font-family: 'Be Vietnam Pro', sans-serif;
  border-radius: 100px;
  border: 1px solid black;
  cursor: pointer;
  width: 10%;
  height: 65%;
  align-self: center;
  margin-right: 2%;
  margin-top: 1%;
`;

// Componente principal para adicionar aulas
export default function AddClasses({ setActiveItem, setSelectedLessonId, setSelectClassesVisible}) {
    // Estado para armazenar os dados dos alunos
    const [studentsData, setStudentsData] = useState();
    // Estado para armazenar os dados da turma
    const [classData, setClassData] = useState();
    // Estado para armazenar a turma selecionada
    const [selectedClass, setSelectedClass] = useState();
    // Estado para armazenar os professores da turma
    const [professorsInClass, setProfessorsInClass] = useState();
    // Estado para armazenar os alunos presentes
    const [presences, setPresences] = useState([]);
    // Estado para armazenar os alunos ausentes
    const [absents, setAbsents] = useState([]);
    // Estado para armazenar os dados dos professores
    const [professorsData, setProfessorsData] = useState();

    // Obtém a localização atual
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams?.get('aulaId');

    // Função para obter os dados dos alunos
    const getStudentsData = async () => {
        try {
            const apiUrl = `${process.env.REACT_APP_API_URL}/students`
        
            const response = await fetch(apiUrl);
            setStudentsData(await response.json());
        } catch (err) {
            console.log('Erro:', err);
        }
    };
    

    useEffect(() => {
        getStudentsData();
    }, [])

    // Função para obter os dados da turma
    const getClassData = async () => {
        try {
            const apiUrl = `${process.env.REACT_APP_API_URL}/classes`
            
    
            const response = await fetch(apiUrl);
            setClassData(await response.json());
        } catch (err) {
            console.log('Erro:', err);
        }
    };
    

    useEffect(() => {
        getClassData();
    }, [])

    // Atualiza os professores na turma quando os dados da turma ou dos professores mudam
    useEffect(() => {
        if (classData, professorsData) {
            getProfessorsInClass();
        }
    }, [classData, professorsData])

    // Seleciona a turma com base no ID quando o ID da turma ou os dados da turma mudam
    useEffect(() => {
        if (id && classData) {
            const filteredClass = classData?.find((classToFind) => classToFind.aulaId == id);
            setSelectedClass(filteredClass);
        }
    }, [id, classData])

    // Função para obter os dados dos professores
    const getProfessorsData = async () => {
        try {
            const apiUrl = `${process.env.REACT_APP_API_URL}/teachers`
            
    
            const response = await fetch(apiUrl);
            setProfessorsData(await response.json());
        } catch (err) {
            console.log('Erro:', err);
        }
    };
    

    useEffect(() => {
        getProfessorsData();
    }, [])

    // Filtra os professores da turma selecionada
    function getProfessorsInClass() {
        const professorsInClass = professorsData.filter(professor => professor.turmaId == id);
        setProfessorsInClass(professorsInClass); 
    }

    // Alterna o estado de presença de um aluno
    const togglePresence = (studentId, isChecked) => {
        const studentName = studentsData?.find(student => student.id === studentId).name;
        if (isChecked) {
            setPresences(prev => [...prev, studentName])
            setAbsents(prev => prev.filter(name => name !== studentName))
        } else {
            setAbsents(prev => [...prev, studentName])
            setPresences(prev => prev.filter(name => name !== studentName))
        }
    };

    // Função para retornar o nome da turma com base no ID
    const getTurmaName = (turmaId) => {
        switch (turmaId) {
            case 1:
                return 'Turma 1';
            case 2:
                return 'Turma 2';
            case 3:
                return 'Turma 3';

            default:
                return `Turma ${turmaId}`;
        }
    };

    // Manipula o clique no botão "Salvar"
    const handleSaveClick = () => {
        saveClassData();
        setActiveItem('aulas');
        setSelectedLessonId(null);
        setSelectClassesVisible(true);
    };

    // Salva os dados da aula no banco de dados
    const saveClassData = () => {
        const data = {
            classId: selectedClass.turmaId,
            className: selectedClass.className,
            classDate: selectedClass.date,
            professors: professorsInClass,
            alunosPresentes: presences,
            alunosAusentes: absents  
        }
        console.log(data);
    };

    return (
        // Renderiza o contêiner principal da página de adicionar aulas
        <ContainerAddClass>
            {/* Renderiza o título da aula */}
            <ClassTitle>
                {/* Exibe o nome da aula */}
                <ClassName>{selectedClass?.className}</ClassName>
                {/* Exibe o ícone de edição */}
                <Edit src={edit} alt="Edit" /> 
            </ClassTitle>
            {/* Renderiza o contêiner da data da aula */}
            <DateContainer>
                {/* Exibe o ícone de calendário */}
                <Calendar src={calendar} alt="Calendar" />
                {/* Exibe a data da aula */}
                <Date>Data: {selectedClass?.date}</Date>
            </DateContainer>
            {/* Renderiza o contêiner dos professores */}
            <TeacherContainer>
                {/* Exibe o título "Professores" */}
                <Teacher>Professores:</Teacher>
                {/* Exibe os nomes dos professores */}
                <TeacherName>{professorsInClass?.map(professor => professor.name).join(', ')}</TeacherName>
            </TeacherContainer>
            {/* Renderiza o contêiner da turma */}
            <ClassContainer>
                {/* Exibe o título "Turma" */}
                <Class>Turma:</Class>
                {/* Exibe o nome da turma */}
                <ClassTime>{getTurmaName(selectedClass?.turmaId)}</ClassTime> 
            </ClassContainer>
            {/* Renderiza o contêiner da lista de presença */}
            <PresenceList>
                {/* Exibe o título "Lista de presença" */}
                <ListName>Lista de presença</ListName>
            </PresenceList>
            {/* Renderiza o contêiner dos estudantes */}
            <StudentsContainer>
                <ScrollableDiv>
                    {/* Mapeia e renderiza os componentes de checkbox para cada estudante */}
                    {studentsData?.filter(student => student.turmaId == id)
                        .map(student => (
                        <TwoRoundCheckboxes 
                            key={student.id} 
                            student={student} 
                            togglePresence={togglePresence}
                            isPresent={presences.includes(student.name)}
                            isAbsent={absents.includes(student.name)}
                        />
                        ))}
                </ScrollableDiv>
            </StudentsContainer>
            {/* Renderiza o contêiner dos botões */}
            <ButtomContainer>
                {/* Botão para voltar */}
                <ButtonBack>Voltar</ButtonBack>
                {/* Botão para salvar */}
                <ButtonSave onClick={handleSaveClick}>Salvar</ButtonSave>
            </ButtomContainer>
        </ContainerAddClass>
    );
}    