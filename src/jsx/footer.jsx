import React from 'react';

export function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row-1">Предупреждение: Торговля финансовыми инструментами является рискованным видом
                    деятельности и может принести не только прибыль, но и убытки.
                </div>
                <ul className="row-2">
                    <li><a href="/">Условия предоставления сервиса</a></li>
                    <li><a href="/">Заявление о конфиденциальности</a></li>
                </ul>
            </div>
        </footer>
    )
}