import { createGlobalStyle } from 'styled-components'; // Importa a função createGlobalStyle do styled-components

// Cria um estilo global para a aplicação
export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0; // Remove a margem padrão do body
    padding: 0; // Remove o preenchimento padrão do body
    font-family: 'Open Sans', sans-serif; // Define a fonte padrão para o corpo do texto
  }
`;
