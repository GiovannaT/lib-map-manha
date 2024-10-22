// eu não me orgulho de absolutamente nenhuma letra que foi escrita aqui

import React, { useCallback, useEffect, useState } from 'react'
import './styles.css'
import Calendar from 'react-calendar';



export const Calendario = () => {
    const [value, setValue] = useState(new Date());


    function onChange(nextValue: Date) {
        setValue(nextValue);
    }

    return (
        <>
            <button className='seta'>
                <img src="botao_seta.png" alt="icone_voltar" />
            </button>
            <hr></hr>
            <div className='menu'>
                <button>
                    <img src='botao_barra.png' alt="icone_menu" />
                </button>
                <p>
                    <h1>AGOSTO</h1>
                </p>
            </div>
            <div className='base'>
                <Calendar
                    onChange={() => onChange}
                    value={value}
                />
                <h2 className='subtitulo'>PRAZOS DE ENTREGA</h2>
                <div className='datas'>
                    <hr></hr>
                    <h3>BANCO DE DADOS</h3>
                    <hr></hr>
                    <h3>ESTRUTURAS DE DADOS</h3>
                    <hr></hr>
                    <h3>MÉTODOS AVANÇADOS DE PROGRAMAÇÃO</h3>
                    <hr></hr>
                    <h3>INTRODUÇÃO A ALGORITMOS</h3>
                    <hr></hr>
                </div>
            </div>
            <h2 className='final'>BIBLIOTECA CAMPUS VII</h2>
        </>
    )
}