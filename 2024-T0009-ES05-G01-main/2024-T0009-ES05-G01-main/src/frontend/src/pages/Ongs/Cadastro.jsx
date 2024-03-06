import { Form as CustomForm } from '../../components/Form';
import { Passo } from '../../components/Passo';
import { Form, Input, Select } from 'antd';
import api from '../../api';
import { useNavigate } from 'react-router-dom';

const { Item } = Form;

export default function CadastroONGForm() {
  const navigate = useNavigate();
  const handleFinalStep = (formData) => {
    console.log('Dados do formulário para enviar:', formData);
    api
      .post('/ongs', formData)
      .then(() => {
        alert('ONG cadastrada com sucesso!');
        navigate('/ongs');
      })
      .catch((error) => {
        alert('Erro ao enviar os dados para a API: ' + error.message);
      });
  };

  return (
    <section className="container mx-auto min-h-[60vh]">
      <h1 className="text-3xl font-bold mb-4">Cadastro de ONG</h1>
      <p className="mb-8 text-gray-600">
        Preencha os campos abaixo para cadastrar a sua ONG na plataforma.
      </p>
      <CustomForm
        etapas={2}
        onFinalStep={handleFinalStep}
        stepTitles={['Informações', 'Contato']}
      >
        <Passo>
          <Item name="nome" label="Nome da ONG">
            <Input placeholder="Nome da ONG" />
          </Item>
          <Item name="descricao" label="Descrição geral da ONG">
            <Input placeholder="Ex.: ONG dedicada a promover a solidariedade e ações humanitárias em todo o Brasil." />
          </Item>
          <Item name="cidade" label="Cidade">
            <Select
              showSearch
              placeholder="Selecione a cidade"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Select.Option value="sao-paulo">São Paulo</Select.Option>
              <Select.Option value="rio-de-janeiro">
                Rio de Janeiro
              </Select.Option>
              <Select.Option value="belo-horizonte">
                Belo Horizonte
              </Select.Option>
              <Select.Option value="brasilia">Brasília</Select.Option>
              <Select.Option value="salvador">Salvador</Select.Option>
              <Select.Option value="fortaleza">Fortaleza</Select.Option>
              <Select.Option value="manaus">Manaus</Select.Option>
              <Select.Option value="curitiba">Curitiba</Select.Option>
              <Select.Option value="recife">Recife</Select.Option>
              <Select.Option value="porto-alegre">Porto Alegre</Select.Option>
              <Select.Option value="goiania">Goiânia</Select.Option>
              <Select.Option value="belem">Belém</Select.Option>
              <Select.Option value="guarulhos">Guarulhos</Select.Option>
              <Select.Option value="campinas">Campinas</Select.Option>
              <Select.Option value="sao-luis">São Luís</Select.Option>
              <Select.Option value="sao-goncalo">São Gonçalo</Select.Option>
              <Select.Option value="maceio">Maceió</Select.Option>
              <Select.Option value="duque-de-caxias">
                Duque de Caxias
              </Select.Option>
              <Select.Option value="teresina">Teresina</Select.Option>
              <Select.Option value="natal">Natal</Select.Option>
              <Select.Option value="osasco">Osasco</Select.Option>
              <Select.Option value="sao-bernardo-do-campo">
                São Bernardo do Campo
              </Select.Option>
              <Select.Option value="campo-grande">Campo Grande</Select.Option>
              <Select.Option value="santo-andre">Santo André</Select.Option>
              <Select.Option value="joao-pessoa">João Pessoa</Select.Option>
              <Select.Option value="jaboatao-dos-guararapes">
                Jaboatão dos Guararapes
              </Select.Option>
              <Select.Option value="contagem">Contagem</Select.Option>
              <Select.Option value="sao-jose-dos-campos">
                São José dos Campos
              </Select.Option>
            </Select>
          </Item>
        </Passo>

        <Passo>
          <Item name="telefone" label="Telefone">
            <Input placeholder="Telefone para contato" />
          </Item>
          <Item name="email" label="E-mail" rules={[{ type: 'email' }]}>
            <Input placeholder="E-mail para contato" />
          </Item>
        </Passo>
      </CustomForm>
    </section>
  );
}
