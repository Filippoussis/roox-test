import { useState } from 'react';

import Htag from '../Htag/Htag';
import Input from '../Input/Input';
import Textarea from '../Textarea/Textarea';
import Button from '../Button/Button';

import {FormProps} from './Form.props';

import {FORM_INPUT_LABELS, FORM_LABEL_MAP} from './Form.utils';
import styles from './Form.module.css';

type InputEvent = React.ChangeEvent<HTMLInputElement>;
type TextAreaEvent = React.ChangeEvent<HTMLTextAreaElement>;
type FormEvent = React.FormEvent<HTMLFormElement>;

function Form({user, onCloseForm}: FormProps): JSX.Element {

  const [isEditable, changeStatusEditable] = useState(false);

  const [inputData, changeInputData] = useState<{[index: string]: string}>({
    name: user.name,
    username: user.username,
    email: user.email,
    street: user.address.street,
    city: user.address.city,
    zipcode: user.address.zipcode,
    phone: user.phone,
    website: user.website,
  });

  const [textAreaData, changeTextAreaData] = useState('');

  const handleClickEditableButton = () => changeStatusEditable(true);

  const handleChangeInput = (evt: InputEvent): void => {
    changeInputData((state) => ({
      ...state,
      [evt.target.name]: evt.target.value,
    }));
  };

  const handleChangeTextArea = (evt: TextAreaEvent): void => {
    changeTextAreaData(evt.target.value);
  };

  const handleFormSubmit = (evt: FormEvent): void => {
    evt.preventDefault();
    const formData = {
      ...inputData,
      comment: textAreaData,
    };
    console.log(JSON.stringify(formData));

  }

  return (
    <form className={styles.form} onSubmit={handleFormSubmit}>
      <div className={styles.formHeader}>
        <Htag tag='h2'>Профиль пользователя</Htag>
        <Button
          type='button'
          appearance='primary'
          onClick={handleClickEditableButton}
        >
          Редактировать
        </Button>
      </div>
      <div className={styles.formWrapper}>
        {FORM_INPUT_LABELS.map((label) => (
          <label key={label} className={styles.formInput}>
            <Input
              label={label}
              type={label === 'E-mail' ? 'email' : 'text'}
              name={FORM_LABEL_MAP[label]}
              value={inputData[FORM_LABEL_MAP[label]]}
              onChange={handleChangeInput}
              disabled={!isEditable}
              required
            />
          </label>
        ))}

        <Textarea
          label='Comment'
          value={textAreaData}
          onChange={handleChangeTextArea}
          disabled={!isEditable}
        />
      </div>
      <div className={styles.formControl}>
        <Button
          type='button'
          appearance='primary'
          onClick={onCloseForm}
        >
          Назад
        </Button>
        <Button
          type='submit'
          appearance='active'
          disabled={!isEditable}
        >
          Отправить
        </Button>
      </div>
    </form>
  );
}

export default Form;
