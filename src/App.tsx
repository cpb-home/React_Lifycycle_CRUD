import { useEffect, useState } from 'react'
import './App.css'
import NotesList from './components/NotesList';
import NotesForm from './components/NotesForm';
import { ICard } from './types/interfaces';
import Btn from './ui/Btn';

function App() {
  const [cardsList, setCardsList] = useState<ICard[]>([]);
  const [msg, setMsg] = useState('');

  useEffect(() => {
    updateCards();
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMsg('');
    }, 2000);

    return () => {
      clearTimeout(timeout);
    }
  }, [msg]);

  const updateCards = async function() {
    try {
      const response = await fetch(import.meta.env.VITE_CATALOG_URL);
      const data = await response.json();
      setCardsList([...data]);
    } catch (e) {
      console.log(e);
    }
  }

  const submitFormHandler = (text: string) => {
    if (text === '') {
      return;
    }
    
    fetch(import.meta.env.VITE_CATALOG_URL, {
      method: "POST",
      body: JSON.stringify({
        "content": text
      }),
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then(res => res.status)
    .then(st => console.log(st))
    .catch(e => console.log(e))

    updateCards();
  }

  const handlerDeleteCard = (id: string) => {
    fetch(import.meta.env.VITE_CATALOG_URL + '/' + id, {
      method: "DELETE",
    })
    .catch(e => console.log(e))
    updateCards();
  }

  const updateHandler = () => {
    updateCards();
    setMsg('Список обновлён');
  }

  return (
    <>
      <div className='cont'>
        {msg && <h3>{msg}</h3>}
        <div className='updateCard'>
          <span>Обновить карточки</span>
          <Btn className='update' btnType="button" handler={updateHandler} />
          <NotesForm submitFormHandler={submitFormHandler} />
        </div>
      </div>
      <NotesList cardsList={cardsList} handlerDeleteCard={handlerDeleteCard} />
    </>
  )
}

export default App
