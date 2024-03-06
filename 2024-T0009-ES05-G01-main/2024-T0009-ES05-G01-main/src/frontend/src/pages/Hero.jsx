export default function Hero() {
  const heroText =
    'Somos um ecossistema de desenvolvimento social, que atua em rede para acelerar o poder de impacto de líderes em favelas do Brasil, e tem como missão transformar a pobreza das favelas em peça de museu.';

  return (
    <div className="h-screen p-8 flex flex-col justify-between items-center sm:flex-row">
      <div className="my-4 w-[80%] sm:w-[40%] flex flex-col content-start ">
        <h1 className="w-[80%] text-4xl font-bold mb-4 text-left">
          Rede Gerando Falcões
        </h1>
        <p className="text-xl text-left mb-8">{heroText}</p>
        <button className="bg-black hover:bg-gray-800 text-white font-bold py-3 px-4 rounded w-1/2">
          Ver rede
        </button>
      </div>
      <img
        className="my-4 w-[90%] sm:w-[50%]"
        src="https://cvee2f.p3cdn1.secureserver.net/wp-content/uploads/2022/05/ONG-gerando-falcoes.png?time=1709113929"
        alt=""
      />
    </div>
  );
}
