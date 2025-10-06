import { ICard } from "../types/interfaces";
import Btn from "../ui/Btn";

interface IProps {
  handlerDeleteCard: (id: string) => void;
  cardInfo: ICard;
}

const NoteCard = ({ cardInfo, handlerDeleteCard }: IProps) => {
  return (
    <div className="card">
      <p>{cardInfo.content}</p>
      <Btn handler={handlerDeleteCard as ((id?: string) => void)} className="delete" btnType="button" cardId={cardInfo.id} />
    </div>
  )
}

export default NoteCard
