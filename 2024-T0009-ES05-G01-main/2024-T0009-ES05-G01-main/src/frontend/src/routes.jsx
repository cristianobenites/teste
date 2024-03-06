import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/Auth';
import Login from './pages/Login';
import Hero from './pages/Hero';
import Beneficiados from './pages/Beneficiados/Beneficiados';
import Page from './components/Page';
import Ongs from './pages/Ongs/Ongs';
import Ong from './pages/Ongs/Ong';
import Professores from './pages/Professores/Professores';
import CadastroOng from './pages/Ongs/Cadastro';
import CadastroBeneficiado from './pages/Beneficiados/Cadastro';
import CadastroOficina from './pages/Oficinas/Cadastro';
import NotFound from './pages/404';
import Oficinas from './pages/Oficinas';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* para cada rota, repetir a linha abaixo com o respectivo elemento da página */}
          <Route
            path="/"
            element={
              <Page>
                <Hero />
              </Page>
            }
          />

          <Route path="/login" element={<Login />} />

          <Route
            path="/ongs/:id/beneficiados"
            element={
              <Page>
                <Beneficiados />
              </Page>
            }
          />

          <Route
            path="/ongs/:id/professores"
            element={
              <Page>
                <Professores />
              </Page>
            }
          />

          <Route
            path="/ongs"
            element={
              <Page>
                <Ongs />
              </Page>
            }
          />

          <Route
            path="/ongs/cadastro"
            element={
              <Page>
                <CadastroOng />
              </Page>
            }
          />


          <Route
            path="/ongs/:id"
            element={
              <Page>
                <Ong />
              </Page>
            }
          />

          <Route
            path="/beneficiados/cadastro"
            element={
              <Page>
                <CadastroBeneficiado />
              </Page>
            }
          />

          <Route
            path="/oficinas"
            element={
              <Page>
                <Oficinas />
              </Page>
            }
          />

          <Route
            path="/oficinas/cadastro"
            element={
              <Page>
                <CadastroOficina />
              </Page>
            }
          />

          <Route
            path="*"
            element={
              <Page>
                <NotFound />
              </Page>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
