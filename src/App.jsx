import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Error from './routes/Error'
import Home from './routes/Home'
import Cliente from './routes/Cliente'

function App() {


  return (
    // HABILITA A NAVEGAÇÃO POR ROTAS NA APLICAÇÃO
    <BrowserRouter>
    <main>
      {/* Gerencia a exibição dos componentes com base na url */}
      <Routes>
        {/* Rota para lidar com as urls não encontradas */}
        <Route path="*" element={<Error/>}/>

        {/* Rota para chamar a página home */}
        <Route path="/" element={<Home/>}/>

         {/* Rota para chamar a página Cliente */}
        <Route path="/cliente" element={<Cliente/>}/>
        

      </Routes>
    </main>
     
    </BrowserRouter>
  )
}

export default App
