import NoteCard from "./NoteCard";
import { ICard } from "../types/interfaces";

interface IProps {
  handlerDeleteCard: (id: string) => void;
  cardsList: ICard[];
}

const NotesList = ({ handlerDeleteCard, cardsList }: IProps) => {

  return (
    <div className='blocks'>
      {cardsList.length > 0 ? 
        cardsList.map(e => <NoteCard key={e.id} cardInfo={e} handlerDeleteCard={handlerDeleteCard} />)
        : <h3>Пока нет ни одной карточки</h3>
      }
    </div>
  )
}

export default NotesList
