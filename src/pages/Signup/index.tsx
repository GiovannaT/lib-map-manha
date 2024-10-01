import './styless.css'
import { Botao } from '../../components/Botao'

export default function Signup() { 
  return(
    <>
      <img src="./logoUepb.png" alt="UEPB" className="logo" />
      <h3>Faça seu Cadastro</h3>
      
      <div className="input">
        <label htmlFor="nome">Nome Completo</label>
        <input type="text" id="nome" />
      </div>

      <div className="input">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
      </div>

      <div className="input">
        <label htmlFor="cpf">CPF</label>
        <input type="text" id="cpf" />
      </div>

      <div className="input">
        <label htmlFor="dataNascimento">Data de Nascimento</label>
        <input type="date" id="dataNascimento" />
      </div>

      <div className="input">
        <label htmlFor="telefone">Telefone</label>
        <input type="tel" id="telefone" />
      </div>

      <div className="input">
        <label htmlFor="curso">Curso</label>
        <select id="curso">
          <option value="">Selecione uma opção</option>
          <option value="ciencia da Computacao">Ciência da Computação</option>
          <option value="engenharia">Matemática</option>
          <option value="d">Administração</option>
          <option value="direito">Administração</option>
          {/* Adicionar mais opções conforme necessário */}
        </select>
      </div>

      <div className="input">
        <label htmlFor="senha">Senha</label>
        <input type="password" id="senha" />
      </div>

      <Botao title="Cadastrar" />

      <a href="#"> <small>Já tem uma conta? Faça Login</small></a>

      <small>Biblioteca CAMPUS VII</small>
    </>
  )
}

