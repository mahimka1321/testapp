import React, { useRef } from "react";
/*  Шапка  */
import Header from '../tr.all.header/Header';
/*  Меню  */
import Menu from '../tr.all.menu/Menu';
/*  Новые туры  */
import NewTour from '../tr.i/tr.new/NewTour';
/*  Туры  */
import Tour from '../tr.i/tr/Tour';
/*  Хуки  */
import Hoocks from '../Hoocks';
/*  Стили главной страницы  */
import './home.scss';


/*  Суздаль  */
import suzdal_tour_1 from '../assets/img/Суздаль/1.webp';
/*  Владимир  */
import vladimir_tour_1 from '../assets/img/Владимир/1.webp';
/*  Александров  */
import aleksandrov_tour_1 from '../assets/img/Александров/1.webp';
/*  Боголюбово  */
import bogolubovo_tour_1 from '../assets/img/Боголюбово/1.webp';
/*  Гороховец  */
import gorohovec_tour_1 from '../assets/img/Гороховец/1.webp';
/*  Гусь Хрустальный  */
import goos_tour_1 from '../assets/img/Гусь_Хрустальный/1.webp';
/*  Иваново  */
import ivanovo_tour_1 from '../assets/img/Иваново/1.webp';
/*  Калязин  */
import kaliazin_tour_1 from '../assets/img/Калязин/1.webp';
/*  Кидекша  */
import kidekha_tour_1 from '../assets/img/Кидекша/1.webp';   
/*  Кострома  */
import kostrama_tour_1 from '../assets/img/Кострома/1.webp';   
/*  Москва  */
import moskva_tour_1 from '../assets/img/Москва/1.webp';
/*  Переславль-Залевский  */
import pereslav_tour_1 from '../assets/img/Переславль_Залевский/1.webp';
/*  Плёс  */
import ples_tour_1 from '../assets/img/Плёс/1.webp';    
/*  Ростов Великий  */
import rostov_velikii_tour_1 from '../assets/img/Ростов_Великий/1.webp';
/*  Рыбинск  */
import ribinsk_tour_1 from '../assets/img/Рыбинск/1.webp';
/*  Сергиев Посад  */
import sergeev_posad_tour_1 from '../assets/img/Сергиев_Посад/1.webp';
/*  Углич  */
import yglich_tour_1 from '../assets/img/Углич/1.webp';
/*  Юрьев-Польский  */
import uyriev_polskiy_tour_1 from '../assets/img/Юрьев_Польский/1.webp';
/*  Ярославль  */
import yaroslavl_tour_1 from '../assets/img/Ярославль/1.webp';

