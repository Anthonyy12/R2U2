import {
	Authenticator,
	Image,
	Text,
	View,
	useTheme,
} from '@aws-amplify/ui-react';
import './App.css';
import '@aws-amplify/ui-react/styles.css';
import { Route, Routes } from 'react-router-dom';
import Footer from './pages/Footer'
import Home from './pages/Home';
import NavSite from './pages/NavSite'
import Proyecto from './pages/Proyecto';
import Actividad from './pages/Actividad'
import AddProyecto from './pages/AddProyecto';
import AddActividad from './pages/AddActividad';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
Amplify.configure(awsExports);

function App() {
  const components = {
		Header() {
			const { tokens } = useTheme();
			return (
				<View textAlign="center" padding={tokens.space.large}>
					<Image alt="Gestor de Proyectos" src="../img/logo.jpg" />
				</View>
			);
		},
		Footer() {
			const { tokens } = useTheme();
			return (
				<View textAlign="center" padding={tokens.space.large}>
					<Text color={tokens.colors.neutral[80]}>
						&copy; Derechos reservados de Antonio :D
					</Text>
				</View>
			);
		},
	};

  return (
    <Authenticator loginMechanism={['email']} components={components}>
      {({ signOut, user}) => (
        <div>
          <NavSite logout={signOut} />
					<Routes>
						<Route path="*" element={<Home/>} />
						<Route path="/" exact={true} element={<Home/>} />
						<Route path="/proyectos" element={<Proyecto />} />
            <Route path="/crear-proyecto" element={<AddProyecto />} />
            <Route path="/actividades" element={<Actividad />} />
            <Route path="/crear-actividad" element={<AddActividad />} />
					</Routes>
					<Footer />
        </div>
      )}
    </Authenticator>
  );
}

export default App;
