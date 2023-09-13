<<<<<<< HEAD
=======
<<<<<<< HEAD
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
=======
>>>>>>> c0c2b03a267f5392b4aef00acd42b8ea76533a3b
//Imports React - adicionar imports dos componentes React abaixo 
import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom'

//Estilização da página CSS
import './index.css'

//Imports de Components - adicionar imports componentes abaixo
import Header from './componentes/Header/index'

//Imports de Pages - adicionar imports pages abaixo

import Log_home from "./pages/Log_Home"

// import './pages/tel_ajuste/'
// import './pages/rel_estoque/'
// import './pages/rel_movimentacao/'
// import './pages/rel_operadores/'
// import quemSomos from './pages/qem_somos/index'

//Import de Assets - adicionar import de assets utilizadas na página main - login
import './assets/img/LOGO.png'

<<<<<<< HEAD
=======
//rotas
import { BrowserRouter, Routes, Route } from "react-router-dom";
>>>>>>> 284231d36ec8b727f38c37884b5f1ff4f44bc022
>>>>>>> c0c2b03a267f5392b4aef00acd42b8ea76533a3b

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter> {/*Indica que aplicação terá rotas*/}
<<<<<<< HEAD
      <Routes>{/*Indica uma lista de rotas*/}
        <Route path='/' element={<Log_home />} /> {/*Indica o caminho do componente e o nome da rota dele*/}
      </Routes>
=======
<<<<<<< HEAD
    
      <Routes>{/*Indica uma lista de rotas*/}
      <Route path='./componentes/Header' element={<Header />} />
        <Route path='./pages/Log_Home' element={<Log_Home />} /> {/*Indica o caminho do componente e o nome da rota dele*/}
        <Route path='./pages/Quem_Somos' element={<Quem_Somos />} />
        <Route path='./pages/Cadastro_Usuario' element={<Cadastro_Usuario />} /> 
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
>>>>>>> c0c2b03a267f5392b4aef00acd42b8ea76533a3b
    </BrowserRouter>
  </React.StrictMode>
)