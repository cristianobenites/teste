import { StyledCadastroAlunoPopUp, StyledForm } from './styles';
import { Form, Input, DatePicker, message, Select, Button } from 'antd';
import React from 'react';
import { createAluno } from '../../services/alunosService';

const { Option } = Select;

export const CadastroAlunoPopUp = ({
  visible,
  onClose,
  turmaId,
  refetchAlunosInscritos,
}) => {
  const [form] = Form.useForm();

  const validateMessages = {
    required: '${label} é obrigatório',
    types: {
      email: '${label} não é um email válido',
    },
  };

  const handleSubmit = async (values) => {
    try {
      console.log(values)
      const formattedValues = {
        ...values,
        dataNasc: values.dataNasc.format('DD/MM/YYYY'),
        idTurma: [turmaId],
      };
      await createAluno(formattedValues);
      message.success('Aluno cadastrado e inscrito com sucesso!');
      form.resetFields();
      refetchAlunosInscritos();
      onClose();
    } catch (error) {
      message.error('Erro ao cadastrar aluno: ' + error.message);
    }
  };

  return (
    <StyledCadastroAlunoPopUp
      title="Cadastro de Aluno"
      open={visible}
      onCancel={onClose}
    >
      <StyledForm
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        validateMessages={validateMessages}
      >
        <StyledForm.Item name="nome" label="Nome" rules={[{ required: true }]}>
          <Input />
        </StyledForm.Item>
        <StyledForm.Item
          name="email"
          label="Email"
          rules={[{ required: true, type: 'email' }]}
        >
          <Input />
        </StyledForm.Item>
        <StyledForm.Item name="cpf" label="CPF">
          <Input />
        </StyledForm.Item>
        <StyledForm.Item name="rg" label="RG">
          <Input />
        </StyledForm.Item>
        <StyledForm.Item
          name="dataNasc"
          label="Data de Nascimento"
          rules={[{ required: true }]}
        >
          <DatePicker format="DD/MM/YYYY" />
        </StyledForm.Item>
        <StyledForm.Item name="raca" label="Raça" rules={[{ required: true }]}>
          <Select>
            <Option value="branca">Branca</Option>
            <Option value="preta">Preta</Option>
            <Option value="parda">Parda</Option>
            <Option value="amarela">Amarela</Option>
            <Option value="indigena">Indígena</Option>
            <Option value="naoInformado">Prefiro não informar</Option>
          </Select>
        </StyledForm.Item>
        <StyledForm.Item
          name="genero"
          label="Gênero"
          rules={[{ required: true }]}
        >
          <Select>
            <Option value="masculino">Masculino</Option>
            <Option value="feminino">Feminino</Option>
            <Option value="outro">Outro</Option>
            <Option value="naoInformado">Prefiro não informar</Option>
          </Select>
        </StyledForm.Item>
        <StyledForm.Item
          name="estadoCivil"
          label="Estado Civil"
          rules={[{ required: true }]}
        >
          <Select>
            <Option value="solteiro">Solteiro(a)</Option>
            <Option value="casado">Casado(a)</Option>
            <Option value="divorciado">Divorciado(a)</Option>
            <Option value="viuvo">Viúvo(a)</Option>
            <Option value="separado">Separado(a)</Option>
            <Option value="naoInformado">Prefiro não informar</Option>
          </Select>
        </StyledForm.Item>
        <StyledForm.Item name="endereco" label="Endereço">
          <Input />
        </StyledForm.Item>
        <StyledForm.Item name="telefone" label="Telefone">
          <Input />
        </StyledForm.Item>
        <StyledForm.Item name="celular" label="Celular">
          <Input />
        </StyledForm.Item>
        <StyledForm.Item name="responsavel" label="Responsável">
          <Input />
        </StyledForm.Item>
        <StyledForm.Item>
          <Button className='button-cancel' key="back" type="primary" onClick={onClose}>
            Cancelar
          </Button>
          <Button className='button-add' key="submit" type="primary" htmlType="submit" >
            Adicionar
          </Button>
        </StyledForm.Item>
      </StyledForm>
    </StyledCadastroAlunoPopUp>
  );
};
