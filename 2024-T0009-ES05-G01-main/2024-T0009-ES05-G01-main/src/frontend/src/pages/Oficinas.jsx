import SearchBar from '../components/SearchBar';
import Card from '../components/Card';
import oficinas from '../assets/static/oficinasMock.json';

export default function Oficinas() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center mb-4">Oficinas</h1>
      <div className="mb-4 flex justify-center">
        <SearchBar />
      </div>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10">
        {oficinas.map((oficina) => (
          <div key={oficina.titulo} className="flex justify-center mb-4">
            <Card
              imagem={oficina.imagem}
              titulo={oficina.titulo}
              descricao={oficina.descricao}
              className="my-4"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
