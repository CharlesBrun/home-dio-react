import React from 'react'
import { NameText, Progress, UserInfoContainer, UserPicture } from './styles'

const UserInfo = ({nome, image, percentual}) => {
  return (
    <UserInfoContainer>
        <UserPicture src={image}/>
        <div>
            <NameText>{nome}</NameText>
            <Progress percentual={percentual}/>
        </div>
    </UserInfoContainer>
  )
}

export default UserInfo