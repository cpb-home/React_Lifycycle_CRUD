import React, { useState } from "react";
import Btn from "../ui/Btn"
import { IForm } from "../types/interfaces";

interface IProps {
  submitFormHandler: (text: string) => void;
}

const NotesForm = ({ submitFormHandler }: IProps) => {
  const [form, setForm] = useState<IForm>({
    add: "",
  });

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value
    })
  )}

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    submitFormHandler(form.add);
    setForm({add: ""});
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
      <label>
        <input name='add' type='text' placeholder='Введите текст, чтобы добавить новую карточку' value={form.add} onChange={handleChangeInput} required />
      </label>
      <Btn className="add" btnType="submit" />
    </form>
  )
}

export default NotesForm
