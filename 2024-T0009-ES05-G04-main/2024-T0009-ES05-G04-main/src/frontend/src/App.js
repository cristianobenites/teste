import React, { createContext } from 'react'; // Importa o React e a função createContext
import { GlobalStyle } from './styles/GlobalStyle.js'; // Importa o estilo global da aplicação
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importa o BrowserRouter, Routes e Route do react-router-dom
import { AuthProvider } from './context/AuthContext'; // Importa o provedor de autenticação
import { Login } from './pages/Login/Login.jsx'; // Importa a página de Login
import { Turmas } from './pages/professor/Turmas/Turmas.jsx'; // Importa a página de Turmas
import { ProximasAulas } from './pages/professor/ProximasAulas/ProximasAulas.jsx'; // Importa a página de Próximas Aulas
import { DetalhesTurma } from './pages/professor/DetalhesTurma/DetalhesTurma.jsx'; // Importa a página de Detalhes da Turma

// Cria um contexto para a aplicação
export const AppContext = createContext();

// Componente principal da aplicação
function App() {
  return (
    <>
      <GlobalStyle /> {/* Aplica o estilo global */}
      <AuthProvider> {/* Provedor de autenticação */}
        <Router> {/* Define as rotas da aplicação */}
          <Routes> {/* Define as rotas */}
            <Route path="/" element={<Login />} /> {/* Rota para a página de Login */}
            <Route path="/turmas" element={<Turmas />} /> {/* Rota para a página de Turmas */}
            <Route path="/aulas/:idTurma" element={<DetalhesTurma />} /> {/* Rota para a página de Detalhes da Turma */}
            <Route path="/proximas-aulas" element={<ProximasAulas />} /> {/* Rota para a página de Próximas Aulas */}
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App; // Exporta o componente principal da aplicação
