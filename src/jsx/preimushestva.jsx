import React from "react";

export function Preimushestva(){
    return(
        <section className='preimushestva'>
            <h2>Что вы получите? Все для успешной торговли!</h2>
            <p className="text">
                Еженедельно на канале появляются ролики, записанные ведущими брокерами, финансовыми
                консультантами и специалистами Larson&Holz. В них вы найдете:
            </p>
            <ul>
                <li>
                    <span className="icon"/>
                    <span className='text'><b>Аналитические обзоры.</b> Исчерпывающий анализ текущей ситуации на финансовых рынках</span>
                </li>
                <li>
                    <span className="icon"/>
                    <span className='text'><b>Разбор трендов.</b> Как реагировать на ту или иную тенденцию? К чему она приведет в перспективе? Имеет ли смысл менять стратегию?</span>
                </li>
                <li>
                    <span className="icon"/>
                    <span className='text'><b>Разбор торговых стратегий.</b> Возможно, ваша стратегия уже устарела, а, возможно, ее стоит лишь немного скорректировать</span>
                </li>
                <li>
                    <span className="icon"/>
                    <span className='text'><b>Обзоры новых инструментов</b> для торговли и лайфхаки по использованию уже знакомых инструментов</span>
                </li>
                <li>
                    <span className="icon"/>
                    <span className='text'><b>Интервью с топовыми персонами.</b>Они не обязательно поделятся своими секретами (хотя бывает и такое), но энергия их успеха и опыт вдохновляют</span>
                </li>
            </ul>
            <a href={'/'} className="preimushestva__more">…и еще многое-многое другое.</a>
        </section>
    )
}