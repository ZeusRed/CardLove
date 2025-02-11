import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'primereact/resources/themes/lara-light-indigo/theme.css'; // Tema de PrimeReact
import 'primereact/resources/primereact.min.css'; // Estilos base de PrimeReact
import 'primeicons/primeicons.css'; // Íconos de PrimeIcons
import 'primeflex/primeflex.css'; // Utilidades de PrimeFlex (opcional)
import { CardLove } from './CardLove.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CardLove />
  </StrictMode>,
)
