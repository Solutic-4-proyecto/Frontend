import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Cusuarios from "./components/Cusuarios";
import Cregistrar from './components/Cregistrar';
import Cestado from './components/Cestado';
import Cproyectos from "./components/Cproyectos";
import CActualizarEstadoProyecto from './components/CActualizarEstadoProyecto';
import CFaseProyecto from './components/CActualizarFase';
import CregistrarProyecto from './components/CRegistrarProyecto';
import CActualizarProyecto from './components/CActualizarProyecto';
import CInscripciones from './components/Cinscripciones';
import Login from './components/Login/Login'
import Navigation from './components/Navigation';
import CAvances from './components/CAvances';
import CAvanceObservaciones from './components/CAvanceObservaciones';
import CProyectosEstudiantes from './components/CProyectosEstudiantes';
import CAvancesRegistrar from './components/CAvancesRegistar';
import CAvancesEditar from './components/CAvancesEditar';

/*
class App extends Component {
  render() {
    return (
      <div>
        <Cusuarios></Cusuarios>
      </div>
    );
  }
}*/

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <Header />
        <br/>
        <br/>
        <br/>
        <Navigation/>
        <br/>
        
        <Route path="/usuarios" exact component={Cusuarios}/>
        <Route path="/estadousuario" exact component={Cestado}/>
        <Route path="/proyectos" exact component={Cproyectos}/>
        <Route path="/estadoproyecto" exact component={CActualizarEstadoProyecto}/>
        <Route path="/fase" exact component={CFaseProyecto}/>
        <Route path="/registroproyecto" exact component={CregistrarProyecto}/>
        <Route path="/actualizarproyecto" exact component={CActualizarProyecto}/>
        <Route path="/inscripciones" exact component={CInscripciones}/>
        <Route path="/avances" exact component={CAvances}/>
        <Route path="/observaciones" exact component={CAvanceObservaciones}/>
        <Route path="/inscribirme" exact component={CProyectosEstudiantes}/>
        <Route path="/registraravance" exact component={CAvancesRegistrar}/>
        <Route path="/avanceeditar" exact component={CAvancesEditar}/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
