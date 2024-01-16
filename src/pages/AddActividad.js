import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

const AddActividad = () => {
  // Estado para almacenar los datos del formulario de la actividad
  const [formData, setFormData] = useState({
    nombre: '',
    responsable: '',
    fechaInicio: '',
    fechaFin: '',
    imagen: null,
  });

  // Estado para almacenar las actividades
  const [actividades, setActividades] = useState([]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'imagen' ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Crea un nuevo objeto de actividad con los datos del formulario
    const nuevaActividad = {
      id: actividades.length + 1, // Puedes generar un id de manera más robusta
      ...formData,
    };

    // Actualiza el estado de actividades con la nueva actividad
    setActividades((prevActividades) => [...prevActividades, nuevaActividad]);

    // Guarda las actividades en localStorage
    localStorage.setItem('actividades', JSON.stringify([...actividades, nuevaActividad]));

    // Limpia los datos del formulario
    setFormData({
      nombre: '',
      responsable: '',
      fechaInicio: '',
      fechaFin: '',
      imagen: null,
    });
  };

  return (
    <Container>
      <Card className='px-4 my-5'>
        <Row className="px-4 my-5">
          <Col sm={3}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Nombre de la Actividad</Form.Label>
                <Form.Control type="text" name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Actividad" />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicSelect'>
                <Form.Label>Selecciona a Responsable</Form.Label>
                <Form.Select aria-label="Default select example" name="responsable" value={formData.responsable} onChange={handleChange}>
                  <option>Selecciona</option>
                  <option value="1">Victor Hugo</option>
                  <option value="2">Rafael Osorio</option>
                  <option value="3">Antonio Dominguez</option>
                  <option value="4">Juan Carlos Bodoque</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicDate">
                <Form.Label>Fecha de Inicio</Form.Label>
                <Form.Control type="date" name="fechaInicio" value={formData.fechaInicio} onChange={handleChange} placeholder="Selecciona una Fecha" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicDate">
                <Form.Label>Fecha de Fin</Form.Label>
                <Form.Control type="date" name="fechaFin" value={formData.fechaFin} onChange={handleChange} placeholder="Selecciona una Fecha" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Imagen de la Actividad</Form.Label>
                <Form.Control type="file" accept="image/png" name="imagen" onChange={handleChange} />
              </Form.Group>
              <Link to={{ pathname: '/actividades' }}>
                <Button variant='primary' onClick={handleSubmit}>Crear</Button>
              </Link>
            </Form>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default AddActividad;
