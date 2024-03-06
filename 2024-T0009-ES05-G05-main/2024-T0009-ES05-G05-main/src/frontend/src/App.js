import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/home';
import About from './views/about';
import LoginPage from './views/Login';
import InfoSection from './views/InfoSection';
import Dashboard from './views/dashboard';
import SelectClasses from './views/SelectClasses';
import AddClasses from './views/AddClasses';
import GlobalStyle from './GlobalStyle';

const App = () => {
    return (
        <Router>
            {/* Aplica estilos globais */}
            <GlobalStyle />
            <Routes>
                {/* Define as rotas para diferentes componentes */}
                <Route path="/" element={<LoginPage />} /> {/* Rota para a página de login */}
                <Route path="/home" element={<Home />} /> {/* Rota para a página inicial */}
                <Route path="/about" element={<About />} /> {/* Rota para a página "Sobre" */}
                <Route path="/info" element={<InfoSection />} /> {/* Rota para a seção de informações */}
                <Route path="/info/dashboard" element={<Dashboard />} /> {/* Rota para o dashboard na seção de informações */}
                <Route path="/info/select-classes" element={<SelectClasses />} /> {/* Rota para seleção de aulas na seção de informações */}
                <Route path="/info?turmaId=&aulaId=" element={<AddClasses />} /> {/* Rota para adição de aulas na seção de informações */}
            </Routes>
        </Router>
    );
};

export default App;
