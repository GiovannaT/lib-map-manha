import { Botao } from "../../components/Botao"
import "./styles.css"

export default function ForgotPassword() {
  return (
    <>
    <header>
      <img src="https://upload.wikimedia.org/wikipedia/commons/7/77/Marca-da-UEPB-Aplica%C3%A7%C3%A3o-Colorida-em-PNG-1.png" alt="Logo Uepb"></img>
      <h1>Recuperação De Senha</h1>
    </header>
    <div className="div1">
      <label>Informe seu email e enviaremos um link para recuperação da sua senha</label>
      <img src="https://png.pngtree.com/png-vector/20230522/ourmid/pngtree-reset-password-vector-png-image_7104484.png" alt="logo-redefinir"/>
    </div>
    <div className="div2">
      <label>Email</label>
      <input type="text" />
      <Botao title="Enviar">
      </Botao>
    </div>

    <footer>
      <p>Biblioteca Campus VII</p>
    </footer>

    </>
  )
}