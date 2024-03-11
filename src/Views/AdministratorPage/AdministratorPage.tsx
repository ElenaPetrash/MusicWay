import React from 'react'
import { Header } from '../../Components/Header'
import { BaseLayout } from '../../Components/BaseLayout'
import { Container } from '../../Components/Container'
import { Footer } from 'antd/es/layout/layout'

function AdministratorPage() {
  return (
    <Container>
        <BaseLayout>
        <Header/>
        <Footer/>
        </BaseLayout>
    </Container>
  )
}

export default AdministratorPage