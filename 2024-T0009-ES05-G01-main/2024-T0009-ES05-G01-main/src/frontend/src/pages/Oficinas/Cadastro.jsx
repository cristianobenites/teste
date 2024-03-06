import { Form as CustomForm } from '../../components/Form';
import { Passo } from '../../components/Passo';
import { Form, Input, Select } from 'antd';
import api from '../../api';
import { useNavigate } from 'react-router-dom';

const { Item } = Form;

export default function CadastroOficina() {
    const navigate = useNavigate();
    const handleFinalStep = (formData) => {
        console.log('Dados do formulário para enviar:', formData);
        api
            .post('/beneficiados', formData)
            .then(() => {
                alert('Beneficiado cadastrado com sucesso!');
                navigate('/beneficiados');
            })
            .catch((error) => {
                alert('Erro ao enviar os dados para a API: ' + error.message);
            });
    };

    return (
        <section className="container mx-auto min-h-[60vh]">
            <h1 className="text-3xl font-bold mb-4">Cadastro de Beneficiado</h1>
            <p className="mb-8 text-gray-600">
                Preencha os campos abaixo para cadastrar o beneficiado na plataforma.
            </p>
            <CustomForm
                etapas={4}
                onFinalStep={handleFinalStep}
                stepTitles={['Identificação', 'Demografia', 'Detalhes Socioeconômicos', 'Endereço']}
            >
                <Passo>
                    <Item name="nome" label="Nome completo">
                        <Input placeholder="Nome completo" />
                    </Item>
                    <Item name="email" label="E-mail">
                        <Input type="email" placeholder="E-mail" />
                    </Item>
                    <Item name="senha" label="Senha">
                        <Input.Password placeholder="Senha" />
                    </Item>
                    <Item name="perfil" label="Perfil">
                        <Select
                            showSearch
                            placeholder="Selecione o tipo de perfil de usuário"
                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            <Select.Option value="Beneficiado">Beneficiado</Select.Option>
                        </Select>
                    </Item>
                    <Item name="rg" label="RG">
                        <Input placeholder="RG" />
                    </Item>
                    <Item name="cpf" label="CPF">
                        <Input placeholder="CPF" />
                    </Item>
                    <Item name="dataNascimento" label="Data de nascimento">
                        <Input type="date" placeholder="Data de nascimento" />
                    </Item>
                    <Item name="telefone" label="Número de telefone">
                        <Input type="tel" placeholder="Número de telefone" />
                    </Item>
                </Passo>

                <Passo>
                    <Item name="estadoCivil" label="Estado civil">
                        <Select
                            showSearch
                            placeholder="Selecione o estado civil"
                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            <Select.Option value="Solteiro(a)">Solteiro(a)</Select.Option>
                            <Select.Option value="Casado(a)">Casado(a)</Select.Option>
                            <Select.Option value="Divorciado(a)">Divorciado(a)</Select.Option>
                            <Select.Option value="Viúvo(a)">Viúvo(a)</Select.Option>

                        </Select>
                    </Item>

                    <Item name="etnia" label="Etnia">
                        <Select
                            showSearch
                            placeholder="Selecione a etnia"
                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            <Select.Option value="Branco(a)">Branco(a)</Select.Option>
                            <Select.Option value="Negro(a)">Negro(a)</Select.Option>
                            <Select.Option value="Indígena">Indígena</Select.Option>
                            <Select.Option value="Asiático(a)">Asiático(a)</Select.Option>
                            <Select.Option value="Outro">Outro</Select.Option>
                        </Select>
                    </Item>
                    <Item name="identidade" label="Identidade">
                        <Select
                            showSearch
                            placeholder="Selecione a identidade"
                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            <Select.Option value="Mulher-cis">Mulher cis</Select.Option>
                            <Select.Option value="Mulher-trans">Mulher Transgênero</Select.Option>
                            <Select.Option value="Homem-cis">Homem cis</Select.Option>
                            <Select.Option value="Homem-trans">Homem Transgênero</Select.Option>
                            <Select.Option value="Gênero neutro">Gênero neutro</Select.Option>
                            <Select.Option value="Não-binário">Não-binário</Select.Option>
                            <Select.Option value="Agênero">Agênero</Select.Option>
                        </Select>
                    </Item>
                    <Item name="nacionalidade" label="Nacionalidade">
                        <Select
                            showSearch
                            placeholder="Selecione a identidade"
                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            <Select.Option value="Brasil">Brasil</Select.Option>
                            <Select.Option value="Argentina">Argentina</Select.Option>
                            <Select.Option value="Colômbia">Colômbia</Select.Option>
                            <Select.Option value="Venezuela">Venezuela</Select.Option>
                            <Select.Option value="Chile">Chile</Select.Option>
                            <Select.Option value="Peru">Peru</Select.Option>
                            <Select.Option value="Síria">Síria</Select.Option>
                            <Select.Option value="Afeganistão">Afeganistão</Select.Option>
                            <Select.Option value="Sudão">Sudão</Select.Option>
                            <Select.Option value="Myanmar (Birmânia)">Myanmar (Birmânia)</Select.Option>
                            <Select.Option value="Somália">Somália</Select.Option>
                            <Select.Option value="Palestina">Palestina</Select.Option>
                            <Select.Option value="Nigéria">Nigéria</Select.Option>
                            <Select.Option value="Iraque">Iraque</Select.Option>
                            <Select.Option value="Eritreia">Eritreia</Select.Option>
                            <Select.Option value="Sri Lanka">Sri Lanka</Select.Option>
                            <Select.Option value="Congo">Congo</Select.Option>
                            <Select.Option value="Líbia">Líbia</Select.Option>
                            <Select.Option value="Sudão do Sul">Sudão do Sul</Select.Option>
                            <Select.Option value="Outro">Outro</Select.Option>
                        </Select>
                    </Item>
                    <Item name="Naturalidade" label="Naturalidade">
                        <Input placeholder="Naturalidade" />
                    </Item>

                </Passo>

                <Passo>
                    <Item name="rendaFamiliar" label="Renda familiar">
                        <Input placeholder="Renda familiar" />
                    </Item>
                    <Item name="ocupacaoProfissao" label="Ocupação/profissão">
                        <Input placeholder="Ocupação/profissão" />
                    </Item>
                    <Item name="nivelEscolaridade" label="Nível de escolaridade">
                        <Select
                            showSearch
                            placeholder="Selecione o nível de escolaridade"
                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            <Select.Option value="fundamental">Fundamental</Select.Option>
                            <Select.Option value="medio">Médio</Select.Option>
                            <Select.Option value="superior">Superior</Select.Option>
                            <Select.Option value="pos-graduacao">Pós-graduação</Select.Option>
                        </Select>
                    </Item>
                </Passo>

                <Passo>
                    <Item name="cep" label="CEP">
                        <Input placeholder="CEP" />
                    </Item>
                    <Item name="logradouro" label="Logradouro">
                        <Input placeholder="Logradouro" />
                    </Item>
                    <Item name="numero" label="Número">
                        <Input placeholder="Número" />
                    </Item>
                    <Item name="complemento" label="Complemento">
                        <Input placeholder="Complemento" />
                    </Item>
                    <Item name="bairro" label="Bairro">
                        <Input placeholder="Bairro" />
                    </Item>
                    <Item name="cidade" label="Cidade">
                        <Input placeholder="Cidade" />
                    </Item>
                    <Item name="estado" label="Estado">
                        <Input placeholder="Estado" />
                    </Item>
                </Passo>
            </CustomForm>
        </section >
    );
}
