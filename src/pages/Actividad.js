import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

const Actividad = () => {
  // Estado para almacenar las actividades
  const [actividades, setActividades] = useState([]);

  useEffect(() => {
    // Verifica si hay actividades en localStorage y úsalas si están disponibles
    const storedActividades = localStorage.getItem('actividades');
    if (storedActividades) {
      setActividades(JSON.parse(storedActividades));
    }
  }, []);

  return (
    <Container>
      <Row className="px-4 my-5">
        <Col>
          <h1>Actividades</h1>
        </Col>
        <Col>
          <Link to={{ pathname: '/proyectos' }}>
            <Button variant="secondary">
              Ver Proyectos
            </Button>
          </Link>
        </Col>
        <Col>
          <Link to={{ pathname: '/crear-actividad' }}>
            <Button variant="primary">
              Crear Actividad
            </Button>
          </Link>
        </Col>
      </Row>
      <Row>
        {actividades.map((actividad) => (
          <Col key={actividad.id} className="px-2 my-2">
            <Card style={{ width: '12rem' }}>
              <Card.Img src={actividad.imagen} variant="top" />
              <Card.Body>
                <Card.Title>{actividad.nombre}</Card.Title>
                <Card.Text>
                  {actividad.responsable}
                  <br />
                  {actividad.fechaInicio}
                  <br />
                  {actividad.fechaFin}
                </Card.Text>
                <Link to={{ pathname: '/actividades' }}>
                  <Button variant="outline-primary">
                    Ver SubActividades &gt;&gt;
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Actividad;
