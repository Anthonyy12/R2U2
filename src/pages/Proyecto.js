import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

const Proyecto = () => {
	return (
		<Container>
			<Row className="px-4 my-5">
				<Col>
					<h1>Proyectos</h1>
				</Col>
			</Row>
			<Row>
				<Col className="px-2 my-2">
					<Card style={{ width: '20rem' }}>
						<Card.Img src="../../img/proyecto1.png" variant="top"/>
						<Card.Body>
							<Card.Title style={{ textAlign: 'center'}}>TechStunt</Card.Title>
							<Card.Text style={{ textAlign: 'center'}}>
								Victor Hugo
								<br />
								2024-01-16
								<br />
								2024-07-01
							</Card.Text>
							<Link to={{ pathname: '/act-techstunt' }}>
								<Button variant="outline-primary">
									Ver Actividades
								</Button>
							</Link>
						</Card.Body>
					</Card>
				</Col>

				<Col className="px-2 my-2">
					<Card style={{ width: '20rem' }}>
						<Card.Img src="../../img/proyecto2.jpg" variant="top" />
						<Card.Body>
							<Card.Title style={{ textAlign: 'center'}}>EchoDust</Card.Title>
							<Card.Text style={{ textAlign: 'center'}}>
								Marcos Osorio
								<br />
								2024-05-11
								<br />
								2024-07-21
							</Card.Text>
							<Link to={{ pathname: '/act-echodust' }}>
								<Button variant="outline-primary">
									Ver Actividades
								</Button>
							</Link>
						</Card.Body>
					</Card>
				</Col>

				<Col className="px-2 my-2">
					<Card style={{ width: '20rem' }}>
						<Card.Img src="../../img/proyecto3.png" variant="top" />
						<Card.Body>
							<Card.Title style={{ textAlign: 'center'}}>Vintich</Card.Title>
							<Card.Text style={{ textAlign: 'center'}}>
								Juan Carlos Bodoque
								<br />
								2024-09-10
								<br />
								2024-03-09
							</Card.Text>
							<Link to={{ pathname: '/act-vintich' }}>
								<Button variant="outline-primary">
									Ver Actividades
								</Button>
							</Link>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default Proyecto;
