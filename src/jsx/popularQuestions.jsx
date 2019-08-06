import React from 'react';

function Question(prop) {
    return (
        <li>
            <div className="popular-questions__icon"></div>
            <div className="popular-questions__question">{prop.question}</div>
            <div className="popular-questions__answer">{prop.answer}</div>
        </li>
    )
}

export function PopularQuestions() {
    const questions = [
        {
            question: 'Почему он закрытый?',
            answer: 'Потому что информация, которая доступна всем, не имеет никакой ценности. Потому что наш YouTube-канал рассчитан только на тех, кто имеет серьезные намерения в сфере торговли, кто действительно хочет стать успешным трейдером.\n'
        },
        {
            question: 'Будет ли канал полезен, если я уже опытный трейдер?',
            answer: 'Безусловно. Мы предоставляем эксклюзивную информацию, которая позволит вам хорошо ориентироваться в текущей финансовой ситуации, оперативно узнавать новые тренды, и, как результат, зарабатывать еще больше.'
        },
        {
            question: 'А если я новичок?',
            answer: 'Все равно добро пожаловать! Наш канал рассчитан как на опытных брокеров, так и на новичков. С его помощью первые совершенствуют свои навыки, вторые идут к успеху более коротким путем.\n'
        },
    ];
    return (
        <section className='popular-questions'>
            <h2>Три самых популярных вопросов о нашем канале</h2>
            <ul>
                {questions.map((item, index) => <Question key={index} {...item}/>)}
            </ul>

            <div className="popular-questions__more">Еще вопросы? Задайте их в комментах!</div>
        </section>
    )
}