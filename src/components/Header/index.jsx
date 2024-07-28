import React from 'react'
import Button from '../Button';
import logo from '../../assets/logo-dio.png'
import { 
    BuscarInputContainer, 
    Container, 
    Input, 
    Menu, 
    MenuRight, 
    Row, 
    UserPicture, 
    Wrapper,
    StyledLink
} from './styles'


const Header = ({autenticado}) => {
  return (
    <Wrapper>
        <Container>
            <Row>
                <StyledLink to={'/'}>
                    <img src={logo} alt='logo da dio'/>
                </StyledLink>
                {autenticado?(
                    <>
                        <BuscarInputContainer>
                            <Input placeholder='Buscar...'/>
                        </BuscarInputContainer>

                        <Menu>Live Code</Menu>
                        <Menu>Global</Menu>
                    </>
                ):null}
            </Row>
            <Row>
                {autenticado?(
                    <UserPicture src={"https://avatars.githubusercontent.com/u/62218302?s=400&u=f5381cd9f7aa06bfa7fabab31447e83b551fe66c&v=4"}/>
                ):                    
                (<>
                    <StyledLink to={'/'}>
                        <MenuRight href='/'>Home</MenuRight>
                    </StyledLink>
                    <StyledLink to={'/login'}>
                        <Button type={"button"} title="Entrar" />
                    </StyledLink>
                    <StyledLink to={'/register'}>
                        <Button type={"button"} title="Cadastrar" />
                    </StyledLink>
                </>)}
            </Row>
        </Container>
    </Wrapper>
  )
}

export default Header