import React from 'react';
import Header from '../../components/Header';
import { Column, Container, Title, TitleHighlight } from './styles';
import Card from '../../components/Card';
import UserInfo from '../../components/UserInfo';


function Feed() {
  return (
    <>
      <Header autenticado={true}/>
      <Container>
          <Column flex={3}>
            <Title>Feed</Title>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </Column>
          <Column flex={1}>
            <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
            <UserInfo percentual={35} nome={"charles viegas"} image={"https://avatars.githubusercontent.com/u/62218302?s=400&u=f5381cd9f7aa06bfa7fabab31447e83b551fe66c&v=4"}/>
            <UserInfo percentual={60} nome={"charles viegas"} image={"https://avatars.githubusercontent.com/u/62218302?s=400&u=f5381cd9f7aa06bfa7fabab31447e83b551fe66c&v=4"}/>
            <UserInfo percentual={70} nome={"charles viegas"} image={"https://avatars.githubusercontent.com/u/62218302?s=400&u=f5381cd9f7aa06bfa7fabab31447e83b551fe66c&v=4"}/>
            <UserInfo percentual={95} nome={"charles viegas"} image={"https://avatars.githubusercontent.com/u/62218302?s=400&u=f5381cd9f7aa06bfa7fabab31447e83b551fe66c&v=4"}/>

          </Column>
      </Container>
    </>
  )
}

export default Feed