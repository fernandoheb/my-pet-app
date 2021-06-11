import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import HeaderComponent from './Componentes/HeaderComponent';
import FooterComponent from './Componentes/FooterComponent';
import NovoPet from './Componentes/NovoPet';
import ListarPets from './Componentes/ListarPets';
import AtualizarPet from './Componentes/AtualizarPet';
import CreateUpdateForm from './Componentes/CreateUpdateForm';
import Home from './Componentes/Home';

function App() {
  return (
    <div>
    <Router>
      <HeaderComponent />
         <Container>
              <Switch>
                    <Route exact path="/" component={Home}></Route>                      
                    <Route path="/pets" component={ListarPets}></Route>
                    <Route path="/novo_pet" component={NovoPet}></Route>
                    <Route path="/atualiza_pet/:id" component={AtualizarPet}></Route>
                    <Route path="/Pet/:id" component={CreateUpdateForm}></Route>
              </Switch>
          </Container>
      <FooterComponent />
    </Router>
  </div>
  );
}

export default App;
