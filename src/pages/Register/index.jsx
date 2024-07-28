import React from 'react';
import Header from '../../components/Header';
import Button from '../../components/Button';

import { 
  Column,
  Container, 
  SubTitleLogin, 
  Title, 
  TitleLogin, 
  Wrapper,
  AgreementTerm,
  HasText,
} from './styles';
import Input from '../../components/Input';
import { MdEmail, MdLock, MdOutlinePerson } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { api } from '../../services/api'


const schema = yup
  .object({
    name: yup.string().min(2, 'No minimo 2 caracteres').required('Campo obrigatorio'),
    email: yup.string().email('Email não é valido').required('Campo obrigatorio'),
    password: yup.string().min(3, 'No minimo 3 caracteres').required('Campo obrigatorio'),
  })
  .required()


function Register() {

  const navigate = useNavigate();


  const { control, handleSubmit, formState:{errors, isValid}} = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });
  console.log(isValid, errors);
  const onSubmit = async formData => {
    try {
      const { data } = await api.post(`/users`, {email: formData.email, name: formData.name, password: formData.password});
      if(data){
        navigate('/login');
      }
    } catch (error) {
        console.log("Houve um erro, tente novamente:" + error);
    }
  };

  const toLoginPage = () => {
    navigate('/login');
  }

  return (
    <>
      <Header />
      <Container>
          <Column>
              <Title>
                A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
              </Title>
          </Column>
          <Column>
            <Wrapper>
              <TitleLogin>Comece agora grátis</TitleLogin>
              <SubTitleLogin>Crie sua conta e make the change._</SubTitleLogin>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Input errorMessage={ errors.name?.message} control={control} name={"name"} placeholder={"Nome completo"} leftIcon={<MdOutlinePerson />}/>
                <Input errorMessage={ errors.email?.message} control={control} name={"email"} placeholder={"E-mail"} leftIcon={<MdEmail />}/>
                <Input errorMessage={ errors.password?.message} control={control} name={"password"} placeholder={"Senha"} type={"password"} leftIcon={<MdLock />}/>
                <Button title={"Criar minha conta"} type="submit" variant='secondary'/>
              </form>
              <Column>
                <AgreementTerm>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</AgreementTerm>
                <HasText>Já tenho conta. <button onClick={toLoginPage} type={"button"}>Fazer login</button></HasText>
              </Column>
            </Wrapper>

          </Column>
      </Container>
    </>
  )
}

export default Register