import React from 'react';
import Header from '../../components/Header';
import Button from '../../components/Button';

import { 
  Column,
  Container, 
  CriarText, 
  EsqueciText, 
  SubTitleLogin, 
  Row, 
  Title, 
  TitleLogin, 
  Wrapper
} from './styles';
import Input from '../../components/Input';
import { MdEmail, MdLock } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';


function Login() {

  const navigate = useNavigate();

  const handleClickSignIn = () => {
    navigate('/feed');
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
              <form>
                <Input placeholder={"E-mail"} leftIcon={<MdEmail />}/>
                <Input placeholder={"Senha"} type={"password"} leftIcon={<MdLock />}/>
                <Button title={"Entrar"} type="button" variant='secondary' onClick={handleClickSignIn}/>
              </form>
              <Row>
                <EsqueciText>Esqueci minha senha</EsqueciText>
                <CriarText>Criar Conta</CriarText>
              </Row>
            </Wrapper>

          </Column>
      </Container>
    </>
  )
}

export default Login