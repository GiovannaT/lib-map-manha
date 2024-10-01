import { Botao } from "../../components/Botao";
import './styles.css'

export default function Perfil(){
 
    return(
        <>

        <div className="voltar">
        <button>
            <img src="Icon seta.png" alt="" />
        </button>
        <p>BIBLIOTECA CAMPOS VII</p>
        </div>
        

        <div className = "Menu">
            <img src="Icon perfil.png" alt="Icone Perfil do Usuario" />
            <h1>Luiza Souza Dantas</h1>
            <h3>CPF: 111.4566-8</h3>
        </div>


     
        <button className="Editar">
        <p>EDITAR</p>
        </button>
        
        <br />

        <p className= "opçoes">MENU DE OPÇÕES</p>

        <div className="botoes">

            <button>
            <img src="calendario.png" alt="Icone de Calendário" />
            <p>Calendário</p>
            </button>
        
            <button>
            <img src="Icon historico.png" alt="Icone do Historico" />
            <p>Histórico</p>
            </button>
            
            <button>
            <img src="icon livros.png" alt="Icone de livros" />
            <p>Livros Disponieis</p>
            </button>
            
            <button>
            <img src="Icon dinheiro.png" alt="Icone de dinheiro" />
            <p>Pagamento</p>
            </button>
        
            <button className=" Renovação">
            <img src="Renovação.png" alt="Icone de contrato" />
            <p>Renovação de Emprestimo</p>
            </button>
        
            <button className="ajuda">
            <img src="icon ajuda.png" alt="Icone de atendente" />
            <p>Ajuda</p>
            </button>
            
        </div>

        
            
        
        
        </>
    )

}