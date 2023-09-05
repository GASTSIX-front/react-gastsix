import React from 'react';
import ReactDOM from 'react-dom/client';

//componentes
import Header from './componentes/Header';
import Log_Home from "./pages/Log_Home";
import Quem_Somos from "./pages/Quem_Somos";
import Cadastro_Usuario from './pages/Cadastro_Usuario';


//estilização global
import "./index.css";

//rotas
import { BrowserRouter, Routes, Route } from "react-router-dom";

import secureLocalStorage from 'react-secure-storage';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter> {/*Indica que aplicação terá rotas*/}
    
      <Routes>{/*Indica uma lista de rotas*/}
      <Route path='./componentes/Header' element={<Header />} />
        <Route path='./pages/Log_Home' element={<Log_Home />} /> {/*Indica o caminho do componente e o nome da rota dele*/}
        <Route path='./pages/Quem_Somos' element={<Quem_Somos />} />
        <Route path='./pages/Cadastro_Usuario' element={<Cadastro_Usuario />} /> 
              </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

