import { Container } from 'react-bootstrap';

import './App.css';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Index from './components/Index.js';

function App() {
  return (
    <Container>
      <BrowserRouter>
        {/* Header template */}

        <Routes>
          <Route path='/' element={<Index />}></Route>

        </Routes>
        {/* Footer template */}
      </BrowserRouter>
    </Container>
  );
}

export default App;