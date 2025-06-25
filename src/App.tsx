import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Profile from './pages/Profile/Profile';
import Catalog from './pages/Catalog/Catalog';
import Product from './pages/Product/Product';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
