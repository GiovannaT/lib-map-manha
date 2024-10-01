import React, { useCallback, useEffect, useState } from 'react'
import './styles.css'

export const Menu = () => {


  return (
    <>
      <img src="./logoUepb.png" alt="logo"/>
      <div className="botoes">
        <button type='button'>
          <img src="/icons/book.svg" alt="bookicon" className="icon" />
          <p>Livros disponíveis</p>
        </button>
        <button type='button'>
          <img src="/icons/book-open.svg" alt="bookicon" className="icon" />
          <p>Livros atrasados</p>
        </button>
        <button type='button'>
          <img src="/icons/bookmarks.svg" alt="bookicon" className="icon" />
          <p>Seus livros</p>
        </button>
        <button type='button'>
          <img src="/icons/clock.svg" alt="bookicon" className="icon" />
          <p>Historico</p>
        </button>
        <button type='button'>
          <img src="/icons/star.svg" alt="bookicon" className="icon" />
          <p>Favoritos</p>
        </button>
      </div>
      <div className='footer'>
        <h6>Biblioteca CAMPUS <p>VII</p></h6>
      </div>
    </>
  )
}
