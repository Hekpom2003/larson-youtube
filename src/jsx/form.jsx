import React, { useState } from "react";
import InputMask from 'react-input-mask';


export function Form() {

  const initialState = { name: null, email: null };

  const [formValues, setValues] = useState(initialState);




  return (
    <section className="form">
      <h2>Присоединяйтесь и зарабатывайте!</h2>
      <div className="form__text-info">Канал закрытый, поэтому ссылка на него вам придет на почту и
        в
        SMS-сообщении
      </div>

      <form action="">

        <div className="form-control">
            {//TODO}
          <input type="text" placeholder="Ваше имя" onChange={e => setValues(prevState => {...prevState;name:e.target.value})}/>
        </div>

        <div className="form-control">
          <input type="text" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
        </div>

        <div className="form-control">
          <InputMask mask="+7 (999)-999-99-99"
                     placeholder={'Телефон'}
                     onChange={e => setPhone(e.target.value)}/>
        </div>

        <button className="button button--block button--orange-inverted"
                onClick={e => _getSmsCode(e)}>ПОЛУЧИТЬ SMS КОД
        </button>

        <p className="form__attantion">Извините, но мы должны удостовериться, что вы не бот</p>

        <div className="form-control">
          <input type="text" disabled={true} placeholder="Введите SMS код"/>
        </div>

        <div className="form-control">
          <button className="button button--orange button--block"
                  disabled={true}>ПОДПИСАТЬСЯ
          </button>
        </div>

        <div className="form__policy">Политика конфиденциальности</div>
      </form>

    </section>
  );
}

function _getSmsCode(e) {
  e.preventDefault();

  if (_validate)
    }