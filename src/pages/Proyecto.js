import React, {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import AddProyecto from './AddProyecto';

const Proyecto = () => {
  // Estado para almacenar los proyectos
  const [proyectos, setProyectos] = useState([]);

  useEffect(() => {
    // Verifica si hay proyectos en localStorage y úsalos si están disponibles
    const storedProyectos = localStorage.getItem('proyectos');
    if (storedProyectos) {
      setProyectos(JSON.parse(storedProyectos));
    }
  }, []);

  // Función para manejar la creación de un nuevo proyecto
  const handleProyectoCreado = (nuevoProyecto) => {
    // Actualiza el estado de proyectos con el nuevo proyecto
    setProyectos((prevProyectos) => [...prevProyectos, nuevoProyecto]);
  };

	return (
		<Container>
			<Row className="px-4 my-5">
				<Col>
					<h1>Proyectos</h1>
				</Col>
        <Col>
          <Link to={{ pathname: '/crear-proyecto' }}>
							<Button variant="primary">
									Crear Proyecto
							</Button>
					</Link>
        </Col>
			</Row>
			<Row>
        {proyectos.map((proyecto) => (
          <Col key={proyecto.id} className="px-2 my-2">
					<Card style={{ width: '12rem' }}>
						<Card.Img src={proyecto.imagen} variant="top" />
						<Card.Body>
							<Card.Title>{proyecto.nombre}</Card.Title>
							<Card.Text>
								{proyecto.responsable}
								<br />
								{proyecto.fechaInicio}
								<br />
								{proyecto.fechaFin}
							</Card.Text>
							<Link to={{ pathname: '/actividades' }}>
								<Button variant="outline-primary">
									Ver Actividades &gt;&gt;
								</Button>
							</Link>
						</Card.Body>
					</Card>
				</Col>
        ))}
			</Row>
      <AddProyecto onProyectoCreado={handleProyectoCreado}/>
		</Container>
	);
};

export default Proyecto;
