interface IProps {
  className: string;
  title?: string;
  btnType: 'submit' | 'reset' | 'button';
  cardId?: number;
  handler?: ((id?: string) => void);
}

const Btn = ({ className, title, btnType, cardId, handler }: IProps) => {
  function btnClickHandler() {
    switch (className) {
      case 'delete':
        if (cardId && handler) {
          handler(cardId.toString());
        }
        break;
      case 'add':
        if (handler) {
          handler();
        }
        break;
      case 'update':
        if (handler) {
          handler();
        }
    }
  }

  return (
    <button className={"button button_" + className} name={String(cardId)} type={btnType} onClick={btnClickHandler}>
      {title}
    </button>
  )
}

export default Btn