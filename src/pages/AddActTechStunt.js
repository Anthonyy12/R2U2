import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

const AddActTechStunt = ({ onCrearActividad }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: '',
    responsable: '',
    fechaInicio: '',
    fechaFin: '',
    imagenUrl: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevaActividad = {
      id: Date.now(),
      ...formData,
    };

    // Llamar a la función proporcionada por la prop onCrearActividad
    if (onCrearActividad) {
      onCrearActividad(nuevaActividad);
    }

    setFormData({
      nombre: '',
      responsable: '',
      fechaInicio: '',
      fechaFin: '',
      imagenUrl: '',
    });

    // Imprimir datos en consola
    console.log('Nueva Actividad en TechStunt:', nuevaActividad);

    // Navegar a la página de actividades en TechStunt
    navigate('/act-techstunt');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Nombre de la Actividad</Form.Label>
        <Form.Control type="text" name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Actividad" />
      </Form.Group>
      <Form.Group className='mb-3' controlId='formBasicSelect'>
        <Form.Label>Selecciona a Responsable</Form.Label>
        <Form.Select aria-label='Default select example' name='responsable' value={formData.responsable} onChange={handleChange}>
          <option>Selecciona</option>
          <option value='1'>Victor Hugo</option>
          <option value='2'>Rafael Osorio</option>
          <option value='3'>Antonio Dominguez</option>
          <option value='4'>Juan Carlos Bodoque</option>
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
      <Button type="submit">Crear</Button>
    </Form>
  );
};

export default AddActTechStunt;
