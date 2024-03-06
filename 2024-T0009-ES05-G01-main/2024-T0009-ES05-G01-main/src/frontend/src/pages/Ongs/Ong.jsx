import api from '../../api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CoverImage from '../../components/CoverImage';
import BlogCard from '../../components/BlogCard';

export default function Ong() {
  const params = useParams();
  const ongId = params.id;

  const [ong, setOng] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await api.get(`/ongs/${ongId}`);
      console.log(response.data);
      setOng(response.data.ong);
    }
    fetchData();
  }, [ongId]);

  return (
    <section className="flex flex-col items-center gap-8 pb-12">
      <CoverImage
        titulo={ong?.nome}
        imagem={ong?.imagem}
        descricao={ong?.descricao}
      />
      <div className="flex justify-between w-full gap-8 lg:flex-row flex-col">
        <BlogCard
          titulo="Beneficiados"
          descricao="Veja todos os beneficiados associados a esta ONG."
          link={`/ongs/${ongId}/beneficiados`}
        />
        <BlogCard
          titulo="Professores"
          descricao="Veja todas os professores / facilitadores associados a esta ONG."
          link={`/ongs/${ongId}/professores`}
        />
      </div>
    </section>
  );
}
