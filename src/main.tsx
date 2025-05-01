import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { FiltersProvider } from './context/filters.tsx';

import App from './App.tsx';

// import all styles here
import './index.css';
import './App.css';
import './styles/cart.css';
import './styles/products.css';
import './styles/hearder.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FiltersProvider>
      <App />
    </FiltersProvider>
  </StrictMode>
);
