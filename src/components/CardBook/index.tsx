import './styles.css'

interface CardBookProps {
    linkBookCover: string;
    bookTitle: string;
}

const CardBook = ({linkBookCover, bookTitle}: CardBookProps) => {
  return (
    <div className='envelop'>
        <img src={linkBookCover} alt="Foto capa livro" className='bookCover'/>
        <p className='bookTitle'>{bookTitle}</p>
    </div>
  )
}

export default CardBook