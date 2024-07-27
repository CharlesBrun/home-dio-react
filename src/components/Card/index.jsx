import React from 'react';
import { 
    CardContainer, 
    Content, 
    HasInfo, 
    ImageBackground, 
    PostInfo, 
    UserInfo, 
    UserPicture 
} from './styles';
import { FiThumbsUp } from 'react-icons/fi';
import ImgCard from '../../assets/img-card.png'

const Card = () => {
  return (
    <CardContainer>
        <ImageBackground src={ImgCard} alt='imagem card'/>
        <Content>
            <UserInfo>
                <UserPicture src='https://avatars.githubusercontent.com/u/62218302?s=400&u=f5381cd9f7aa06bfa7fabab31447e83b551fe66c&v=4' alt='imagem avatar'/>
                <div>
                    <h4>Pablo Henrique</h4>
                    <p>Há 8 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para curso de HTML e CSS</h4>
                <p>Projeto feito no curso de html e css no bootcamp da dio do Global avanade... <strong>Ver Mais</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #Javascript</h4>
                <p>
                    <FiThumbsUp /> 10
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}

export default Card