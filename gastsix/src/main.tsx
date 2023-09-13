<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom/client';

//componentes
import LogHome from "./pages/LogHome";
import QuemSomos from "./pages/QuemSomos";
import CadastroUsuario from './pages/CadastroUsuario';

//estilização global
import "./index.css";

//rotas
import { BrowserRouter, Routes, Route } from "react-router-dom";

import secureLocalStorage from 'react-secure-storage';
=======
//Imports React - adicionar imports dos componentes React abaixo 
import React from 'react'
import ReactDOM from 'react-dom/client'

//Estilização da página CSS
import './index.css';

//componentes
import Header from "../src/componentes/Header";
import Menu_Lateral from "./componentes/Menu_Lateral";
import Cad_Produto from "./pages/Cad_Produto";
import Cad_Fornecedores from './pages/Cad_Fornecedores';
import Tel_Ajuste from "./pages/Tel_Ajuste";
import Ent_Estoque from "./pages/Ent_Estoque";
import Con_Estoque from "./pages/Ent_Estoque";
import Cad_Dispositivo from './pages/Cad_Dispositivo';
import Rel_Movimentacao from './pages/Rel_Movimentacao';
import Rel_Operadores from './pages/Rel_Operadores';
import Rel_Estoque from './pages/Rel_Estoque';


//rotas
import { BrowserRouter, Routes, Route } from "react-router-dom";
>>>>>>> 284231d36ec8b727f38c37884b5f1ff4f44bc022

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter> {/*Indica que aplicação terá rotas*/}
<<<<<<< HEAD
    
      <Routes>{/*Indica uma lista de rotas*/}
        <Route path='./pages/LogHome' element={<LogHome />} /> {/*Indica o caminho do componente e o nome da rota dele*/}
        <Route path='./pages/QuemSomos' element={<QuemSomos />} />
        <Route path='./pages/CadastroUsuario' element={<CadastroUsuario />} /> 
              </Routes>
=======
      <Header />
      <Menu_Lateral />
      <Routes>{/*Indica uma lista de rotas*/}
        <Route path='/cadastroProduto' element={<Cad_Produto />} /> {/*Indica o caminho do componente e o nome da rota dele*/}
        <Route path='/cadastroFornecedores' element={<Cad_Fornecedores />} />
        <Route path='/telaAjuste' element={<Tel_Ajuste />} />
        <Route path='/entradaEstoque' element={<Ent_Estoque />} />
        <Route path='/consultaEstoque' element={<Con_Estoque />} />
        <Route path='/cadastroDispositivo' element={<Cad_Dispositivo />} />
        <Route path='/relatorioMovimentacao' element={<Rel_Movimentacao />} />
        <Route path='/relatorioOperadores' element={<Rel_Operadores />} />
        <Route path='/relatorioEstoque' element={<Rel_Estoque />} />
      </Routes>
>>>>>>> 284231d36ec8b727f38c37884b5f1ff4f44bc022
    </BrowserRouter>
  </React.StrictMode>
)

