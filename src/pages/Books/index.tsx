import { useCallback, useEffect, useState } from 'react'
import axios from 'axios';

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
    <div>Books</div>
  )
}
