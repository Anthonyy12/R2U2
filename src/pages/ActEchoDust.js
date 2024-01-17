import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import AddActEchoDust from './AddActEchoDust';

const ActEchoDust = () => {
	const [actividades, setActividades] = useState([]);
  const [formData, setFormData] = useState({
    nombre: '',
    responsable: '',
    fechaInicio: '',
    fechaFin: '',
    imagenUrl: '',
  });
  const [showModal, setShowModal] = useState(false);

  // Estructura de datos para asociar identificadores con nombres de responsables
  const responsablesData = {
    '1': 'Victor Hugo',
    '2': 'Rafael Osorio',
    '3': 'Antonio Dominguez',
    '4': 'Juan Carlos Bodoque',
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCrearActividad = (nuevaActividad) => {
    // Asigna el nombre del responsable en lugar del valor
    nuevaActividad.responsable = responsablesData[nuevaActividad.responsable];

    // Agrega la nueva actividad al estado de actividades
    setActividades((prevActividades) => [...prevActividades, nuevaActividad]);

    // Limpia los datos del formulario
    setFormData({
      nombre: '',
      responsable: '',
      fechaInicio: '',
      fechaFin: '',
      imagenUrl: '',
    });

    // Cierra el modal después de crear la actividad
    handleCloseModal();
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Container>
      <Row className="px-4 my-5">
        <Col className="px-2 my-2">
          <h1>Proyecto: EchoDust</h1>
					<br/>
					<h5>Responsable: Marcos Osorio</h5>
					<br/>
					<h6>Fecha de Inicio: 2024-05-11</h6>
					<h6>Fecha de Finalización: 2024-07-21</h6>
        </Col>
        <Row className="px-4 my-5">
          <Col>
            <h3>Actividades</h3>
          </Col>
          <Col>
            <Link to={{ pathname: '/proyectos' }}>
              <Button variant="secondary">Ver Proyectos</Button>
            </Link>
          </Col>
          <Col>
            {/* Botón para abrir el modal */}
            <Button variant="primary" onClick={handleShowModal}>
              Crear Actividad
            </Button>
          </Col>
        </Row>
      </Row>
      <Row>
        {/* Renderizar la lista de actividades */}
        {actividades.map((actividad) => (
          <Col key={actividad.id} className="px-2 my-2">
            <Card style={{ width: '20rem' }}>
              {actividad.imagenUrl && <Card.Img src={actividad.imagenUrl} variant="top" />}
              <Card.Body>
                <Card.Title style={{ textAlign: 'center' }}>{actividad.nombre}</Card.Title>
                <Card.Text style={{ textAlign: 'center' }}>
                  Responsable: {actividad.responsable}
                  <br />
                  Fecha Inicio: {actividad.fechaInicio}
                  <br />
                  Fecha Fin: {actividad.fechaFin}
                </Card.Text>
                <Link to={{ pathname: '/subact-echodust' }}>
                  <Button variant="outline-primary">Ver SubActividades</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal para la creación de actividades */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Crear Actividad</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Renderizar el componente AddActTechStunt dentro del modal */}
          <AddActEchoDust onCrearActividad={handleCrearActividad} />
        </Modal.Body>
      </Modal>
    </Container>
  )
}

export default ActEchoDust