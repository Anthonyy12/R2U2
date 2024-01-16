import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <Container>
      <Row className='px-4 my-5'>
        <Col xs={4} sm={6}>
          <Image src='../img/logo.jpg' fluid/>
        </Col>
        <Col sm={6}>
          <h1 className='font-weight-light'>Proyectos</h1>
          <p className='mt-4'>
            Bienvenido
            <br></br>
            Para poder visualizar los proyectos existentes o si deseas crear uno nuevo da clic en el botón que se encuentra debajo
          </p>
          <Link to={{pathname:'/proyectos'}}>
            <Button variant='outline-primary'>Ver Proyectos &gt;&gt;</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  )
}

export default Home