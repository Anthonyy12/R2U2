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
import ActTechStunt from './pages/ActTechStunt';
import ActEchoDust from './pages/ActEchoDust';
import ActVintich from './pages/ActVintich';
import AddActTechStunt from './pages/AddActTechStunt';
import AddActEchoDust from './pages/AddActEchoDust';
import AddActVintich from './pages/AddActVintich';
import SubActTechStunt from './pages/SubActTechStunt';
import AddSubActTech from './pages/AddSubActTech';
import SubActEcho from './pages/SubActEcho';
import AddSubActEcho from './pages/AddSubActEcho';
import SubActVintich from './pages/SubActVintich';
import AddSubActVintich from './pages/AddSubActVintich';
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
						<Route path='/act-techstunt' element={<ActTechStunt/>}/>
						<Route path='/act-echodust' element={<ActEchoDust/>}/>
						<Route path='/act-vintich' element={<ActVintich/>}/>

						<Route path='/crear-act-techstunt' element={<AddActTechStunt/>}/>
						<Route path='/crear-act-echodust' element={<AddActEchoDust/>}/>
						<Route path='/crear-act-vintich' element={<AddActVintich/>}/>
						<Route path='/crear-subact-techstunt' element={<AddSubActTech/>}/>
						<Route path='/crear-subact-echodust' element={<AddSubActEcho/>}/>
						<Route path='/crear-subact-vintich' element={<AddSubActVintich/>}/>

						<Route path='/subact-techstunt' element={<SubActTechStunt/>}/>
						<Route path='/subact-echodust' element={<SubActEcho/>}/>
						<Route path='/subact-vintich' element={<SubActVintich/>}/>
					</Routes>
					<Footer />
        </div>
      )}
    </Authenticator>
  );
}

export default App;
