import React from 'react';
import Header from '../../components/Header';
import Button from '../../components/Button';

import { 
  Column,
  Container, 
  EsqueciText, 
  SubTitleLogin, 
  Row, 
  Title, 
  TitleLogin, 
  Wrapper,
  RedirectButton
} from './styles';
import Input from '../../components/Input';
import { MdEmail, MdLock } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { api } from '../../services/api'


const schema = yup
  .object({
    email: yup.string().email('Email não é valido').required('Campo obrigatorio'),
    password: yup.string().min(3, 'No minimo 3 caracteres').required('Campo obrigatorio'),
  })
  .required()


function Login() {

  const navigate = useNavigate();


  const { control, handleSubmit, formState:{errors, isValid}} = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });
  console.log(isValid, errors);
  const onSubmit = async formData => {
    try {
      const { data } = await api.get(`/users?email=${formData.email}&senha=${formData.password}`)
      if(data.length === 1){
        navigate('/feed');
      }
    } catch (error) {
        console.log("Houve um erro, tente novamente:" + error);
    }
  };

  const toRegisterPage = () => {
    navigate('/register');
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
              <TitleLogin>Faça seu cadastro</TitleLogin>
              <SubTitleLogin>Faça seu login e make the change._</SubTitleLogin>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Input errorMessage={ errors.email?.message} control={control} name={"email"} placeholder={"E-mail"} leftIcon={<MdEmail />}/>
                <Input errorMessage={ errors.password?.message} control={control} name={"password"} placeholder={"Senha"} type={"password"} leftIcon={<MdLock />}/>
                <Button title={"Entrar"} type="submit" variant='secondary'/>
              </form>
              <Row>
                <EsqueciText>Esqueci minha senha</EsqueciText>
                <RedirectButton onClick={toRegisterPage} type={"button"}>Criar Conta</RedirectButton>
              </Row>
            </Wrapper>

          </Column>
      </Container>
    </>
  )
}

export default Login