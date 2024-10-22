import "./styles.css"

import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { IBook } from "../../types/Book";

export default function BookDetails() {
  const { id } = useParams<{ id: string }>();
  const [book, setBook] = useState<IBook | null>(null);
  const [error, setError] = useState("");
  
  const fetchBook = useCallback(async () => {
    const { data } = await axios.get("https://potterapi-fedeperin.vercel.app/pt/books");
    const bookFind = data.find((book: IBook) => book.number === parseInt(id!));
    
    if (!bookFind) {
      setError("Livro não encontrado");
      return;
    }

    setBook(bookFind);
  }, [])

  useEffect(() => {
    fetchBook();
  }, [])

  return (
    <>
      {!book  && !error ? (
        <>
          <h3>Carregando...</h3>
        </>
      ) : (
        error ? (
          <h3>{error}</h3>
        ) : (
          <>   
            <section className="image-container">
              <img src={book?.cover} alt={book?.title} />
            </section>

            <hr style={{ marginBottom: "30px" }} />

            <div className="content-container">
              <div className="book-title">
                <strong>Titulo</strong>
                <p>{book?.title}</p>
              </div>
              <div className="book-pages">
                <strong>Páginas</strong>
                <p>{book?.pages}</p>
              </div>
              <div className="publish-date">
                <strong>Data de publicação</strong>
                <p>{book?.releaseDate}</p>
              </div>  
              <div className="description">
                <strong>Descrição</strong>
                <p>{book?.description}</p>
              </div>
            </div>
          </>
        )
      )}
    </>
  )
}