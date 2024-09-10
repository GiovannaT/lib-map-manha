import './App.css'
import { Botao } from './components/Botao'

function App() {

  return (
    <>
    <img src="./logoUepb.png" alt="UEPB" />
    <h3>Faça seu Login</h3>
    <div className="input">
      <label htmlFor="cpf">CPF</label>
      <input type="text" id='cpf' />
    </div>
    <div className="input">
      <label htmlFor="pass">Senha</label>
      <input type="password" id='pass' />
    </div>
    <Botao title="botao 1"></Botao>
    </>
  )
}

export default App
