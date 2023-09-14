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


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter> {/*Indica que aplicação terá rotas*/}
      <Routes>{/*Indica uma lista de rotas*/}
        <Route path='/' element={<Log_home />} /> {/*Indica o caminho do componente e o nome da rota dele*/}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)