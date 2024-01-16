import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const AddProyecto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    responsable: '',
    fechaInicio: '',
    fechaFin: '',
    imagen: null,
  });

  const [proyectos, setProyectos] = useState([]); // Array local para almacenar los proyectos

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'imagen' ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Crea un nuevo proyecto con los datos del formulario
    const nuevoProyecto = {
      id: proyectos.length + 1, // Puedes generar un id de manera más robusta
      ...formData,
    };

    // Actualiza el array local de proyectos
    setProyectos((prevProyectos) => [...prevProyectos, nuevoProyecto]);

    // Guarda los proyectos en localStorage
  localStorage.setItem('proyectos', JSON.stringify([...proyectos, nuevoProyecto]));

    // Limpia los datos del formulario
    setFormData({
      nombre: '',
      responsable: '',
      fechaInicio: '',
      fechaFin: '',
      imagen: null,
    });

    // Imprime en la consola el array local de proyectos
    window.location.href = '/proyectos';
    console.log(proyectos);
  };

	return (
		<Container>
			<Card className='px-4 my-5'>
      <Row className="px-4 my-5">
				<Col sm={3}>
					<Form>
						<Form.Group className="mb-3" controlId="formBasicText">
							<Form.Label>Nombre del Proyecto</Form.Label>
							<Form.Control type="text" name="nombre" value={formData.nombre}
                  onChange={handleChange} placeholder="Proyecto" />
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
							<Form.Control type="date" placeholder="Selecciona una Fecha" name="fechaInicio" value={formData.fechaInicio} onChange={handleChange}/>
						</Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDate">
							<Form.Label>Fecha de Fin</Form.Label>
							<Form.Control type="date" placeholder="Selecciona una Fecha" name="fechaFin" value={formData.fechaFin} onChange={handleChange}/>
						</Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
							<Form.Label>Imagen del Proyecto</Form.Label>
							<Form.Control type="file" accept="image/png" name="imagen" onChange={handleChange}/>
						</Form.Group>
            
            <Button variant='primary' onClick={handleSubmit}>Crear</Button>
 
					</Form>
				</Col>
			</Row>
      </Card>
		</Container>
	);
};

export default AddProyecto;
