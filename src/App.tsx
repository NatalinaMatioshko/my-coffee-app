import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Profile from './pages/Profile/Profile';
import Catalog from './pages/Catalog/Catalog';
import Product from './pages/Product/Product';
import CommonLayout from './components/CommonLayout/CommonLayout';

function App() {
  return (
    <>
      <Routes>
        <Route element={<CommonLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<Product />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
