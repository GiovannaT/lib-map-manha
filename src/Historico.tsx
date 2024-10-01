import React from 'react';
import './Historico.css';

const Historico: React.FC = () => {
    return (
        <div className="historico-container">
            <button className="btn-voltar">
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            width="24px" 
            height="24px" 
            fill="currentColor"
        >
            <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z"/>
        </svg>
    </button>
            
            <div className="perfil-container">
                <img 
                    src="https://cdn-icons-png.flaticon.com/512/149/149071.png" 
                    alt="Perfil do Usuário" 
                    className="perfil-imagem"
                />
                <div className="perfil-info">
                    <strong className="perfil-nome">LUIZA SOUZA DANTAS</strong>
                    <p className="perfil-matricula">111.4566-8</p>
                </div>
            </div>
            
            <div className="historico-titulo">SEU HISTÓRICO</div>
            
            <div className="historico-item">
                <strong>LIVRO:</strong> BANCO DE DADOS I
                <br />
                <strong>DATA DE EMPRÉSTIMO:</strong> 20/07
                <br />
                <strong>ENTREGA:</strong> <span className="pendente">PENDENTE <span className="atraso">(EM ATRASO)</span></span>
            </div>
            <div className="historico-item">
                <strong>LIVRO:</strong> ESTRUTURA DE DADOS
                <br />
                <strong>DATA DE EMPRÉSTIMO:</strong> 01/08
                <br />
                <strong>ENTREGA:</strong> <span className="pendente">PENDENTE</span>
            </div>
            <div className="historico-item">
                <strong>LIVRO:</strong> BANCO DE DADOS I
                <br />
                <strong>DATA DE EMPRÉSTIMO:</strong> 03/08
                <br />
                <strong>ENTREGA:</strong> <span className="pendente">PENDENTE</span>
            </div>
            <div className="historico-item">
                <strong>LIVRO:</strong> MAP
                <br />
                <strong>DATA DE EMPRÉSTIMO:</strong> 06/08
                <br />
                <strong>ENTREGA:</strong> <span className="pendente">PENDENTE</span>
            </div>
            <div className="historico-item">
                <strong>LIVRO:</strong> CÁLCULO II
                <br />
                <strong>DATA DE EMPRÉSTIMO:</strong> 01/07
                <br />
                <strong>ENTREGA:</strong> <span className="pendente">CONCLUÍDA</span>
            </div>
            <div className="historico-item">
                <strong>LIVRO:</strong> JAVA
                <br />
                <strong>DATA DE EMPRÉSTIMO:</strong> 02/07
                <br />
                <strong>ENTREGA:</strong> <span className="pendente">CONCLUÍDA</span>
            </div>
            <div className="historico-item">
                <strong>LIVRO:</strong> MATEMÁTICA DISCRETA
                <br />
                <strong>DATA DE EMPRÉSTIMO:</strong> 03/07
                <br />
                <strong>ENTREGA:</strong> <span className="pendente">CONCLUÍDA</span>
            </div>
            <div className="historico-item">
                <strong>LIVRO:</strong> METODOLOGIA CIENTÍFICA
                <br />
                <strong>DATA DE EMPRÉSTIMO:</strong> 06/07
                <br />
                <strong>ENTREGA:</strong> <span className="pendente">CONCLUÍDA</span>
            </div>
            <div className="historico-item">
                <strong>LIVRO:</strong> ÁLGEBRA LINEAR
                <br />
                <strong>DATA DE EMPRÉSTIMO:</strong> 09/07
                <br />
                <strong>ENTREGA:</strong> <span className="pendente">CONCLUÍDA</span>
            </div>
        </div>
    );
};

export default Historico;