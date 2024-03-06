import React, { createContext, useContext, useState } from 'react';

// Criação do contexto de autenticação
const AuthContext = createContext({});

// Provedor de autenticação
export const AuthProvider = ({ children }) => {
  // Estado de autenticação inicial com userId e roleId como nulos
  const [auth, setAuth] = useState({ userId: null, roleId: null });

  // Função para fazer login, atualiza o estado de autenticação
  const login = (userId, roleId) => {
    setAuth({ userId, roleId });
  };

  // Retorna o contexto de autenticação com o estado de autenticação e a função de login
  return (
    <AuthContext.Provider value={{ ...auth, login }}>
      {children} {/* Renderiza os componentes filhos */}
    </AuthContext.Provider>
  );
};

// Hook personalizado para acessar o contexto de autenticação
export const useAuth = () => useContext(AuthContext);
