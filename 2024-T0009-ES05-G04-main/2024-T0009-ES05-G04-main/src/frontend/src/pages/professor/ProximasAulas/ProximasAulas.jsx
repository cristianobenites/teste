import React from 'react'; // Importa a biblioteca React
import { Header } from '../../../components/layout/Header/Header'; // Importa o componente Header
import { AlunosPopUp } from '../../../components/AlunosPopUp/AlunosPopUp'; // Importa o componente AlunosPopUp

// Componente funcional ProximasAulas
export const ProximasAulas = () => {
  // Lista de itens de menu para o Header
  const menuProfessor = [
    { name: 'Turmas', path: '/turmas' },
    { name: 'Próximas Aulas', path: '/proximas-aulas' },
  ];

  // Retorna a renderização do Header e do AlunosPopUp
  return (
    <>
      <Header menuItems={menuProfessor} /> {/* Renderiza o Header com os itens de menu */}
      <AlunosPopUp></AlunosPopUp> {/* Renderiza o AlunosPopUp */}
    </>
  );
};

