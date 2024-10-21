import { useCallback, useEffect, useState } from 'react'
import axios from 'axios';
import CardBook from '../../components/CardBook';

interface Books {
    number: number;
    title: string;
    originalTitle: string;
    releaseDate: string;
    description: string;
    pages: number;
    cover: string;
    index: number;
}

export const Books = () => {

    const [books, setBooks] = useState<Books[]>([]);

    const getBooks = useCallback(async ()=>{
        const response = await axios('https://potterapi-fedeperin.vercel.app/pt/books')
        setBooks(response.data);
        console.log(response.data);
    },[])

    useEffect(()=>{
        getBooks();
    },[])

  return (
    <div>
      <h3>Livros Disponíveis</h3>
      <div className='mappedBooks'>
        { books ? 
          (books.map((element) => 
            (<div className="CardBook" key={element.number} onClick={()=> {console.log('teste')}}>
              <CardBook linkBookCover={element.cover} bookTitle={element.title} />
            </div>)
          )) 
          : 'Não temos livros disponíveis'
        }      
      </div>
    </div>
  )
}
