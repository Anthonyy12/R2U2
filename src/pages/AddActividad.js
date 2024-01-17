import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';

const AddActividad = () => {
  const navigate = useNavigate();
  // Estado para almacenar los datos del formulario de la actividad
  const [formData, setFormData] = useState({
    nombre: '',
    responsable: '',
    fechaInicio: '',
    fechaFin: '',
    imagenUrl: '', // Cambiado a imagenUrl
  });

  // Estado para almacenar las actividades
  const [actividades, setActividades] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Crea un nuevo objeto de actividad con los datos del formulario
    const nuevaActividad = {
      id: actividades.length + 1,
      ...formData,
    };

    // Actualiza el estado de actividades con la nueva actividad
    setActividades((prevActividades) => [...prevActividades, nuevaActividad]);

    // Guarda las actividades en localStorage
    const updatedActividades = [...actividades, nuevaActividad];
    localStorage.setItem('actividades', JSON.stringify(updatedActividades));

    // Limpia los datos del formulario
    setFormData({
      nombre: '',
      responsable: '',
      fechaInicio: '',
      fechaFin: '',
      imagenUrl: '', // Cambiado a imagenUrl
    });

    // Imprime los datos en la consola
    console.log('Nueva Actividad:', nuevaActividad);
    console.log('Actividades Actualizadas:', updatedActividades);

    navigate('/proyectos')
  };
  // Imprime los datos del formulario en la consola al cambiar
  console.log('FormData:', formData);

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
                <Form.Label>URL de la Imagen</Form.Label>
                <Form.Control type="text" name="imagenUrl" value={formData.imagenUrl} onChange={handleChange} placeholder="Ingrese la URL de la imagen" />
              </Form.Group>        
                  <Button variant='primary' onClick={handleSubmit}>Crear</Button>

            </Form>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default AddActividad;