function Home() {

const {
    numTheme,setNumTheme,search_active, rorp
}= Hoocks();

    return (
        <div className="home_page" onClick={rorp}>
            <Header setNumTheme={setNumTheme} numTheme={numTheme} search_active={search_active}/>
            <div className="opMbox">
                <Menu/>
                <div className='cntainer_content'
                style={{
                    position:'relative',
                    zIndex:'2',
                }}>
                    <div className='container__new_tours'>
                        <h2>Новые туры</h2>
                        <div className="container__scroll">
                            {/*  Суздаль  */}
                            <NewTour 
                                imgTour={suzdal_tour_1}
                                tourlink='/info-tour'
                                title="Суздаль" 
                                time="16" 
                                routes="8 маршрутов"
                            />
                            {/*  Александров  */}
                            <NewTour 
                                imgTour={aleksandrov_tour_1} 
                                tourlink='/info-tour'
                                title="Александров" 
                                time="11" 
                                routes="5 маршрутов"
                            />
                            {/*  Владимир  */}
                            <NewTour 
                                imgTour={vladimir_tour_1}
                                tourlink='/info-tour' 
                                title="Владимир" 
                                time="28" 
                                routes="14 маршрутов"
                            />
                            {/*  Боголюбово  */}
                            <NewTour 
                                imgTour={bogolubovo_tour_1}
                                tourlink='/info-tour' 
                                title="Боголюбово" 
                                time="28" 
                                routes="14 маршрутов"
                            />
                            {/*  Гороховец  */}
                            <NewTour 
                                imgTour={gorohovec_tour_1}
                                tourlink='/info-tour' 
                                title="Гороховец" 
                                time="28" 
                                routes="14 маршрутов"
                            />
                            {/*  Гусь Хрустальный  */}
                            <NewTour 
                                imgTour={goos_tour_1}
                                tourlink='/info-tour' 
                                title="Гусь Хрустальный" 
                                time="28" 
                                routes="14 маршрутов"
                            />
                            {/*  Иваново  */}
                            <NewTour 
                                imgTour={ivanovo_tour_1}
                                tourlink='/info-tour' 
                                title="Иваново" 
                                time="28" 
                                routes="14 маршрутов"
                            />
                            {/*  Калязин  */}
                            <NewTour 
                                imgTour={kaliazin_tour_1}
                                tourlink='/info-tour' 
                                title="Калязин" 
                                time="28" 
                                routes="14 маршрутов"
                            />
                            {/*  Кидекша  */}
                            <NewTour 
                                imgTour={kidekha_tour_1}
                                tourlink='/info-tour' 
                                title="Кидекша" 
                                time="28" 
                                routes="14 маршрутов"
                            />
                            {/*  Кострома  */}
                            <NewTour 
                                imgTour={kostrama_tour_1}
                                tourlink='/info-tour' 
                                title="Кострома" 
                                time="28" 
                                routes="14 маршрутов"
                            />
                            {/*  Москва  */}
                            <NewTour 
                                imgTour={moskva_tour_1}
                                tourlink='/info-tour' 
                                title="Москва" 
                                time="28" 
                                routes="14 маршрутов"
                            />
                            {/*  Переславль-Залевский  */}
                            <NewTour 
                                imgTour={pereslav_tour_1}
                                tourlink='/info-tour' 
                                title="Переславль-Залевский" 
                                time="28" 
                                routes="14 маршрутов"
                            />
                            {/*  Плёс  */}
                            <NewTour 
                                imgTour={ples_tour_1}
                                tourlink='/info-tour' 
                                title="Плёс" 
                                time="28" 
                                routes="14 маршрутов"
                            />
                            {/*  Ростов Великий  */}
                            <NewTour 
                                imgTour={rostov_velikii_tour_1}
                                tourlink='/info-tour' 
                                title="Ростов Великий" 
                                time="28" 
                                routes="14 маршрутов"
                            />
                            {/*  Рыбинск  */}
                            <NewTour 
                                imgTour={ribinsk_tour_1}
                                tourlink='/info-tour' 
                                title="Рыбинск" 
                                time="28" 
                                routes="14 маршрутов"
                            />
                            {/*  Сергиев Посад  */}
                            <NewTour 
                                imgTour={sergeev_posad_tour_1}
                                tourlink='/info-tour' 
                                title="Сергиев Посад" 
                                time="28" 
                                routes="14 маршрутов"
                            />
                            {/*  Углич  */}
                            <NewTour 
                                imgTour={yglich_tour_1}
                                tourlink='/info-tour' 
                                title="Углич" 
                                time="28" 
                                routes="14 маршрутов"
                            />
                            {/*  Юрьев-Польский  */}
                            <NewTour 
                                imgTour={uyriev_polskiy_tour_1}
                                tourlink='/info-tour' 
                                title="Юрьев-Польский" 
                                time="28" 
                                routes="14 маршрутов"
                            />
                            {/*  Ярославль  */}
                            <NewTour 
                                imgTour={yaroslavl_tour_1}
                                tourlink='/info-tour' 
                                title="Ярославль" 
                                time="28" 
                                routes="14 маршрутов"
                            />
                        </div>
                    </div>
                    <div className='containet__box_tours'>
                        <h2>Наши туры</h2>
                        <div 
                        style={{
                            textAlign:'center',                    
                            paddingBottom: '80px',
                        }} 
                        className="container__control_tour"
                        >
                            {/*  Владимир  */}
                            <Tour 
                                imgTour={vladimir_tour_1}
                                tourlink='/info-tour' 
                                title="Владимир" 
                                time="28" 
                                routes="14 маршрутов"
                            />
                            {/*  Суздаль  */}
                            <Tour 
                                imgTour={suzdal_tour_1}
                                tourlink='/info-tour' 
                                title="Суздаль" 
                                time="16" 
                                routes="8 маршрутов"
                            />
                            {/*  Александров  */}
                            <Tour 
                                imgTour={aleksandrov_tour_1} 
                                tourlink='info-tour'
                                title="Александров" 
                                time="11" 
                                routes="5 маршрутов"
                            />
                            {/*  Боголюбово  */}
                            <Tour imgTour={bogolubovo_tour_1}
                            tourlink='/info-tour' 
                                title="Боголюбово" 
                                time="28" 
                                routes="14 маршрутов"
                            />
                            {/*  Гороховец  */}
                            <Tour 
                                imgTour={gorohovec_tour_1}
                                tourlink='/info-tour' 
                                title="Гороховец" 
                                time="28" 
                                routes="14 маршрутов"
                            />
                            {/*  Гусь Хрустальный  */}
                            <Tour 
                                imgTour={goos_tour_1}
                                tourlink='/info-tour' 
                                title="Гусь Хрустальный" 
                                time="28" 
                                routes="14 маршрутов"
                            />
                            {/*  Иваново  */}
                            <Tour 
                                imgTour={ivanovo_tour_1}
                                tourlink='/info-tour' 
                                title="Иваново" 
                                time="28" 
                                routes="14 маршрутов"
                            />
                            {/*  Калязин  */}
                            <Tour 
                                imgTour={kaliazin_tour_1}
                                tourlink='/info-tour' 
                                title="Калязин" 
                                time="28" 
                                routes="14 маршрутов"
                            />
                            {/*  Кидекша  */}
                            <Tour 
                                imgTour={kidekha_tour_1}
                                tourlink='/info-tour' 
                                title="Кидекша" 
                                time="28" 
                                routes="14 маршрутов"
                            />
                            {/*  Кострома  */}
                            <Tour 
                                imgTour={kostrama_tour_1}
                                tourlink='/info-tour' 
                                title="Кострома" 
                                time="28" 
                                routes="14 маршрутов"
                            />
                            {/*  Москва  */}
                            <Tour 
                                imgTour={moskva_tour_1}
                                tourlink='/info-tour' 
                                title="Москва" 
                                time="28" 
                                routes="14 маршрутов"
                            />
                            {/*  Переславль-Залевский  */}
                            <Tour 
                                imgTour={pereslav_tour_1}
                                tourlink='/info-tour' 
                                title="Переславль-Залевский" 
                                time="28" 
                                routes="14 маршрутов"
                            />
                            {/*  Плёс  */}
                            <Tour 
                                imgTour={ples_tour_1}
                                tourlink='/info-tour' 
                                title="Плёс" 
                                time="28" 
                                routes="14 маршрутов"
                            />
                            {/*  Ростов Великий  */}
                            <Tour 
                                imgTour={rostov_velikii_tour_1}
                                tourlink='/info-tour' 
                                title="Ростов Великий" 
                                time="28" 
                                routes="14 маршрутов"
                            /> 
                            {/*  Рыбинск  */}
                            <Tour 
                                imgTour={ribinsk_tour_1}
                                tourlink='/info-tour' 
                                title="Рыбинск" 
                                time="28" 
                                routes="14 маршрутов"
                            /> 
                            {/*  Сергиев Посад  */}
                            <Tour 
                                imgTour={sergeev_posad_tour_1}
                                tourlink='/info-tour' 
                                title="Сергиев Посад" 
                                time="28" 
                                routes="14 маршрутов"
                            />
                            {/*  Углич  */}
                            <Tour 
                                imgTour={yglich_tour_1}
                                tourlink='/info-tour' 
                                title="Углич" 
                                time="28" 
                                routes="14 маршрутов"
                            />
                            {/*  Юрьев-Польский  */}
                            <Tour 
                                imgTour={uyriev_polskiy_tour_1}
                                tourlink='/info-tour' 
                                title="Юрьев-Польский" 
                                time="28" 
                                routes="14 маршрутов"
                            />
                            {/*  Ярославль  */}
                            <Tour 
                                imgTour={yaroslavl_tour_1}
                                tourlink='/info-tour' 
                                title="Ярославль" 
                                time="28" 
                                routes="14 маршрутов"
                            />
                        </div>
                    </div>
                </div> 
                <div className="opBox opBoxTwoo"></div>
            </div>
        </div>
    );
}

export default Home;
