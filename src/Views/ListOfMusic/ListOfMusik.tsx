import React from 'react'
import { BaseLayout } from '../../Components/BaseLayout'
import { MusicList } from '../../Components/ListOfMusic'
import { Header } from '../../Components/Header'
import { Tittles } from '../../Components/Tittle'
import { Container } from '../../Components/Container'
import ImgsListOfCard from '../../ImgsListOfCards'
import { PlayCircleOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import Titles from '../../Components/Tittle/Tittle'

function ListOfMusik() {
  return (
    <BaseLayout >
    <Header/>
    {/* <Titles>
      Hello
    </Titles> */}
    <Container $background='rgb(1 23 45)'justify='space-start'>
      <ImgsListOfCard/>
      <Button
            type="default"
            shape="circle"
            style={{ marginTop: "20px" }}
            icon={<PlayCircleOutlined width="500px" />}
          />
      <h2 style={{
              color: "white"}}>Name songs</h2>

    
      
    </Container>
    <MusicList/>
    </BaseLayout>
  )
}

export default ListOfMusik