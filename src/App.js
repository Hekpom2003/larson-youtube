import React from 'react';
import './scss/App.scss';

import {TopButton} from './jsx/topButton';
import {Title} from './jsx/title';
import {MainImage} from './jsx/mainImage';
import {Preimushestva} from './jsx/preimushestva';
import {Form} from './jsx/form';
import {PopularQuestions} from './jsx/popularQuestions';
import {Footer} from './jsx/footer';


function App() {
    return (
        <div className="App">
            <div className="container">
                <div className="main-wrapper">
                    <main>
                        <TopButton/>

                        <Title/>

                        <div className="text-1">
                            Один из лидеров рынка интернет-трейдинга Larson&Holz предлагает вам подписку на свой
                            закрытый
                            аналитический YouTube-канал.
                        </div>

                        <MainImage/>

                        <div className="subscribe">
                            <button class='button button--block button--orange'>ПОДПИСАТЬСЯ</button>
                        </div>

                        <Preimushestva/>
                    </main>

                    <aside>
                        <Form/>

                        <PopularQuestions/>

                        <div className="subscribe">
                            <button className='button button--block button--orange-inverted'>ПОДПИСАТЬСЯ</button>
                        </div>
                    </aside>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
