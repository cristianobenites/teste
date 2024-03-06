import Tabela from '../../components/Tabela';
import Label from '../../components/Label';
import Cover from '../../components/Cover';
import { useParams } from 'react-router-dom';
import api from '../../api';
import { useEffect, useState } from 'react';

export default function Professores() {
  const { id } = useParams();

  const [professores, setProfessores] = useState([]);

  useEffect(() => {
    async function fetchProfessores() {
      const response = await api.get(`/professores/ongs/${id}`);
      setProfessores(response.data.professores);
    }

    fetchProfessores();
  }, [id]);

  if (professores.length === 0) {
    return (
      <main className="flex flex-col items-center min-h-screen w-full">
        <Cover titulo="Professores" />
        <section className="w-full">
          <div className="flex justify-end items-center">
            <button className="py-2 px-4 border-none rounded bg-black text-white cursor-pointer transition duration-300">
              <a href="/professores/cadastrar">Cadastrar</a>
            </button>
          </div>
          <div className="flex items-center justify-center w-full my-2">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="px-4">Professores</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          <div className="mt-4">
            <p className="text-center">Nenhum professor cadastrado</p>
          </div>
        </section>
      </main>
    );
  }

  function formatarOficinas(oficinas) {
    const oficinasFormatadas = oficinas.map((oficina) => {
      return (
        <Label key={oficina.nome} color={oficina.cor}>
          {oficina.nome}
        </Label>
      );
    });
    return oficinasFormatadas;
  }

  const cabecalhos = ['Nome', 'Idade', 'Oficinas Lecionadas', 'E-mail'];
  const linhas = professores.map((professor) => {
    return [
      professor.nome,
      professor.idade,
      formatarOficinas(professor.oficinas),
      professor.email,
    ];
  });

  return (
    <main className="flex flex-col items-center min-h-screen w-full">
      <Cover titulo="Professores" />
      <section className="w-full">
        <div className="flex justify-end items-center">
          <button className="py-2 px-4 border-none rounded bg-black text-white cursor-pointer transition duration-300">
            <a href="/professores/cadastrar">Cadastrar</a>
          </button>
        </div>
        <div className="flex items-center justify-center w-full my-2">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="px-4">Professores</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <div className="mt-4">
          <Tabela
            dados={{
              cabecalhos: cabecalhos,
              linhas: linhas,
            }}
          />
        </div>
      </section>
    </main>
  );
}
