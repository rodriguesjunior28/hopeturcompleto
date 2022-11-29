import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Destino from './pages/Destino';
import Promocao from './pages/promocao/Promocao';
import Contato from './pages/Contato';
import Header from './layout/Header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import QuemSomos from './pages/QuemSomos';
import NossaMissao from './pages/NossaMissao';
import Visao from './pages/Visao';
import Cadastro from './pages/Cadastro';




function App() {
  return (
    <Router>
      <Header />
      <Routes>
          <Route path='/' element={<Home /> } />
          <Route path='/Destino' element={<Destino />} />
          <Route path='/Promocao' element={<Promocao />} />
          <Route path='/Contato' element={<Contato />} />
          <Route path='/Quemsomos' element={<QuemSomos />} />
          <Route path='/NossaMissao' element={<NossaMissao />} />
          <Route path='/Visao' element={<Visao />} />
          <Route path='/Cadastro' element={<Cadastro />} />
      </Routes>
    </Router>
  )
}

export default App