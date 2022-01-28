import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import HistorialVentas from './links/historialVentas';
import Inicio from './links/inicio';
import PaginaAgregarElementos from './links/paginaAgregarElementos';
import PaginaAnadirProducto from './links/paginaAnadirProducto';
import PaginaModificarPrecio from './links/paginaModificarPrecio';
import PaginaVenta from './links/paginaVenta';
import Stock from './links/Stock';
import StockCompleto from './links/StockCompleto';

function App() {
  return (
	<BrowserRouter>
		<Routes>
          <Route exact path="/" element={<Inicio/>}/>
          <Route exact path="/historialVentas" element={<HistorialVentas/>}/>
		  <Route exact path="/paginaAgregarElementos" element={<PaginaAgregarElementos/>}/>
		  <Route exact path="/paginaAnadirProducto" element={<PaginaAnadirProducto/>}/>
		  <Route exact path="/paginaModificarPrecio" element={<PaginaModificarPrecio/>}/>
		  <Route exact path="/paginaVenta" element={<PaginaVenta/>}/>
		  <Route exact path="/Stock" element={<Stock/>}/>
		  <Route exact path="/StockCompleto" element={<StockCompleto/>}/>
        </Routes>
	</BrowserRouter>
  );
}

export default App;
