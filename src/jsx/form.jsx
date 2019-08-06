import React from "react";

export function Form() {
    return (
        <section className='form'>
            <h2>Присоединяйтесь и зарабатывайте!</h2>
            <div className="form__text-info">Канал закрытый, поэтому ссылка на него вам придет на почту и в<br/>
                SMS-сообщении
            </div>

            <form action="">

                <div className="form-control">
                    <input type="text" placeholder='Ваше имя'/>
                </div>

                <div className="form-control">
                    <input type="text" placeholder='Email'/>
                </div>

                <div className="form-control">
                    <input type="text" placeholder='Телефон'/>
                </div>

                <button className='button button--block button--orange-inverted'>ПОЛУЧИТЬ SMS КОД</button>

                <p className='form__attantion'>Извините, но мы должны удостовериться, что вы не бот</p>

                <div className="form-control">
                    <input type="text" disabled={true} placeholder='Введите SMS код'/>
                </div>

                <div className="form-control">
                    <button className='button button--orange button--block' disabled={true}>ПОДПИСАТЬСЯ</button>
                </div>

                <div className="form__policy">Политика конфиденциальности</div>
            </form>

        </section>
    );
}